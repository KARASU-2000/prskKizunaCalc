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