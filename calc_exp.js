// 結果の単位
const RESULT_SCALE = "回"

/**
 * ランク1からparamで受け取ったランクに到達するまでの総EXPを返却する
 * @param {number} rank 
 * @returns {number} 総EXP
 */
function getRequiredExp(rank){
    let expTable;
    let expTotal;

    try {
        // キズナランクのEXPテーブルを取得する
        expTable = getExpTable();
        // 経験値のトータルを0クリア
        expTotal = 0;

        // ランク1からparamで受け取ったランクに到達するまでの総EXPを計算する
        for(let i = 0; i < rank; i++){
            expTotal += expTable[i]["exp"];
        }
        return expTotal
    }
    catch (error) {
        throw error;
    }
}

/**
 * requiredExpを獲得するためのライブ回数を出力する
 * @param {number} requiredExp 
 * @param {number} baseExp 
 */
function outputTryLiveCount(requiredExp, baseExp){
    let magnificationTable;
    let outputStr;
    let tryLiveCount;

    try {
        // ブースト毎の倍率テーブルを取得する
        magnificationTable = getMagnificationTable();

        // 各ブースト毎に回数を計算する
        for(let i = 0; i < magnificationTable.length; i++){
            // 必要EXP / ベース経験値(ランクS～ランクD) * 倍率(ブースト)
            // 小数点以下は切り上げる
            tryLiveCount = Math.ceil((requiredExp / (baseExp * magnificationTable[i]["magnification"])));

            // テキストを書き換える形で結果出力する
            outputStr = document.getElementById("result" + (i + 1));
            outputStr.textContent = tryLiveCount + RESULT_SCALE;
        }
    }
    catch (error) {
        throw error;
    }
}