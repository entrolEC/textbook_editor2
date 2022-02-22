
// import { showToast } from "../../../helpers/toast";
// import { API_URL, CLASSROOM_ENTRY_TIME_BUFFER, SOC_PROTOCOL } from "../../../config";

// export const SocketStatus = {
//     READY: 0,
//     CONNECTING: 1,
//     CONNECTED: 2
// }

// export const makeSocketConnection = async (
//     auth, 
//     teacherUsername, 
//     setSocket, 
//     setSocketStatus, 
//     setChatMsg, 
//     setIsTeacherOn, 
//     getTextbook,
//     peerCreation,
//     setupPeerCreation, 
//     setTrigger,
//     setIsCouponModalOpen,
//     toggleCouponModal
//     ) => {
//     const username = auth.user.username
//     const token = auth.token
//     // const room_name = auth.user.profile.classroom
//     // 임시로 room1 정적인 값으로 설정
//     // 추후 방이 나누어 지게 될 경우, 스케줄의 teacher 정보에 있는 id를 통해 teacher_info에 등록된 classroom을 받아와야 한다
//     // 직영점의 경우 default room 을 지정해 입장 시켜 준다
//     const room_name = 'room1';
//     const role = auth.user.profile.role

//     // Connecting to chatroom
//     //const socket = new WebSocket("wss://" + API_URL + ":8001/ws/signaling/" + room_name + "/")
//     const socket = new WebSocket(SOC_PROTOCOL + API_URL + "/ws/signaling/" + room_name + "/", ["access_token", token, role]);

//     socket.onopen = e => {
//         //send authentication token to server
//         socket.send(JSON.stringify({ access_token: token }))
//         setSocketStatus({socketStatus : SocketStatus.CONNECTED})
//     }
//     socket.onmessage = async e => {
//         var data = JSON.parse(e.data)

//         //ignore when teacher called during conference
//         if (data.type == "offer") {
//             if (data["to_username"] == username) {
//                 if(!peerCreation.initialized){
//                     setupPeerCreation()
//                     let offIntervalId = setInterval(() => {
//                     peerCreation.connect(data["peer_data"], offIntervalId)
//                     }, 2000);
//                 }
//                 else {
//                     peerCreation.connect(data["peer_data"]) //send signal
//                 }
//             }
//         } else if (data.type == "init_peer") {
//             // if (data["to_username"] == username) {
//             //     //Reestablish audio & video connection
//             //     this.props.update_classmode(ClassMode.P2P, null)
//             //     //here make p2pconnection
//             //     await this.initiatePeer(data["from_username"], false)
//             // }
//         } else if (data.type == "textbook") {
//             if (data["to_username"] == username) {
//                 setTrigger(true);
//                 getTextbook(data["textbook"])
//                 showToast("", data["from_username"] + " 선생님이 교재를 보냈습니다.", "success")
//             }
//         } else if (data.type == "user_connected") {
//             if (data["username"] == username) {
//                 for (const [roomUsername, el] of Object.entries(data["users_arr"])){
//                     if(roomUsername == teacherUsername){
//                         setIsTeacherOn(true);
//                         break;
//                     }
//                 }
//             } 
//             if (data["username"] == teacherUsername && data["isTeacher"] == true) {
//                 showToast("",data["username"] + " 선생님이 강의실에 들어왔습니다.", "success")
//                 setIsTeacherOn(true);
//             }
//         } else if (data.type == "user_disconnected") {
//             if (data["username"] == teacherUsername && data["isTeacher"] == true) {
//                 showToast("", data["username"] + " 선생님이 강의실을 나갔습니다.", "warning")
//                 setIsTeacherOn(false);
//             }
//         } else if (data.type == "update_users") {
//             // this.props.update_online_users(data["users_arr"])
//             console.log("update user called")
//         } else if (data.type == "classroom_chat") {
//             if (data["from_username"] == teacherUsername){
//                 let newMsgContent = {from:"opponent", content:data["content"], createdAt:data["created_at"]}
//                 setChatMsg(newMsgContent)
//             }
//         } else if (data.type === "coupon_alert") {
//             // coupon alert setting
//             toggleCouponModal();
//         }
//     }
//     socket.onclose = e => {
//         console.error("Web socket connection closed!")
//         setSocketStatus({socketStatus : SocketStatus.READY})
//     }

//     setSocket(socket);
// }