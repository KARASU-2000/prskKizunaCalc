// 現在ランク・目標ランクの最小最大値
const KIZUNA_RANK_MIN = 1
const KIZUNA_RANK_MAX = 55

// ライブクリアランクのEXP
const CLEAR_RANK_S = 15
const CLEAR_RANK_A = 13
const CLEAR_RANK_B = 11
const CLEAR_RANK_C = 10
const CLEAR_RANK_D = 5

// 編成毎の倍率
const ORGANIZATION_SUB = 10
const ORGANIZATION_MEMBER = 1

/**
 * 画面に入力された目標ランクを数値変換して返却する
 * @returns {number} 画面に入力された目標ランク
 */
function getInputTargetRank(){
    let inputValue;
    let inputTargetRank;

    try {
        // 入力されている値を取得し、数値変換する
        inputValue = document.getElementById("number_target_rank");
        inputTargetRank = Number(inputValue.value)

        // 入力値の最小最大値チェック
        if(inputTargetRank < KIZUNA_RANK_MIN || inputTargetRank > KIZUNA_RANK_MAX){
            throw new Error("目標ランクは" + KIZUNA_RANK_MIN + "～" + KIZUNA_RANK_MAX + "いずれかを入力してください");
        }

        return inputTargetRank;
    }
    catch (error) {
        throw error;
    }
}

/**
 * 画面に入力された現在ランクを数値変換して返却する
 * @returns {number} 画面に入力された現在ランク
 */
function getInputCurrentRank(){
    let inputValue;
    let inputCurrentRank;

    try {
        // 入力されている値を取得し、数値変換する
        inputValue = document.getElementById("number_current_rank");
        inputCurrentRank = Number(inputValue.value)

        // 入力値の最小最大値チェック
        if(inputCurrentRank < KIZUNA_RANK_MIN || inputCurrentRank > KIZUNA_RANK_MAX){
            throw new Error("現在ランクは" + KIZUNA_RANK_MIN + "～" + KIZUNA_RANK_MAX + "いずれかを入力してください");
        }

        return inputCurrentRank;
    }
    catch (error) {
        throw error;
    }
}

/**
 * 画面でチェックされた、ライブのクリアランクに対応するEXPを返却する
 * @returns {number} ライブのクリアランクに対応するEXP
 */
function getInputClearRank(){
    // 戻り値
    let inputClearRank;

    try {
        // 各ラジオボタンのチェック状態を取得する
        let rdbClearRankS = document.getElementById("rdb_clear_rank_s");
        let rdbClearRankA = document.getElementById("rdb_clear_rank_a");
        let rdbClaerRankB = document.getElementById("rdb_clear_rank_b");
        let rdbClearRankC = document.getElementById("rdb_clear_rank_c");
        let rdbClearRankD = document.getElementById("rdb_clear_rank_d");

        // チェックされているクリアランクをreturnする
        if(rdbClearRankS.checked == true){
            inputClearRank = CLEAR_RANK_S;  
        }
        else if(rdbClearRankA.checked == true){
            inputClearRank = CLEAR_RANK_A;
        }
        else if(rdbClaerRankB.checked == true){
            inputClearRank = CLEAR_RANK_B;
        }
        else if(rdbClearRankC.checked == true){
            inputClearRank = CLEAR_RANK_C;
        }
        else if(rdbClearRankD.checked == true){
            inputClearRank = CLEAR_RANK_D;
        }

        // 何もチェックされていなければundefinedとなっている
        if(typeof inputClearRank === "undefined"){
            throw new Error("ライブのクリアランクにチェックを入れてください");
        }

        return inputClearRank;
    }
    catch (error) {
        throw error;
    }
}

/**
 * 画面でチェックされた、編成に対応する倍率を返却する
 * @returns {number} 編成に対応するEXP
 */
function getInputOrganization(){
    // 戻り値
    let inputOrganization;

    try {
        // 各ラジオボタンのチェック状態を取得する
        let rdbSettingSub = document.getElementById("rdb_setting_sub");
        let rdbSettingMember = document.getElementById("rdb_setting_member");

        // チェックされている編成をreturnする
        if(rdbSettingSub.checked == true){
            inputOrganization = ORGANIZATION_SUB;
        }
        else if(rdbSettingMember.checked == true){
            inputOrganization = ORGANIZATION_MEMBER;
        }

        // 何もチェックされていなければundefinedとなっている
        if(typeof inputOrganization === "undefined"){
            throw new Error("編成にチェックを入れてください");
        }
        
        return inputOrganization;
    }
    catch (error) {
        throw error;
    }
}