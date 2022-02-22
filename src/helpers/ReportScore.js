export const normalizingScore = (score_range, custom_range, score) => {
    if(score===-1) return 0;
    return Math.round(custom_range[0] + ((custom_range[1]-custom_range[0]) / (score_range[1]-score_range[0])) * (score-score_range[0]));
}

export const parseReportabbreviation  = (abbreviation) => {
    if(abbreviation==="ALG") return "알고리즘"
    else if(abbreviation==="CRE") return "창의력"
    else if(abbreviation==="LOG") return "논리력"
    else if(abbreviation==="MAT") return "수학적사고력"
    else if(abbreviation==="PRO") return "문제해결능력"
    else if(abbreviation==="ATT") return "학습태도"
    else if(abbreviation==="CON") return "집중력"
    else if(abbreviation==="DEL") return "성실성"
    else if(abbreviation==="INT") return "흥미도"
    else if(abbreviation==="GRIT") return "GRIT"
    else if(abbreviation==="SCO") return "습득력"
    else if(abbreviation==="PACE") return "학습속도"
    else return abbreviation
}