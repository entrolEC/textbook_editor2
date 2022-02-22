const getTomorrow = () => {
    let today = new Date()
    today.setDate(today.getDate()+1);
    return today.getFullYear()+"-"+ ("0" + (1 + today.getMonth())).slice(-2)+"-"+("0" + today.getDate()).slice(-2);
}

export default getTomorrow;