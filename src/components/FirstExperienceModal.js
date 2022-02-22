// import moment from 'moment-timezone';
// import { connect } from 'react-redux';
// import 'moment/locale/ko';
// import React from "react";
// import { Badge, Col, Row, ModalBody, Modal, Input, Card, CardBody, CardHeader } from "reactstrap";
// import * as schedule_actions from 'redux/actions/api_schedule';
// import * as student_info_actions from 'redux/actions/api_studentinfo';
// import * as holiday_actions from 'redux/actions/api_holiday';

// import "assets/sass/DarkCalendar.scss"
// import "assets/css/TimeSelectTable.css"
// import "assets/css/NewModal.css";
// import "assets/css/RootModal.css";
// import "assets/css/RootFont.css";
// import "assets/css/MobileCourseSignup.css";
// import 'assets/css/FixedCalendar.css';
// import "assets/sass/MyPage/TemporalFirstExperienceModal.scss";
// import close_btn from 'assets/root_img/Modal/BtnClose.svg';

// import ModalCalendar from 'components/Calendar/ModalCalendar/ModalCalendar';
// import Loader from 'guideComponents/Loader';

// class FirstexperienceModal extends React.Component {
//     constructor(props) {
//         super(props);
//         moment().locale('ko');
//         this.state = {
//             hovered_event: [],
//             time_selected: "",
//             dateSelected:"",
//         };
//         this.buttonlock = false;
//         this.calendarRef = React.createRef();


//         let tomorrow = new Date();
//         tomorrow.setDate(tomorrow.getDate() + 1);
//         tomorrow.setHours(tomorrow.getHours() + 9);

//         // temporarily date for topolar holiday 2021-07-01~2021-07-07
//         let topolarHolidayEnd = new Date('2021-07-07T23:59:59')
        
//         let OWL = new Date();
//         if(Date.parse(topolarHolidayEnd) > Date.parse(OWL)){
//             OWL = new Date('2021-07-15');
//         } else {
//             OWL.setDate(OWL.getDate()+9);
//             OWL.setHours(OWL.getHours()+9);
//         }

//         this.validStart = tomorrow.toISOString().slice(0,10);
//         this.validEnd = OWL.toISOString().slice(0,10);
//         this.weekdays= ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]
//         this.weekdays_short = ["일","월","화","수","목","금","토"]
//         this.holidays = {};
//     }

//     async componentDidMount(){
//         await this.props.get_available_time();
//         await this.props.get_holiday()
//     }

//     componentWillUnmount(){
//         this.state.time_selected = "";
//     }

//     getStartListMobile = ()=>{
//         let selectedDate = new Date(this.state.dateSelected);
//         selectedDate.setHours(selectedDate.getHours() - 9);
//         if (selectedDate.getDay() != 6){
//             return([
//                 // '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '14:30', '15:30', '16:30', '17:30', '18:30', '19:30',
//                 '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00',
//             ])
//         }
//         else{
//             return ([
//                 // '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '12:30', '13:30', '14:30', '15:30', '16:30', '17:30', '18:30', '19:30', '20:30',
//                 '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
//             ])
//         }
//     }
    
//     handleButtonClick = (time) => {
//         if (this.state.time_selected === time){
//             this.setState({
//                 time_selected:""
//             });
//             // this.state.baseEvent.pop();
//         }
//         else{
//             this.setState({
//                 time_selected:time,
//                 hovered_event:[]
//             });
//             // this.state.baseEvent.push(this.timeToEvent(time,"#47BAC1"));
//         }
//     }

//     handleOnFinalClick = async ()=>{
//         const { time_selected, dateSelected } = this.state;
//         const { current_available_time } = this.props;
        
//         let confirmMsg = "스케줄 확정 이후에는 변경, 삭제 및 첫 수업 프로모션 재이용이 불가능합니다.\n";

//         if (!window.confirm(confirmMsg + "이대로 확정하시겠습니까?")){
//             return;
//         }
        
//         let data = {
//             "teacher_id": current_available_time[dateSelected.slice(0,10)].content[time_selected],
//             "schedule":{
//                 'date':dateSelected.slice(0,10),
//                 'time':time_selected
//             }
//         };

//         await this.props.register_trial(data);
//         await this.props.get_student_info();

//         this.togglesync();
//         window.location.reload();
//     }

