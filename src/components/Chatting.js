// import React from 'react';
// import { Widget, addResponseMessage, addUserMessage, renderCustomComponent, toggleInputDisabled, deleteMessages } from 'react-chat-widget';

// import 'react-chat-widget/lib/styles.css'
// import '../assets/css/Chatting.css'

// import GetFirstName from './GetFirstName'
// import {showToast} from'../helpers/toast'
// import * as $ from 'jquery';

// var shortTypeCount = 0;
// var sameTypeCount = 0;
// var prevMsg = "";

// class Chatting extends React.Component{
//     constructor(props){
//         super(props)

//         this.state ={
//             placeHolderMsg: "Type a message...",
//             maxLength: 500,
//         }
//     }

//     componentDidUpdate(prevProps) {
//         $('.rcw-new-message').attr('maxlength', this.state.maxLength);
//         //comparing userId for appearing username in chat container
//         if(this.props.room_name != prevProps.room_name){
//             deleteMessages();
//             this.props.msg.forEach((el)=>{
//                 this.renderMsg(el);
//             })
//         }
//         else if (this.props.msg.length && this.props.msg.length !== prevProps.msg.length){
//             let msg = this.props.msg[this.props.msg.length-1]
//             if(msg.from==="opponent"){
//                 addResponseMessage(msg.content);
//             }
//         }
//     }

//     renderMsg = (el)=>{
//         if(el.from==="self"){
//             addUserMessage(el.content);
//         }
//         else{
//             addResponseMessage(el.content);
//         }
//         // renderCustomComponent()
//     }
//     //eventHandler
//     handleNewUserMessage = (msgContent) => {
//         if (msgContent.length > this.state.maxLength) {
            
//             return null;
//         }
//         if(prevMsg === msgContent) {
//             sameTypeCount++;
//         }

//         if(msgContent.length < 3) {
//             shortTypeCount++
//         } else {
//             shortTypeCount = 0;
//         }

//         if(shortTypeCount === 7 || sameTypeCount === 5) {
//             showToast("", '도배 방지 경고 메세지 입니다.', 'danger');
//             shortTypeCount=0;
//             sameTypeCount=0;
//             this.setState({
//                 placeHolderMsg: "Please wait..."
//             })
//             toggleInputDisabled();
//             setTimeout(() => {
//                 toggleInputDisabled();
//                 this.setState({
//                     placeHolderMsg: "Type a message..."
//                 })
//             }, 5000);
//         }

//         this.props.connectChat(msgContent)
//         prevMsg = msgContent;
//     }

//     handleSubmit = () => {
//         return true;
//     }

//     render() {
//         const {room_name} = this.props
//         if (!room_name){
//             return null;
//         }
//         return(
//             <div>
//                 <Widget
//                     handleNewUserMessage={this.handleNewUserMessage}
//                     title={room_name}
//                     showTimeStamp={this.props.showTimeStamp}
//                     subtitle={room_name}
//                     senderPlaceHolder={this.state.placeHolderMsg}
//                     fullScreenMode={false}
//                     handleSubmit={this.handleSubmit}
//                 />
//             </div>
//         )
//     }
// }

// export default Chatting;