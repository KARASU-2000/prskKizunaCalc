// 計算ボタン押下時の処理
function clickBtnCalc(){
    try {
        // ランク1からtargetRankまでのEXPを求める
        let requiredExpTargetRank = getRequiredExp(getInputTargetRank());
        // ランク1からcurrentRankまでのEXPを求める
        let requiredExpCurrentRank = getRequiredExp(getInputCurrentRank());

        // 現在ランクが目標ランク以上であれば、入力エラーとする
        if(requiredExpTargetRank <= requiredExpCurrentRank){
            throw new Error("目標ランクは現在ランクよりも高い数値を入力してください");
        }

        // クリアランク・サブリーダー or メンバーから、クリアEXPを求める
        // クリアランクのチェック状態を取得
        let inputClearRank = getInputClearRank();
        // 編成のチェック状態を取得
        let inputOrganization = getInputOrganization();

        // 計算結果を出力する
        outputTryLiveCount(requiredExpTargetRank - requiredExpCurrentRank, inputClearRank * inputOrganization);
    }
    catch (error) {
        // エラー時はアラートを表示する
        alert(error.message);
    }
}

// クリアボタン押下の処理
function clickBtnCancel(){
    let clearField;
    
    try {
        // 確認メッセージを表示する
        if(!confirm("入力と計算結果をクリアしますがよろしいですか？")){
            // クリア処理をキャンセルする
            return;
        }

        // 入力を全てクリアする
        clearField = document.getElementById("number_current_rank");
        clearField.value = "";
        clearField = document.getElementById("number_target_rank");
        clearField.value = "";
        clearField = document.getElementById("rdb_clear_rank_s");
        clearField.checked = true;
        clearField = document.getElementById("rdb_setting_sub");
        clearField.checked = true;

        // 出力を全てクリアする
        magnificationTable = getMagnificationTable();
        for(let i = 0; i < magnificationTable.length; i++){
            clearField = document.getElementById("result" + (i + 1));
            clearField.textContent = "";
        }
    }
    catch (error) {
        // エラー時はアラートを表示する
        alert(error.message);
    }
}