// import { toastr } from "react-redux-toastr";
// import { SHOW_TOAST, CLEAR_TOAST } from "redux/actions/types";
// import store from 'store';
// import * as $ from 'jquery';

// let options = {
//     timeOut: 5000,
//     showCloseButton: true,
//     progressBar: false,
//     position: "top-center"
// };

// export const showToastDeprecated = (title, msg, type) => {
//     const toastrInstance =
//         type === "info" ? toastr.info : 
//         type === "warning" ? toastr.warning : 
//         type === "danger" ? toastr.error : toastr.success;

//     return toastrInstance(title, msg, options);
// }

// export const showToast = (title, content, type) => {
//     let tempArr = []
//     if (title) tempArr.push(title)
//     if (content) tempArr.push(content)
//     let id = Date.now()
//     let newToast = {
//         id: id,
//         content: tempArr,
//         type: type
//     }

//     store.dispatch({
//         type: SHOW_TOAST,
//         payload: newToast
//     })
    
//     setTimeout(() => {
//         clearToast(id)
//     }, 5000)
// }

// export const clearToast = (id) => {
//     let index = store.getState().toast.toastList.findIndex(elem => elem.id === id)
//     if (index > -1){
//         $("#toast-" + id).fadeOut(350).promise().done(function() {
//             store.dispatch({
//                 type: CLEAR_TOAST,
//                 payload: id
//             })
//         })
//     }
// }