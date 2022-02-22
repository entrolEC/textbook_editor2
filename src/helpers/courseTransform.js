export const get_course_level = (level) => {
    if(level === "ADV") {
        return "Adventurer"
    } else if(level==="PIO") {
        return "Pioneer"
    } else if(level==="MAS") {
        return "Master"
    } else if(level==="EXP") {
        return "Expert"
    }
}

export const get_course_level_kor = (level) => {
    if(level === "ADV") {
        return "모험가"
    } else if(level==="PIO") {
        return "개척자"
    } else if(level==="MAS") {
        return "숙련가"
    } else if(level==="EXP") {
        return "전문가"
    }
}

export const get_course_type = (str) => {
    if (str === "NO" || str === "NP"){
        return "Normal"
    } else if (str === "BL" || str === "BP"){
        return "Black"
    } else if (str === "BG" || str === "BGP"){
        return "Black"
        // return "블랙(외국어)"
    } else if (str === "BR" || str === "BRP"){
        return "Black"
        // return "블랙(개별)"
    }
}

export const get_course_type_kor = (str) => {
    if (str === "NO" || str === "NP"){
        return "일반"
    } else if (str === "BL" || str === "BP"){
        return "블랙"
    } else if (str === "BG" || str === "BGP"){
        return "블랙"
        // return "블랙(외국어)"
    } else if (str === "BR" || str === "BRP"){
        return "블랙"
        // return "블랙(개별)"
    }
}
