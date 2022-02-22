export const wrappedInfo = (data) =>{
    // 정보가 없을 가능성이 있는 경우 사용
    return(data? data : "정보 없음");
}