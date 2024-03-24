<script>
import NumberInputBox from '../molecules/mNumberInputBox.vue'
import RadioButton from '../molecules/mRadioButton.vue'
import Button from '../molecules/mButton.vue'
import Table from '../molecules/mTable.vue'

import Const from '../const/commonConst'
import CaclExp from '../methods/calc_exp'

export default{
    components:{
        NumberInputBox,
        RadioButton,
        Button,
        Table,
    },
    data(){
        // 各コンポーネントと紐付ける
        return{
            currentRank: 0, // 現在のキズナランク（NumberInputBoxで値をバインドする）
            targetRank: 0,  // 目標のキズナランク（NumberInputBoxで値をバインドする）
            clearRank: Const.RANK_S,    // ライブのクリアランク（RadioButtonで値をバインドする）
            // ライブのクリアランクラジオボタンに表示する1セット
            itemListClearRank: [{value:Const.RANK_S, calcValue:Const.RANK_S_EXP, defaultChecked:"true"},
                                {value:Const.RANK_A, calcValue:Const.RANK_A_EXP},
                                {value:Const.RANK_B, calcValue:Const.RANK_B_EXP},
                                {value:Const.RANK_C, calcValue:Const.RANK_C_EXP},
                                {value:Const.RANK_D, calcValue:Const.RANK_D_EXP}],
            organization: Const.ORGANIZATION_SUB,   // 編成（RadioButtonで値をバインドする）
            // 編成ラジオボタンに表示する1セット
            itemListOrganization: [{value:Const.ORGANIZATION_SUB, calcValue:Const.ORGANIZATION_SUB_RATIO, defaultChecked:"true"},
                                   {value:Const.ORGANIZATION_MEMBER, calcValue:Const.ORGANIZATION_MEMBER_RATIO}],
            // 出力欄のテーブル
            outputTable: [{id:"ブースト消費量", value:"ライブ回数"},
                          {id:"1", value:""},
                          {id:"2", value:""},
                          {id:"3", value:""},
                          {id:"4", value:""},
                          {id:"5", value:""},
                          {id:"6", value:""},
                          {id:"7", value:""},
                          {id:"8", value:""},
                          {id:"9", value:""},
                          {id:"10", value:""}],
        }
    },
    methods:{
        onCaclClick(){
            // 文字列になることがあるため数値変換する
            let nCurrentRank = Number(this.currentRank);
            let nTargetRank = Number(this.targetRank);

            // 入力チェック
            if(nCurrentRank < Const.KIZUNA_RANK_MIN || nCurrentRank > Const.KIZUNA_RANK_MAX){
                alert("現在ランクは" + Const.KIZUNA_RANK_MIN + "～" + Const.KIZUNA_RANK_MAX + "いずれかを入力してください");
                return;
            }
            if(nTargetRank < Const.KIZUNA_RANK_MIN || nTargetRank > Const.KIZUNA_RANK_MAX){
                alert("目標ランクは" + Const.KIZUNA_RANK_MIN + "～" + Const.KIZUNA_RANK_MAX + "いずれかを入力してください");
                return;
            }
            if(nTargetRank <= nCurrentRank){
                alert("目標ランクは現在ランクよりも高い数値を入力してください");
                return;
            }

            // 1回のライブあたりの経験値を計算する
            let nLiveExp = this.itemListClearRank.filter((val) => val.value === this.clearRank)[0].calcValue * 
                           this.itemListOrganization.filter((val) => val.value === this.organization)[0].calcValue;
            // 結果を配列で受け取る
            let naResult = CaclExp.getTryLiveCount(CaclExp.getRequiredExp(nTargetRank) - CaclExp.getRequiredExp(nCurrentRank), nLiveExp);

            // 出力欄の書き換え
            for(let i = 0; i < naResult.length; i++){
                this.outputTable[i + 1].value = naResult[i] + "回";
            }

            alert("計算完了しました")
        },
        onResetClick(){
            // 確認メッセージを表示する
            if(!confirm("入力と計算結果をクリアしますがよろしいですか？")){
                // クリア処理をキャンセルする
                return;
            }
            // リロードしてリセットする
            window.location.reload();
        }
    }
}
</script>

<template>
    <div class="content">
        目標のキズナランクまでに必要なライブ回数の計算を行います。<br>
        各キズナランクの必要EXPは<a href="https://pjsekai.com/?6d8e00d4c6">プロジェクトセカイ攻略Wiki</a>様の情報を参照させていただきました。
        <div class="input_filed">
            <div class="input_field_section">
                <div class="input_kizuna_rank">
                    <NumberInputBox text="現在のキズナランク" name="current_rank" min="1" max="55"
                        v-on:updateValue="currentRank = $event"></NumberInputBox>
                </div>
                <div class="input_kizuna_rank">
                    <NumberInputBox text="目標のキズナランク" name="target_rank" min="1" max="55"
                        v-on:updateValue="targetRank = $event"></NumberInputBox>
                </div>
            </div>
            <div class="input_field_section">
                <div class="input_clear_rank">
                    ライブのクリアランク
                    <RadioButton name="rdb_clear_rank" :itemList="itemListClearRank" isFlex=true v-on:updateValue="clearRank = $event"></RadioButton>
                </div>
            </div>
            <div class="input_field_section">
                <div class="input_organization">
                    編成
                    <RadioButton name="rdb_setting" :itemList="itemListOrganization" v-on:updateValue="organization = $event"></RadioButton>
                </div>
            </div>
            <div class="input_field_section">
                <Button name="btn_calc" value="計算" class="input_button" v-on:click="onCaclClick"></Button>
                <Button name="btn_reset" value="クリア" class="input_button" v-on:click="onResetClick"></Button>
            </div>
        </div>
        <hr>
        <div class="output_field">
            <Table :itemList=outputTable></Table>
        </div>
    </div>
</template>

<style>
.content{
    font-family: 'Inter';
    font-style: normal;

    position: relative;
    width: 85%;
    margin-left: 5.0%;
    /* 上のマージンは固定にする */
    margin-top: 75px;

    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;

    color: rgb(0, 0, 0);
}

/* 入力欄 */
.input_field{
    position: relative;
    width: 85%;
    /* 入力欄の最大幅 */
    max-width: 500px;
    margin-bottom: 25px;
    margin-left: 5.0%;

    line-height: 2.5rem;
}

/* 入力欄の1セクション */
.input_field_section{
    margin-left: 10%;
    /* 1セクション毎の間隔 */
    margin-top: 50px;
}

/* ボタン */
.input_field_section .input_button{
    width: 30%;
    margin-left: 10%;
}

/* 出力欄 */
.output_field{
    position: relative;
    width: 85%;
    /* 出力欄の最大幅 */
    max-width: 500px;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 5.0%;

    line-height: 2.5rem; 
}

.output_field table{
    border: 2.0px solid #000000;
    border-collapse: collapse;
}

.output_field th, td{
    border: 1.0px solid #000000;
}
</style>