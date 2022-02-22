// import * as roles from "../UserRoles";

// export const countOnlineUsers = (online_users, role) => {
//     let arr = Object.keys(online_users);
//     if(arr.length <= 0){
//         return 0
//     }else{
//         let res = arr.filter(username => {
//             return online_users[username].role == role;
//         })
//         return res.length
//     }
// }

// export const countNonTeacherUsers = (online_users) => {
//     let arr = Object.keys(online_users);
//     if(arr.length <= 0){
//         return 0
//     }else{
//         let res = arr.filter(username => {
//             return online_users[username].role != roles.TEACHER;
//         })
//         return res.length
//     }
// }