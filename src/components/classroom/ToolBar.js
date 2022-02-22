// import React, { useEffect, useState } from 'react';

// import { useSelector, shallowEqual } from 'react-redux';
// import useApi from 'components/Hooks/useApi';
// import useApiSimple from 'components/Hooks/useApiSimple';

// import PeerCreation from "../../../PeerCreation";
// import DesktopCaptur from './DesktopCaptur';
// import ChattingComponent from 'components/Chatting';

// import { SocketStatus, makeSocketConnection } from "./SocketHelpers";
// import * as ipcFuctions from "./IPCFunctions";
// import moment from 'moment-timezone';

// import { getScheduleByStudentDate } from 'redux/actions/api_schedule';
// import {checkSignalingUser} from 'redux/actions/api_signaling';
// import { getAllHolidayExceptTeacher } from 'redux/actions/api_holiday';
// import { showToast } from "helpers/toast";

// import { logout } from 'redux/actions/auth';

// import DeviceOption from "../../../components/DevicesOption";
// import Canvas from "./Canvas";

// import Tony from "assets/classroom/classroom-tony.png"
// import TonyHover from "assets/classroom/classroom-tony-hover.png"
// import Modal from 'guideComponents/Modal';
// import ButtonWithModal from 'components/ButtonWithModal';
// import MyPageCalendar from 'components/RenewalCalendar/MyPageCalendar';
// import ScheduleViewList from 'components/RenewalCalendar/ScheduleViewList';
// import SimpleSlider from 'components/SimpleSlider';

// import { EventListSmall4, EventListSmall5 } from 'assets/root_img/EventList';

// const parseEventsColor = (status) => {
//     switch (status) {
//         case "CR":
//             return "#2196F3";            
//         case "AB":
//             return "#F44336";
//         case "AT":
//             return "#4CAF50";
//         default:
//             return "balck";
//     }
// }


// const ToolBar = ({history, getTextbook, setTrigger, toggleCouponModal}) => {
//     //===========================================USE API=============================================//
//     const [SchedulesLoading, Schedules, SchedulesError, getSchedules] = useApi(getScheduleByStudentDate);
//     const [SchedulesLoading2, Schedules2, SchedulesError2, getSchedules2] = useApi(getScheduleByStudentDate);
//     const [signalingLoading, signalingResult, signalingReject, signalingAction] = useApi(checkSignalingUser);
//     const [logoutLoading, Logout] = useApiSimple(logout)
//     const [getAllHolidayLoading, getAllHoliday] = useApiSimple(getAllHolidayExceptTeacher);

//     //===========================================USE SELECTOR=============================================//
//     const {studentInfo, auth, holidays} = useSelector(state=>({
//         studentInfo: state.api_studentinfo.studentinfo,
//         auth: state.auth,
//         holidays: state.api_holiday.holidays,
//     }), shallowEqual)
//     // const studentInfo = useSelector(state=>state.api_studentinfo.studentinfo);
//     // const auth = useSelector(state => state.auth, shallowEqual);
//     // const textbook = useSelector(state => state.api_textbook.textbook, shallowEqual);


//     //===========================================USE STATE=============================================//
    
//     const [socket, setSocket] = useState({});
//     const [socketStatus, setSocketStatus] = useState(SocketStatus.READY);
//     const [chatMsg, setChatMsg] = useState({});
//     const [chatHistory, setChatHistory] = useState([]);
//     const [isTeacherOn, setIsTeacherOn] = useState(false);
//     const [peerCreation, setPeerCreation] = useState(new PeerCreation());
//     const [myTeacher, setMyTeacher] = useState(null);
//     const [lastNotifyTime, setLastNotifyTime] = useState(Date.now());
//     const [isElectron, setIsElectron] = useState(true)
//     const [screenSize, setScreenSize] = useState({
//         width : 1,
//         height: 1
//     })
//     const [ipcRenderer, setIPCRenderer] = useState(null);
//     const [canvasOpen, setCanvasOpen] = useState(false);
//     const [teacherHovered , setTeacherHovered] = useState(false);
//     const [isRemote, setIsRemote] = useState(false);
//     const [isScheduleOpen, setScheduleOpen] = useState(false);
//     const [studentSchedules, setStudentSchedules] = useState([]);
//     const [todayFullcalendarString, setTodayFullcalendarString] = useState(null)

