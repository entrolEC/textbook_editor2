// import React from 'react';
// import {
//     FormGroup,
//     Label,
//     Row,
//     Col,
//     Input,
// } from "reactstrap";
// import moment from 'moment-timezone';
// import Datetime from 'react-datetime';
// import { connect } from 'react-redux';
// import '../assets/css/NewModal.css';
// import update from 'immutability-helper'
// import {
//     Slash
// } from "react-feather";
// import { showToast } from "../helpers/toast";
// import { getStudentSurvey } from '../redux/actions/api_studentinfo';
// import StudentInfoPopover from './StudentInfoPopover';
// import { toggleSurveyInfo } from '../helpers/StudentInfoPopover';

// class ManageScheduleInfo extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             schedules_by_index:{},
//             currentPopoverStudentInfo: null,
//             surveyInfoList: {},
//             loading_survey_info: false
//         }
//     }

//     componentDidMount() {
//         const { schedule } = this.props
//         if (schedule) this.setStateSchedule(schedule)
//     }

//     componentDidUpdate(prevProps) {
//         const { schedule } = this.props
//         if(schedule !== prevProps.schedule) {
//             this.setStateSchedule(schedule)
//         }
//     }

//     setStateSchedule = (schedule) => {
//         const { role } = this.props
//         let dict = {}
//         schedule.schedule_id.forEach((id, view_group_index) => {
//             dict[view_group_index] = {
//                 start_time: role==="teacher" ? schedule.start_time[view_group_index] : schedule.start_time,
//                 end_time: role==="teacher" ? schedule.end_time[view_group_index] : schedule.end_time,
//                 teacher_id: schedule.teacher_id[view_group_index]
//             }
//         })

//         this.setState({
//             schedules_by_index: dict
//         })
//     }

//     getTeacherOptions = () => {
//         const { teachers_list=[] } = this.props
//         if(teachers_list.length===0) return;
//         return (
//             <React.Fragment>
//                 {
//                     teachers_list.map((teacher, index) => {
//                         return (
//                             <option key={index} value={teacher.id}>{teacher.first_name}</option>
//                         )
//                     })
//                 }
//             </React.Fragment>
//         )
//     }

//     handleChange = (e, view_group_index, name) => {
//         const { schedules_by_index } = this.state
//         let temp = e.clone()
//         const value = temp.add(9,'hours').toISOString()
//         this.setState({
//             schedules_by_index: update(schedules_by_index, {
//                 [view_group_index]: {
//                     [name]: {$set : moment.utc(value).toISOString().slice(0,17)+"00"}
//                 }
//             })
//         })
//     }

//     showButton = (id, schedule, view_group_index) => {
//         return(
//             <div className='flex justify-content-center'>
//                 <div onClick={() => {this.handleClickChange(id, schedule, view_group_index)}} className="edit-icon ml-1 pr-2" color="blue" size={20} style={{cursor : "pointer"}}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="14.831" height="14.831" viewBox="0 0 14.831 14.831">
//                     <path id="Icon_awesome-pen" data-name="Icon awesome-pen" d="M8.421,2.7,12.13,6.409,4.077,14.462l-3.306.365A.7.7,0,0,1,0,14.059L.371,10.75,8.421,2.7Zm6-.552L12.682.408a1.391,1.391,0,0,0-1.967,0L9.077,2.046l3.708,3.708,1.638-1.638a1.391,1.391,0,0,0,0-1.967Z" transform="translate(0.001 0)" fill="#1db4b4"/>
//                     </svg>
//                 </div>
//                 <div onClick={() => {this.handleClickDelete(id, view_group_index)}} className="delete-icon ml-3 pr-2" color="red" size={20} style={{cursor : "pointer"}}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="12.95" height="16.65" viewBox="0 0 12.95 16.65">
//                     <path id="Icon_material-delete" data-name="Icon material-delete" d="M8.425,19.3a1.855,1.855,0,0,0,1.85,1.85h7.4a1.855,1.855,0,0,0,1.85-1.85V8.2H8.425ZM20.45,5.425H17.212L16.287,4.5H11.662l-.925.925H7.5v1.85H20.45Z" transform="translate(-7.5 -4.5)" fill="#1db4b4"/>
//                     </svg>
//                 </div>
//                 {this.props.role==="admin" ?
//                 <div className="dolloar-icon ml-3" >
//                     <Slash style={{cursor: 'pointer'}} color="#1db4b4" size={18} onClick={() => {this.handleClickInvalid(id, view_group_index)}}></Slash>
//                 </div> : null
//                 }
//             </div>
//         )
//     }

