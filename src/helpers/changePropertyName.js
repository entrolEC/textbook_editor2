const changePropertyName = (oldKey, newKey, obj) => {
    if(!obj) return;
    if(obj.hasOwnProperty(oldKey)){
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    }
}

export default changePropertyName;