//     //===========================================USE EFFECT=============================================//
//     useEffect(()=>{
//         let now_Seoul = moment().tz("Asia/Seoul").format("YYYY-MM-DDTHH:mm:ss.SSS");
//         let now_Seoul2 = new Date();
//         let start_ISO = now_Seoul.split('T')[0] + "T00:00";
//         let seven_days_later_from_today = now_Seoul2;
//         seven_days_later_from_today.setDate(now_Seoul2.getDate()+7);
//         seven_days_later_from_today = seven_days_later_from_today.toISOString();
//         let end_ISO = seven_days_later_from_today.split('T')[0] + "T23:59";
//         getSchedules(auth.user.id, start_ISO, end_ISO);

//         let electron = null;
//         let ipc = null;
//         //check wheather electron or web browser
//         var userAgent = navigator.userAgent.toLowerCase();
//         if (userAgent.indexOf(' electron/') > -1) {
//             electron = window.require("electron");
//             ipc = electron.ipcRenderer;
//         }
//         else{
//             setIsElectron(false);
//         }
//         ipc.on("reply-screen-size", (event, width, height) => {
//             setScreenSize({
//                 width : width,
//                 height : height
//             });
//         })
//         ipc.send("get-screen-size")
//         setIPCRenderer(ipc);
//         let today = new Date(Date.now()- (new Date().getTimezoneOffset() * 60000)).toISOString().substring(0,10);
//         setTodayFullcalendarString(`td[data-date="${today}"]>.fc-day-number`);
//         if (!holidays) getAllHoliday();

//         return () => {
//             ipc.removeAllListeners()
//         }
//     },[]);

//     useEffect(() => {
//         return () => {
//             if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
//                 socket.close();
//             }
//         }
//     },[socket])
    
//     useEffect(()=>{
//         if(Schedules && Schedules.length > 0){
//             let schedule_now = Schedules[0];
//             setMyTeacher(schedule_now.teacher);
//             signalingAction(schedule_now.teacher.id);
//             makeSocketConnection(auth, schedule_now.teacher.username, setSocket, setSocketStatus, setChatMsg, setIsTeacherOn, getTextbook, peerCreation, setupPeerCreation, setTrigger, toggleCouponModal);
//         }
//     },[Schedules])

//     useEffect(()=>{
//         if(socket.readyState === WebSocket.OPEN && ipcRenderer){
//             setupPeerCreation();
//         }
//     },[socket.readyState, ipcRenderer])

//     useEffect(()=>{
//         if(signalingResult && signalingResult.online){
//             setIsTeacherOn(true);
//         }
//     },[signalingResult])

//     useEffect(()=>{
//         if (chatMsg.content){
//             setChatHistory(chatHistory.concat([chatMsg]))
//         }
//     },[chatMsg])

//     //===========================================FUNCTIONS=============================================//
//     const handleShowAlert = (msg, type) => {
//         showToast("", msg, type)
//     }

//     const checkNotify = () => {
//         //if asked more than 3seconds ago
//         if(Date.now() - lastNotifyTime >= 3000){
//             setLastNotifyTime(Date.now());
//             return true
//         }
//         else {
//             return false
//         }
//     }

//     const notifyTeacher = (teacher_fisrt_name, teacher_username) => {
//         var msg = JSON.stringify({
//           notify: "",
//           to_username: teacher_username,
//           to_name: teacher_fisrt_name,
//           from_username: auth.user.username,
//           from_name: auth.user.first_name
//         })
//         if (socket.readyState === WebSocket.OPEN) {
//           if(checkNotify()){
//             socket.send(msg)
//             handleShowAlert(teacher_fisrt_name + " 선생님에게 도움을 요청했습니다.", "info")
//           }
//           else {
//             handleShowAlert("잠시 후에 다시 요청할 수 있습니다.", "danger")
//           }
//         }
//     }

//     const setupPeerCreation = () =>{
//         let stream = document.getElementById('studentLocalVideo').srcObject
//         let my_peer = peerCreation.init(stream, false)
//         setIsRemote(false);

