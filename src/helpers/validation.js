// import moment from 'moment-timezone';

// export const isEmpty = data => {
//     return (data === null || data === "" || data === undefined)
// }

// export const isValidTextbook = (textbook_data) => {
//     if(isEmpty(textbook_data.name) || isEmpty(textbook_data.level)
//     || Number.isNaN(textbook_data.level) || textbook_data.level < 0 
//     || Number.isNaN(textbook_data.course_id) ||
//     Number.isNaN(textbook_data.order_num) || textbook_data.order_num < 0 ) {
//         return false;
//     }
//     return true;
// }

// export const isValidFranchiseChargeData = (id, price) => {
//     if(isEmpty(id) || isEmpty(price)) return false
//     return true
// }

// export const isValidTextbookData = (type, file, url) => {
//     if(type == 0 && !isEmpty(file))
//         return true
//     else if(type == 1 && !isEmpty(url))
//         return true
//     else if(type == 2)
//         return true
//     return false
// }

// export const isValidReport = (report_data) => {
//     if(isEmpty(report_data.textbook.id) || Number.isNaN(report_data.textbook.id)
//     || isEmpty(report_data.student.id)  || Number.isNaN(report_data.student.id) 
//     || isEmpty(report_data.checkpoints_completed) || isEmpty(report_data.date)) {
//         return false;
//     }
//     return true;
// }

// export const isValidScheduleFixed = (schedule) => {
//     if(schedule.start_time == moment.utc(0).toISOString() || schedule.end_time == moment.utc(0).toISOString()
//     || schedule.duration === 0 || schedule.day === "")
//         return false;
//     return true
// }