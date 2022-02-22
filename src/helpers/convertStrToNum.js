// import moment from 'moment-timezone';

// export const convertDayToNum = (schedule, date_info) => {
//     if(schedule.day === "MON"){
//         schedule["day"] = 1
//         schedule["start_time"]=schedule.start_time.replace('2020-01-01',moment(date_info).add('days', 1).format('YYYY-MM-DD'))
//         schedule["end_time"]=schedule.end_time.replace('2020-01-01',moment(date_info).add('days', 1).format('YYYY-MM-DD'))
//         return schedule
//     }
//     else if(schedule.day == "TUE") {
//         schedule["day"] = 2
//         schedule["start_time"]=schedule.start_time.replace('2020-01-01',moment(date_info).add('days', 2).format('YYYY-MM-DD'))
//         schedule["end_time"]=schedule.end_time.replace('2020-01-01',moment(date_info).add('days', 2).format('YYYY-MM-DD'))
//     }
//     else if(schedule.day == "WED"){
//         schedule["day"] = 3
//         schedule["start_time"]=schedule.start_time.replace('2020-01-01',moment(date_info).add('days', 3).format('YYYY-MM-DD'))
//         schedule["end_time"]=schedule.end_time.replace('2020-01-01',moment(date_info).add('days', 3).format('YYYY-MM-DD'))
//     }
//     else if(schedule.day == "THU"){
//         schedule["day"] = 4
//         schedule["start_time"]=schedule.start_time.replace('2020-01-01',moment(date_info).add('days', 4).format('YYYY-MM-DD'))
//         schedule["end_time"]=schedule.end_time.replace('2020-01-01',moment(date_info).add('days', 4).format('YYYY-MM-DD'))
//     }
//     else if(schedule.day == "FRI"){
//         schedule["day"] = 5
//         schedule["start_time"]=schedule.start_time.replace('2020-01-01',moment(date_info).add('days', 5).format('YYYY-MM-DD'))
//         schedule["end_time"]=schedule.end_time.replace('2020-01-01',moment(date_info).add('days', 5).format('YYYY-MM-DD'))
//     }
//     else if(schedule.day == "SAT"){
//         schedule["day"] = 6
//         schedule["start_time"]=schedule.start_time.replace('2020-01-01',moment(date_info).add('days', 6).format('YYYY-MM-DD'))
//         schedule["end_time"]=schedule.end_time.replace('2020-01-01',moment(date_info).add('days', 6).format('YYYY-MM-DD'))
//     }
//     else if(schedule.day == "SUN"){
//         schedule["day"] = 0
//         schedule["start_time"]=schedule.start_time.replace('2020-01-01',moment(date_info).format('YYYY-MM-DD'))
//         schedule["end_time"]=schedule.end_time.replace('2020-01-01',moment(date_info).format('YYYY-MM-DD'))
//     }
//     else
//         return -1
// }

// export const convertDayToNumSimple = (schedule) => {
//     if(schedule === "MON"){
//         return 1
//     }
//     else if(schedule == "TUE")
//         return 2
//     else if(schedule == "WED")
//         return 3
//     else if(schedule == "THU")
//         return 4
//     else if(schedule == "FRI")
//         return 5
//     else if(schedule == "SAT")
//         return 6
//     else if(schedule == "SUN")
//         return 0
//     else
//         return 7
// }

// export const convertNumToDay = (day_int) => {
//     if(day_int == 1)
//     return "MON"
//     else if(day_int == 2)
//         return "TUE"
//     else if(day_int == 3)
//         return "WED"
//     else if(day_int == 4)
//         return "THU"
//     else if(day_int == 5)
//         return "FRI"
//     else if(day_int == 6)
//         return "SAT"
//     else if(day_int == 0)
//         return "SUN"
//     else
//         return "error"
// }

// export const convertNumToDayKor = (day_int) => {
//     if(day_int == 0)
//     return "일"
//     else if(day_int == 1)
//         return "월"
//     else if(day_int == 2)
//         return "화"
//     else if(day_int == 3)
//         return "수"
//     else if(day_int == 4)
//         return "목"
//     else if(day_int == 5)
//         return "금"
//     else if(day_int == 6)
//         return "토"
//     else
//         return "오류"
// }

// export const dayText = (date) => {
//     if(date.getDay() === 0){
//         return '일'
//     } else if(date.getDay() === 1){
//         return '월'
//     } else if(date.getDay() === 2){
//         return '화'
//     } else if(date.getDay() === 3){
//         return '수'
//     } else if(date.getDay() === 4){
//         return '목'
//     } else if(date.getDay() === 5){
//         return '금'
//     } else if(date.getDay() === 6){
//         return '토'
//     }
// }

// export const EngToKor = (string) => {
//     if(string === "MON") {
//         return "월"
//     } else if(string === "TUE") {
//         return "화"
//     } else if(string === "WED") {
//         return "수"
//     } else if(string === "THU") {
//         return "목"
//     } else if(string === "FRI") {
//         return "금"
//     } else if(string === "SAT") {
//         return "토"
//     } 
// }

// export const everyDayText = (date) => {
//     if(date.getDay() === 0){
//         return '(매주)일'
//     } else if(date.getDay() === 1){
//         return '(매주)월'
//     } else if(date.getDay() === 2){
//         return '(매주)화'
//     } else if(date.getDay() === 3){
//         return '(매주)수'
//     } else if(date.getDay() === 4){
//         return '(매주)목'
//     } else if(date.getDay() === 5){
//         return '(매주)금'
//     } else if(date.getDay() === 6){
//         return '(매주)토'
//     }
// }

// export const EngToKorMonth = (month_eng) => {
//     if (month_eng === "Jan") return "1월";
//     else if (month_eng === "Feb") return "2월";
//     else if (month_eng === "Mar") return "3월";
//     else if (month_eng === "Apr") return "4월";
//     else if (month_eng === "May") return "5월";
//     else if (month_eng === "Jun") return "6월";
//     else if (month_eng === "Jul") return "7월";
//     else if (month_eng === "Aug") return "8월";
//     else if (month_eng === "Sep") return "9월";
//     else if (month_eng === "Oct") return "10월";
//     else if (month_eng === "Nov") return "11월";
//     else if (month_eng === "Dec") return "12월";
//     else return "오류";
// }

// export const convertStrToDateStr = (str) => {
//     let dateStr = str.slice(0,4) + "." + str.slice(4,6) + "." + str.slice(6);
//     return dateStr;
// }

// export const convertISOStrtoDateStr = (str) => {
//     let dateArr = str.split("-");
//     let dateStr = '';
//     dateArr.map((item, index) => {
//         dateStr += item;
//         if (index < dateArr.length - 1) dateStr += ".";
//     })
//     return dateStr;
// }