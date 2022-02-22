const getSchedulePrice = (courseType, courseLevel) => {
    if(courseType==="NO") {
        switch (courseLevel) {
            case "ADV":
                return 26000;
            case "PIO":
                return 29000;
            case "MAS":
                return 33000;
            case "EXP":
                return 36000;
            default:
                return -1;
        }
    } else if(courseType==="BL"){
        switch (courseLevel) {
            case "ADV":
                return 32000;
            case "PIO":
                return 35000;
            case "MAS":
                return 39000;
            case "EXP":
                return 42000;
            default:
                return -1;
        }
    } else if(courseType==="BG"){
        switch (courseLevel) {
            case "ADV":
                return 42000;
            case "PIO":
                return 45000;
            case "MAS":
                return 49000;
            case "EXP":
                return 52000;
            default:
                return -1;
        }
    } else if(courseType==="BR"){
        switch (courseLevel) {
            case "ADV":
                return 65000;
            case "PIO":
                return 72000;
            case "MAS":
                return 82000;
            case "EXP":
                return 95000;
            default:
                return -1;
        }
    } else if(courseType==="BS"){
        switch (courseLevel) {
            case "ADV":
                return 37500;
            case "PIO":
                return 42500;
            case "MAS":
                return 47500;
            case "EXP":
                return 52500;
            default:
                return -1;
        }
    }
}

export default getSchedulePrice;