//     handleTeacherChange = (e, view_group_index) => {
//         const { value } = e.target
//         this.setState({
//             schedules_by_index: {
//                 ...this.state.schedules_by_index,
//                 [view_group_index]: {
//                     ...this.state.schedules_by_index[view_group_index],
//                     teacher_id: value
//                 }
//             }
//         })
//     }

//     handleClickDelete = (schedule_id, view_group_index) => {
//         const { schedule } = this.props
//         // format("YYYY-DD-HH") to ISOString
//         const start = moment.utc(this.state.schedules_by_index[view_group_index].start_time).toISOString();
//         const end = moment.utc(this.state.schedules_by_index[view_group_index].end_time).toISOString();

//         this.props.deleteSchedule(
//             schedule_id, 
//             this.props.role==="admin" ? schedule.franchise_id[view_group_index] : null, 
//             start, 
//             end
//             )
//     }

//     handleClickInvalid = (schedule_id, view_group_index) => {
//         const { schedule } = this.props
//         const start = moment.utc(this.state.schedules_by_index[view_group_index].start_time).toISOString();
//         const end = moment.utc(this.state.schedules_by_index[view_group_index].end_time).toISOString();

//         this.props.deleteScheduleWithFullRefund(schedule_id, schedule.franchise_id[view_group_index], start, end)
//     }

//     handleClickChange = (schedule_id, previous_schedule, view_group_index) => {
//         let duration = this.getDurationHour(view_group_index)
//         const schedule = {
//             start_time: this.state.schedules_by_index[view_group_index].start_time,
//             end_time: this.state.schedules_by_index[view_group_index].end_time,
//             duration: duration,
//             teacher: parseInt(this.state.schedules_by_index[view_group_index].teacher_id)
//         }
//         //set time exception
//         if(schedule.start_time >= schedule.end_time) {
//             showToast("시간 오류", "시간 설정을 한번 더 확인해 주세요", "danger");
//             return;
//         }
//         this.props.editSchedule(
//             schedule_id, 
//             schedule, 
//             previous_schedule, 
//             this.props.role==="admin" ? this.props.schedule.franchise_id[view_group_index] : null
//             )
//     }

//     getDurationHour = (view_group_index) => {
//         let start_time = this.state.schedules_by_index[view_group_index].start_time
//         let end_time = this.state.schedules_by_index[view_group_index].end_time

//         let duration = moment.utc(end_time).toDate().getTime() - moment.utc(start_time).toDate().getTime()
//         return moment.duration(duration).asHours()
//     }