//         my_peer.on("signal", data => {
//             let msg = JSON.stringify({
//                 offer: data,
//                 to_username: myTeacher.username
//             });
//             if (socket.readyState === WebSocket.OPEN) {
//                 socket.send(msg);
//             }
//         });
//         my_peer.on("connect", () => {
//             handleShowAlert(myTeacher.first_name + " 선생님과 연결되었습니다!", "info")
//             setIsRemote(true);
//             peerCreation.peer.send(
//                 JSON.stringify({
//                     connected: true
//                 })
//             )
//         });
//         my_peer.on("data", data => {
//             const dataObj = JSON.parse(data)
//             if (dataObj.type == "mouse_click") {
//                 ipcFuctions.ipcSendMouseClick(ipcRenderer, screenSize, dataObj)
//             } else if (dataObj.type == "mouse_move") {
//                 ipcFuctions.ipcSendMouseMove(ipcRenderer, screenSize, dataObj)
//             } else if (dataObj.type == "mouse_up") {
//                 ipcFuctions.ipcSendMouseUp(ipcRenderer, screenSize)
//             } else if (dataObj.type == "mouse_down") {
//                 ipcFuctions.ipcSendMouseDown(ipcRenderer, screenSize, dataObj)
//             } else if (dataObj.type == "key_press") {
//                 ipcFuctions.ipcSendKeyPress(ipcRenderer, screenSize, dataObj.keyCode, dataObj.modifiers)
//             } else if (dataObj.type == "right_mouse_down") {
//                 ipcFuctions.ipcSendRightMouseDown(ipcRenderer, screenSize, dataObj)
//             } else {
//                 handleShowAlert("WebRTC data channel received: " + data, "primary")
//             }
//         });
//         my_peer.on("stream", stream => {
//             document.getElementById('studentAudio').srcObject = stream
//         });
//         my_peer.on("close", () => {
//             peerCreation.destroy(setupPeerCreation);
//         });
//         my_peer.on("error", (e) => {
//             console.log('-================error=====================')
//             console.log(e)
//             peerCreation.destroy(setupPeerCreation); // 없어도될수도
//         });
//     }

//     const connectChat = (msgContent) => {
//         let msg = JSON.stringify({
//           classroom_chat: "",
//           to_username: myTeacher.username,
//           from_username: auth.user.username,
//           content: msgContent,
//           created_at: moment().tz("Asia/Seoul").format("YYYY-MM-DDTHH:mm:ss.SSS"),
//           from_first_name: auth.user.first_name
//         })
//         if (socket.readyState === WebSocket.OPEN) {
//           socket.send(msg)
//         }
//     }

//     if (!isElectron){
//         history.push('/');
//         return null;
//     }

//     const handleSchedule = async (start, end) => {
//         let tempScheduleArray = []
//         let checkDuplicateStartTime = ""
//         const schedules = await getSchedules2(auth.user.id, start, end);
//         schedules.sort((a,b) => new Date(a.start_time) - new Date(b.start_time))
//         for(let i=0;i<schedules.length;++i){
//             if(checkDuplicateStartTime===schedules[i].start_time) continue;
//             checkDuplicateStartTime = schedules[i].start_time;
//             tempScheduleArray.push({
//                 // fullcalendar data
//                 id: schedules[i].id,
//                 start: checkDuplicateStartTime,
//                 backgroundColor: parseEventsColor(schedules[i].status),
//                 borderColor: parseEventsColor(schedules[i].status),
//                 // custom data
//                 status: schedules[i].status,
//                 teacher: schedules[i]?.teacher?.first_name,
//                 startTime: schedules[i].start_time,
//                 endTime: schedules[i].end_time
//             })
//         }
//         setStudentSchedules(tempScheduleArray);
//     }

