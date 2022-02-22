/*
    CodeMaster API 호출 및 이용 시 해당 코드 값을 사용해 요청합니다.
*/

const BOARD_CATEGORY = {
    notice: '001',
    review: '002'
}

const BOARD_DIVISION = {
    general: '001',
    check: '002',
    schedule: '003',
    text: '004',
    video: '005'
}

const BOARD_LEVEL = {
    ADV: '001',
    PIO: '002',
    MAS: '003'
}

const BOARD_LANGUAGE = {
    scratch: '001',
    python: '002',
    react: '003',
    java: '004'
}
// trial: 체험수업
// regular: 정규
// winterSC: 겨울 특강
// UniSC: 건대 특강
const COURSE_TYPE = {
    trial: '001',
    regular: '002',
    winterSC: '004',
    UniSC: '005',
}

export {
    BOARD_CATEGORY,
    BOARD_DIVISION,
    BOARD_LEVEL,
    BOARD_LANGUAGE,
    COURSE_TYPE
}