//     render(){
//         const { schedule={}, role } = this.props
//         const { surveyInfoList, currentPopoverStudentInfo, loading_survey_info } = this.state
//         return (
//             <React.Fragment>
//                 <Row form>
//                     <Col md="1_5">
//                         <FormGroup><Label className="c-ff">이름</Label></FormGroup>
//                     </Col>
//                     <Col md="1_5">
//                         <FormGroup><Label className="c-ff">선생님</Label><br/></FormGroup>
//                     </Col>
//                     <Col md="3">
//                         <FormGroup><Label className="c-ff">시작시간</Label></FormGroup>
//                     </Col>
//                     <Col md="3" className="ml-1">
//                         <FormGroup><Label className="c-ff">종료시간</Label></FormGroup>
//                     </Col>
//                     {role==="admin" || role==="teacher" ? 
//                     <Col md="1">
//                     <FormGroup><Label className="c-ff">지점</Label></FormGroup>
//                     </Col> : 
//                     null
//                     }
//                     {role==="teacher" ? null :
//                     <Col md="2">
//                         <FormGroup className='text-center c-ff'><Label>수정 / 삭제 {role==="admin" ? "/ 환불" : ""}</Label></FormGroup>
//                     </Col>
//                     }
//                 </Row>
//                 {schedule?schedule.schedule_id.map((schedule_id, view_group_index) => {
//                     return (
//                         <Row key={"view_modal_"+schedule_id} form>
//                             <Col md="1_5" onClick={() => toggleSurveyInfo(this, schedule.student_id[view_group_index])}>
//                                 <FormGroup>
//                                     <p className="c-ff" style={{cursor: 'pointer'}} id={"survey_info_"+schedule.student_id[view_group_index]}>{schedule.student[view_group_index]+"("+schedule.student_id[view_group_index]+")"}</p>
//                                 </FormGroup>
//                             </Col>
//                             <Col md="1_5">
//                                 <FormGroup>
//                                     {role!=="admin" ? 
//                                     <p className="c-ff">{schedule.teacher[view_group_index]}</p> :
//                                     <Input className='input-select-general-h32 black-input' type="select" onChange={(e) => this.handleTeacherChange(e, view_group_index)}
//                                     value={this.state.schedules_by_index[view_group_index] ? this.state.schedules_by_index[view_group_index].teacher_id : 0}>
//                                         {this.getTeacherOptions()}
//                                     </Input>
//                                     }
//                                 </FormGroup>
//                             </Col>
//                             <Col md="3">
//                                 <div className='custom-datepicker'>
//                                     <Datetime
//                                         name="start_time"
//                                         ref="datetime"
//                                         timeConstraints={{minutes:{step:30}}}
//                                         value = {this.state.schedules_by_index[view_group_index] ? Date.parse(this.state.schedules_by_index[view_group_index].start_time) : []}
//                                         onChange={(e)=>{this.handleChange(e, view_group_index,"start_time")}}
//                                         initialViewMode="days"
//                                     />
//                                 </div>
//                             </Col>
//                             <Col md="3" className="ml-2">
//                                 <div className='custom-datepicker'>
//                                     <Datetime
//                                     name="end_time"
//                                     ref="datetime"
//                                     timeConstraints={{minutes:{step:30}}}
//                                     value = {this.state.schedules_by_index[view_group_index] ? Date.parse(this.state.schedules_by_index[view_group_index].end_time) : []}
//                                     onChange={(e)=>{this.handleChange(e, view_group_index,"end_time")}}
//                                     />
//                                 </div>
//                             </Col>
//                             {role==="admin" || role==="teacher" ?
//                             <Col md="1">
//                                 <p className="c-ff">{schedule.location[view_group_index]}</p>
//                             </Col> : 
//                             null
//                             }
//                             {role==="teacher" ? null :
//                             <Col md="2">
//                                 {this.showButton(schedule_id, schedule, view_group_index)}
//                             </Col>
//                             }
//                         </Row>
//                     )
//                 }):null}
//                 {currentPopoverStudentInfo ? 
//                 <StudentInfoPopover 
//                     isOpen={currentPopoverStudentInfo ? true : false}
//                     target_info={currentPopoverStudentInfo}
//                     student_info={surveyInfoList[currentPopoverStudentInfo]}
//                     loading_survey_info={loading_survey_info}
//                     toggleSurveyInfo={this.toggleSurveyInfo}
//                     parent={this}
//                 /> :
//                 null
//                 }
//             </React.Fragment>
//         )
//     }
// }

// export default connect(state => ({
//     role: state.auth.user.profile.role,
//     selected_student_info: state.api_studentinfo.others_studentinfo,
// }),
// dispatch => ({
//     get_popover_survey_info: (student_id) => dispatch(getStudentSurvey(student_id)),
    
// })
// )(ManageScheduleInfo)