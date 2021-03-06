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
//     return "???"
//     else if(day_int == 1)
//         return "???"
//     else if(day_int == 2)
//         return "???"
//     else if(day_int == 3)
//         return "???"
//     else if(day_int == 4)
//         return "???"
//     else if(day_int == 5)
//         return "???"
//     else if(day_int == 6)
//         return "???"
//     else
//         return "??????"
// }

// export const dayText = (date) => {
//     if(date.getDay() === 0){
//         return '???'
//     } else if(date.getDay() === 1){
//         return '???'
//     } else if(date.getDay() === 2){
//         return '???'
//     } else if(date.getDay() === 3){
//         return '???'
//     } else if(date.getDay() === 4){
//         return '???'
//     } else if(date.getDay() === 5){
//         return '???'
//     } else if(date.getDay() === 6){
//         return '???'
//     }
// }

// export const EngToKor = (string) => {
//     if(string === "MON") {
//         return "???"
//     } else if(string === "TUE") {
//         return "???"
//     } else if(string === "WED") {
//         return "???"
//     } else if(string === "THU") {
//         return "???"
//     } else if(string === "FRI") {
//         return "???"
//     } else if(string === "SAT") {
//         return "???"
//     } 
// }

// export const everyDayText = (date) => {
//     if(date.getDay() === 0){
//         return '(??????)???'
//     } else if(date.getDay() === 1){
//         return '(??????)???'
//     } else if(date.getDay() === 2){
//         return '(??????)???'
//     } else if(date.getDay() === 3){
//         return '(??????)???'
//     } else if(date.getDay() === 4){
//         return '(??????)???'
//     } else if(date.getDay() === 5){
//         return '(??????)???'
//     } else if(date.getDay() === 6){
//         return '(??????)???'
//     }
// }

// export const EngToKorMonth = (month_eng) => {
//     if (month_eng === "Jan") return "1???";
//     else if (month_eng === "Feb") return "2???";
//     else if (month_eng === "Mar") return "3???";
//     else if (month_eng === "Apr") return "4???";
//     else if (month_eng === "May") return "5???";
//     else if (month_eng === "Jun") return "6???";
//     else if (month_eng === "Jul") return "7???";
//     else if (month_eng === "Aug") return "8???";
//     else if (month_eng === "Sep") return "9???";
//     else if (month_eng === "Oct") return "10???";
//     else if (month_eng === "Nov") return "11???";
//     else if (month_eng === "Dec") return "12???";
//     else return "??????";
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