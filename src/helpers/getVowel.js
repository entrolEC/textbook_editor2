const kor_f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

export const getVowel = (student_name, only_first=false) => {
    const ga = 44032;       //44302: 가
    let array_student_name = student_name.split("")
    let student_name_uni = null;

    if(only_first) {
        student_name_uni = array_student_name[0].charCodeAt(0) - ga;
        return kor_f[parseInt(student_name_uni / 588)];
    }
    else {
        let temp = [];
        for(let i=0;i<student_name.length;i++) {
            student_name_uni = array_student_name[i].charCodeAt(0) - ga;
            temp.push(kor_f[parseInt(student_name_uni / 588)]);
        }

        return temp.join("");
    }
}