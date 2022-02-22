// import { ApiService } from 'ApiService'

// const apiService = new ApiService();

// const getClassroomNumber = (teacherId) => {
//     return new Promise((resolve, reject) => {
//         apiService.getTeacherByTeacherId({headers: {'Authorization': `Token ${localStorage.getItem('token')}`}}, teacherId).then(res => {
//             resolve(res.data.user_teacherinfo.classroom);
//         }).catch(err => {
//             reject(err);
//         })
//     })
// }

// export default getClassroomNumber;