//     return(
//         <>
//         <Modal
//             isOpen={isScheduleOpen}
//             toggle={()=>setScheduleOpen(!isScheduleOpen)}
//             title=''
//             size='lg'
//         >
//             <div className='classroom-modal-schedule'>
//                 <div>
//                     <div className='header'>시간표</div>
//                     <div className='modal-schedule-container calendar'>
//                         <MyPageCalendar
//                             holidays={holidays}
//                             getCalendarData={handleSchedule}
//                             events={studentSchedules}
//                             scheduleStr={todayFullcalendarString}
//                         />
//                     </div>
//                     <div className='modal-schedule-container schedule'>
//                         <ScheduleViewList
//                             schedules={studentSchedules}
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <div className='header'>이벤트</div>
//                     <div className='modal-schedule-container events'>
//                         <SimpleSlider
//                             width={360}
//                         >
//                             {/* <div onClick={()=>window.open('/community/events/4')}>
//                                 <img src={EventListSmall4} />
//                             </div> */}
//                             <div onClick={()=>window.open('/community/events/1')}>
//                                 <img src={EventListSmall5} />
//                             </div>
//                         </SimpleSlider>
//                     </div>
//                     <div className='header'>공지사항</div>
//                     <div className='modal-schedule-container notice'>준비중입니다.</div>
//                 </div>
//             </div>
//         </Modal>
//         <div className="classroom-toolbar">
//             <Canvas isOpen={canvasOpen} toggle={()=>setCanvasOpen(!canvasOpen)}/>
//             <div className="toolbar-contents">
//                 {Schedules? <div className="toolbar-user-card">
//                     {isRemote? <div className="toolbar-user-status">
//                         <div> 
//                             <div className="online"/>
//                             연결됨
//                         </div>
//                     </div> : null}
//                     <div className={"toolbar-user-image" + (isTeacherOn? " online" : "")} 
//                     onClick={isTeacherOn? ()=>{notifyTeacher(myTeacher.first_name, myTeacher.username)} : null} 
//                     onMouseEnter={isTeacherOn? ()=>{setTeacherHovered(true)}: null} 
//                     onMouseLeave={isTeacherOn? ()=>{setTeacherHovered(false)}: null}>
//                         <img src={teacherHovered? TonyHover : Tony}/>
//                     </div>
//                     <div className="toolbar-user-name">
//                         {myTeacher? <div>{myTeacher.first_name}</div> : <div>Tony</div>}
//                         <div className="teacher">선생님</div>
//                     </div>
//                 </div> : null}
//                 <div className="toolbar-button-placeholder">
//                     <div 
//                         className="toolbar-button" 
//                         onClick={()=>setScheduleOpen(!isScheduleOpen)}
//                     >
//                         <span className="material-icons-outlined">
//                             event
//                         </span>
//                     </div>
//                     <div>시간표</div>
//                 </div>
//                 <div className="toolbar-button-placeholder">
//                     <div className="toolbar-button" onClick={()=>{setCanvasOpen(true)}}>
//                         <span className="material-icons-outlined">
//                             palette
//                         </span>
//                     </div>
//                     <div>그림판</div>
//                 </div>
//                 <div className="toolbar-button-placeholder">
//                     <DeviceOption
//                         peerAudio={document.getElementById('studentAudio')}
//                         testAudio={document.getElementById('studentTestAudio')}
//                         peer={peerCreation.peer}
//                         needToCaptureDesktop={true}
//                     >
//                         <div className="toolbar-button">
//                             <span className="material-icons-outlined">
//                                 headset_mic
//                             </span>
//                         </div>
//                         <div>장비설정</div>
//                     </DeviceOption>
//                 </div>
//             </div>
//             <div className="classroom-logout">
//                 <ButtonWithModal
//                 modalMessage="로그아웃 하시겠습니까?"
//                 modalTitle="Logout"
//                 isConfirmed={()=>Logout()}
//                 >
//                     <span className="material-icons-outlined">
//                         logout
//                     </span>
//                     로그아웃
//                 </ButtonWithModal>
//                 {/* <div onClick={()=>{handleLogout()}}>
//                     <span className="material-icons-outlined">
//                         logout
//                     </span>
//                     로그아웃
//                 </div> */}
//             </div>
//             {peerCreation? <DesktopCaptur peer={peerCreation.peer} /> : null}
//             <ChattingComponent 
//                 connectChat={connectChat}
//                 msg={chatHistory}
//                 room_name={myTeacher? myTeacher.first_name + ' 선생님' : ""}
//                 showTimeStamp={true}
//             />
//         </div>
//         </>
//     )
    
// };

// export default ToolBar;