//     listDate = () => {
//         const {dateSelected} = this.state;
//         var start_date = new Date(this.validStart);
//         let end_date = new Date(this.validEnd);
//         start_date.setDate(start_date.getDate() + 1)
//         let date_option = [];
//         while (start_date.getTime() < end_date.getTime()) {
//             let options = start_date.toISOString()
//             date_option.push(options)
//             start_date.setDate(start_date.getDate() + 1)
//         }
//         if(!dateSelected && date_option.length > 0) {
//             this.handleDateSelect(date_option[0])
//         }
//         return (
//             <div className='d-theme-container'>
//                 <Card id="select-date" style={{width: "100%", marginBottom : "20px"}}>
//                     <div className='calendar-title'>날짜 선택</div>
//                     <CardBody className="temporal-mobile-calendar-view">
//                         <div className='m-fixed-schedule-container'>
//                             {date_option.map((date, index) => {
//                                 let date_date = new Date(date).getDate();
//                                 let date_day = this.weekdays_short[new Date(date).getDay()];
//                                 let holiday = false;
//                                 if(new Date(date).getUTCDay() == 0 || this.props.current_available_time[date.slice(0,10)].type === 'holiday') {
//                                     holiday = true;
//                                 }else{ holiday = false };
//                                 return (
//                                     <div className='time-btn-in-course-signup-mobile flex-column-between' style={holiday?{color: 'red'}:{color: '#ACACAC'}} key={index} id={index}>
//                                         <div onClick={() => {this.handleDateSelect(date)}}>{date_day}</div>
//                                         <button style={dateSelected === date?{}:holiday?{color: 'red'}:{}} className={dateSelected === date? "btn-round btn-round-clicked" : "btn-round btn-round-default temporal-mobile-day-button"}
//                                         onClick={() => {this.handleDateSelect(date)}}>
//                                             {date_date}
//                                         </button>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//     }

//     handleDateSelect = (date) => {
//         this.setState({
//             dateSelected: date,
//             time_selected: "",
//         })
//     }

//     setDateSelected = (str)=>{
//         this.setState({
//             date_selected: str
//         });
//     }

//     listTimesMobile = () => {
//         const { time_selected, dateSelected } = this.state;
//         const { current_available_time } = this.props;
//         let start_list = this.getStartListMobile();
//         let valid_list = []
//         if (current_available_time[dateSelected.slice(0,10)]) {
//             start_list.map((el) => {
//                 Object.keys(current_available_time[dateSelected.slice(0,10)].content).includes(el)?
//                 valid_list.push(el)
//                 :
//                 valid_list = valid_list
//             })
//         }
//         return (
//             <div className='d-theme-container'>
//                 <Card id="select-time" style={{width: "100%", marginBottom : "20px", minHeight:"112px", justifyContent:"center"}}>
//                     {this.listTimeMessage(valid_list)}
//                     {valid_list.length !== 0?
//                     <CardBody>
//                         <div className='m-fixed-schedule-container'>
//                             {valid_list.map((el, index) => {
//                                 return (
//                                     <div className="time-btn-in-course-signup-mobile" key={index}>
//                                         <button style={{maxWidth: '100px'}}
//                                         className={time_selected === el? "btn-small btn-clicked btn-no-shadow" : "btn-small btn-modal btn-no-shadow"}
//                                         onClick={() => {this.handleButtonClick(el)}}>
//                                             {el}
//                                         </button>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </CardBody>
//                     :
//                     null
//                     }
//                 </Card>
//             </div>
//         )
//     }

//     listTimeMessage = (valid_list) => {
//         const {dateSelected} = this.state;
//         if (this.validStart >= dateSelected.slice(0,10) || this.validEnd <= dateSelected.slice(0,10)){
//             return (
//                 <div className='calendar-title' style={{justifyContent:'center', marginBottom: "15px"}}>
//                     지정할 수 없는 날짜입니다.
//                 </div>
//             );
//         }
//         else if (new Date(dateSelected).getUTCDay() == 0 || this.props.current_available_time[dateSelected.slice(0,10)].type === 'holiday'){
//             return(
//                 <div className='calendar-title' style={{justifyContent:'center', marginBottom: "15px"}}>
//                     해당 날짜는 공휴일입니다.
//                 </div>
//             );
//         }
//         else if (valid_list.length === 0) {
//             return(
//                 <div className='calendar-title' style={{justifyContent:'center', marginBottom: "15px"}}>
//                     해당 날짜에 수강 가능한 시간이 없습니다.
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div className='calendar-title'>
//                     시간 선택
//                 </div>
//             );
//         }
//     }


//     selectedTime = (date_selected_format) => {
//         const { time_selected, dateSelected } = this.state;

//         if (dateSelected&&time_selected) {
//             let end_time_hour = parseInt(time_selected.slice(0,2)) + 1;
//             let end_time = [end_time_hour, time_selected.slice(3,5)].join(':')
//             return (
//                 <div className='d-theme-container'>
//                     <Card className="mb-0 w-100">
//                         <CardBody className='justify-column-between' style={{textAlign:"center"}}>
//                             <Badge color="white" className='font-14'>선택한 시간</Badge>
//                             <div>
//                                 {date_selected_format.month+date_selected_format.day+date_selected_format.date+time_selected+" ~ "+end_time}
//                             </div>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         }
//         else if (dateSelected&&!time_selected){
//             return (
//                 <div className='d-theme-container'>
//                     <Card className="mb-0 w-100 temporal-mobile-select-time-container">
//                         <CardBody className="f-b">
//                         <Badge color="white" className='font-14 temporal-mobile-badge'>선택한 시간</Badge>
//                         <br/>
//                         시간을 선택해 주세요.
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         }
//         else {
//             return null;
//         }
//     }

//     togglesync = () => {
//         this.props.toggle();
//         this.state.dateSelected = "";
//         this.state.time_selected = "";
//     }

//     formatDate = (date) => {
//         if(date==='Sun') {
//             return "일요일 "
//         } else if (date==="Mon"){
//             return "월요일 "
//         } else if (date==="Tue"){
//             return "화요일 "
//         } else if (date==="Wed"){
//             return "수요일 "
//         } else if (date==="Thu"){
//             return "목요일 "
//         } else if (date==="Fri"){
//             return "금요일 "
//         } else if (date==="Sat"){
//             return "토요일 "
//         }
//     }

//     render(){
//         const {isOpen, toggle} = this.props;
//         const {dateSelected} = this.state;
//         let date_selected_format = {
//             month: moment(this.state.dateSelected).format("M월 "),
//             day: moment(this.state.dateSelected).format("D일 "),
//             date: this.formatDate(moment(this.state.dateSelected).format("ddd"))
//         }
//         if (Object.keys(this.props.current_available_time).length){
//             return(
//                 this.props.auth.screen_size==='desktop'?
//                 <Modal className="modal-lg dark-calendar temporal-first-experience-modal" isOpen={isOpen} toggle={toggle} centered>
//                     <div id="first-experience-modal" className='modal-container flex-column-between '>
//                         <div className='modal-s1-container flex-column-between'>
//                             <div className='s1-eng'>
//                                 free trial class
//                             </div>
//                             <div className='s1-title'>
//                                 체험수업 일정 선택
//                             </div>
//                             <a className={'close-btn-container'} onClick={this.togglesync}>
//                                 <img src={close_btn}/>
//                             </a>
//                         </div>
//                         <ModalBody>
//                             {
//                                 (this.props.registerLoading) ?
//                                 <Loader color="tb" />
//                                 :
//                                 <ModalCalendar
//                                     type = {2}
//                                     dateSelected = {this.state.date_selected}
//                                     setDateSelected = {this.setDateSelected}
//                                     toggle = {toggle}
//                                     updateTrialAction = {this.props.updateTrialAction}
//                                     schedule = {this.props.prev_schedule}
//                                     submitAPI = {this.props.updateTrialAction}
//                                 />
//                             }
//                         </ModalBody>
//                     </div>
//                 </Modal>
//                 :
//                 <Modal className="modal-lg dark-calendar temporal-first-experience-modal" isOpen={isOpen} toggle={toggle} centered style={{padding: '0 5%'}}>
//                     <div className='modal-container flex-column-between'>
//                         <div className='modal-s1-container flex-column-between'>
//                             <div className='s1-eng'>
//                                 First Experience Class
//                             </div>
//                             <div className='s1-title'>
//                                 체험수업 일정 선택
//                             </div>
//                             <a className={'close-btn-container'} onClick={this.togglesync}>
//                                 <img src={close_btn}/>
//                             </a>
//                         </div>
//                         <ModalBody id="first-experience-modal-body" className='flex-column-between'>
//                             {
//                                 (this.props.registerLoading) ?
//                                 <Loader color="tb" />
//                                 :
//                                 <div>
//                                     <Row style={{textAlign:"center",position:"relative", marginTop: "15px"}}>
//                                         {this.listDate()}
//                                     </Row>
//                                     {dateSelected?
//                                     <Row style={{textAlign:"center",position:"relative", margin: '0'}}>
//                                         {this.listTimesMobile()}
//                                         {this.selectedTime(date_selected_format)}
//                                     </Row>
//                                     :
//                                     null}
//                                     <Row style={{position:"relative", padding:"20px"}}>
//                                         <Col className= "text-center"> 
//                                             <button className='btn-small btn-modal temporal-cancel-button' onClick={this.togglesync}>취소</button>
//                                         </Col>
//                                         <Col className= "text-center"> 
//                                             <button className='btn-small btn-modal temporal-request-button' disabled={!this.state.time_selected} onClick={() => this.handleOnFinalClick()}>신청</button> : 
//                                         </Col>
//                                     </Row>
//                                 </div>
//                             }
//                         </ModalBody>
//                     </div>
//                 </Modal>
//             );
//         }
//         else{
//             return null;
//         }
//     }
// }

// const mapStateToProps = (state) => ({
//     //get studentInfo data before log in in pages/DataProcess/index.js
//     current_available_time: state.api_schedule.current_available_time,
//     auth: state.auth,
//     registerLoading: state.api_schedule.registerLoading
// });

// const mapDispatchToProps = (dispatch) => ({
//     get_available_time: () => dispatch(schedule_actions.getAvailableTrialSchedule()),
//     register_trial: (data) => dispatch(schedule_actions.registerTrialSchedule(data)),
//     get_student_info: () => dispatch(student_info_actions.getMyStudentInfo()),
//     get_holiday: () => dispatch(holiday_actions.getIndividualHoliday()),
// });

// const ConnectedFirstexperienceModal = connect(mapStateToProps, mapDispatchToProps)(FirstexperienceModal);
// export default ConnectedFirstexperienceModal;