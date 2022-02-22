// import React from "react";
// import { connect } from "react-redux";
// import { NavLink, withRouter, Prompt, Redirect } from "react-router-dom";
// import { Badge, Button, Collapse, Input } from "reactstrap";
// import routes from "../routes/index";
// import defaultProfile from 'assets/img/avatars/defaultProfileIcon.png';

// import * as roles from "../UserRoles";

// import { getFranchise, changeFranchiseIdByAdmin } from '../redux/actions/api_franchise';
// import { getMyUserInfo } from '../redux/actions/auth';
// import { getMyStudentInfo } from '../redux/actions/api_studentinfo';
// import * as pay_actions from '../redux/actions/api_payment';
// import { showToast } from '../helpers/toast';
// import * as promotion_actions from "../redux/actions/api_promotion";
// import * as schedule_fixed_actions from '../redux/actions/api_schedule_fixed';
// import * as toggle_modal from '../redux/actions/sidebar';
// import { API_URL, API_PROTOCOL } from '../config';
// import { getConsultingInfoById } from '../redux/actions/api_consulting';
// import Logo from 'assets/root_img/whiteTopolarLogo.png';
// import classNames from 'classnames';
// import 'assets/sass/MobileSidebar.scss';
// import { logout } from 'redux/actions/auth';
// import { getUserCredits } from "redux/actions/api_credits";

// const URL = API_PROTOCOL + API_URL;

// const SidebarCategory = withRouter(
//     ({
//         name,
//         badgeColor,
//         badgeText,
//         icon: Icon,
//         isOpen,
//         children,
//         onClick,
//         location,
//         to, 
//         highlight 
//     }) => {
//         const getSidebarItemClass = path => {
//             return location.pathname.indexOf(path) !== -1 ||
//                 (location.pathname === "/" && path === "/dashboard")
//                 ? "active"
//                 : "";
//         };

//         return (
//             <li className={"sidebar-category " + getSidebarItemClass(to)}>
//                 <span
//                     data-toggle="collapse"
//                     className={"sidebar-link " + (!isOpen ? "collapsed" : "extended") + (highlight && !isOpen?" sidebar-link-highlight":"")}
//                     onClick={onClick}
//                     aria-expanded={isOpen ? "true" : "false"}
//                 >
//                     <Icon size={18} className="align-middle mr-3" />
//                     <span className="align-middle">{name}</span>
//                     {badgeColor && badgeText ? (
//                         <Badge color={badgeColor} size={18} className="sidebar-badge">
//                             {badgeText}
//                         </Badge>
//                     ) : null}
//                 </span>
//                 <Collapse isOpen={isOpen}>
//                     <ul id="item" className={"sidebar-dropdown list-unstyled"}>
//                         {children}
//                     </ul>
//                 </Collapse>
//             </li>
//         );
//     }
// );

// const SidebarItem = withRouter(
//     ({ name, badgeColor, badgeText, icon: Icon, location, to, highlight, toggle, bold, sidbarToggle, screenSize }) => {
        
//         const getSidebarItemClass = path => {
//             return location.pathname === path ? "active" : "";
//         };
//         if(name==="프로모션"){
//             return (
//                 <li className={"sidebar-item " + getSidebarItemClass(to)}>
//                     <div className={highlight?"sidebar-link-highlight":"sidebar-link"} style={highlight && highlight==='child'? {padding:"1rem 1.5rem 1rem 2rem"} : null} 
//                     onClick={
//                         () => {
//                             toggle();
//                             if(screenSize==="desktop") return;
//                             // sidbarToggle();
//                         }
//                         }>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="5.449" height="5.449" viewBox="0 0 5.449 5.449">
//                             <path id="Icon_awesome-dot-circle" data-name="Icon awesome-dot-circle" d="M3.287.563A2.725,2.725,0,1,0,6.012,3.287,2.725,2.725,0,0,0,3.287.563Zm.879,2.725a.879.879,0,1,1-.879-.879A.88.88,0,0,1,4.166,3.287Z" transform="translate(-0.563 -0.563)" fill="#9a9a9a"/>
//                         </svg>
//                         {/* {Icon ? <Icon size={18} className="align-middle mr-3" /> : null} */}
//                         {bold? <b>{name}</b> : <span>{name}</span>}
//                     </div>
//                 </li>
//             );
//         }

//         if (name==="크레딧 충전") {
//             return (
//                 <li className={"sidebar-item " + getSidebarItemClass(to)}>
//                     <div className={"sidebar-link"} 
//                     onClick={() => {
//                         toggle();
//                         if(screenSize==="desktop") return;
//                         // sidbarToggle();
//                     }}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="5.449" height="5.449" viewBox="0 0 5.449 5.449">
//                             <path id="Icon_awesome-dot-circle" data-name="Icon awesome-dot-circle" d="M3.287.563A2.725,2.725,0,1,0,6.012,3.287,2.725,2.725,0,0,0,3.287.563Zm.879,2.725a.879.879,0,1,1-.879-.879A.88.88,0,0,1,4.166,3.287Z" transform="translate(-0.563 -0.563)" fill="#9a9a9a"/>
//                         </svg>
//                         {/* {Icon ? <Icon size={18} className="align-middle mr-3" /> : null} */}
//                         {bold? <b>{name}</b> : <span>{name}</span>}
//                     </div>
//                 </li>
//             );
//         }

//         return (
//             <li className={"sidebar-item " + getSidebarItemClass(to)}>
//                 <NavLink to={
//                     window.isMobile && name==="강의실" ? window.location.pathname
//                     : to
//                 } className={highlight?"sidebar-link-highlight":"sidebar-link"} activeClassName="active" style={highlight && highlight==='child'? {padding:"0.625rem 1.5rem 0.625rem 2.75rem"} : null} 
//                 onClick={(e) => {
//                     if(screenSize==="desktop") return;
//                     else if(window.isMobile && name==="강의실") {
//                         alert("모바일 기기로는 강의실 입장이 불가합니다. 데스크탑 혹은 노트북을 이용해 주세요!")
//                     }
//                     // sidbarToggle();
//                     }}>
//                     {Icon ? <Icon size={18} className="align-middle mr-3" /> : 
//                         <svg xmlns="http://www.w3.org/2000/svg" width="5.449" height="5.449" viewBox="0 0 5.449 5.449">
//                             <path id="Icon_awesome-dot-circle" data-name="Icon awesome-dot-circle" d="M3.287.563A2.725,2.725,0,1,0,6.012,3.287,2.725,2.725,0,0,0,3.287.563Zm.879,2.725a.879.879,0,1,1-.879-.879A.88.88,0,0,1,4.166,3.287Z" transform="translate(-0.563 -0.563)" fill="#9a9a9a"/>
//                         </svg>}
//                     {bold? <b>{name}</b> : <span>{name}</span>}
//                     {badgeColor && badgeText ? (
//                         <Badge color={badgeColor} size={18} className="sidebar-badge">
//                             {badgeText}
//                         </Badge>
//                     ) : null}
//                 </NavLink>
//             </li>
//         );
//     }
// );

// class Sidebar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             redirectToClassroom: false,
//             openPromotionModal: false,
//             openSelectPaymentModal: false,
//             // openBill:false,
//             // charge:1,
//             isPayNotAvailable: false,
//             payErrorContent: {},
//             indicateStatus: null,
//             invalidSchedule: [],
//             validSchedules: [],
//             isRedirectToCourseSignup: true,
//             hasConsulting: false
//         };
//     }

//     toggle = index => {
//         this.setState(state => ({
//             [index]: !state[index]
//         }));
//     };

//     async componentDidMount() {
//         if (!this.props.franchise_list || this.props.franchise_list.length === 0){
//             await this.props.get_franchise_list();
//         }
//         if(this.props.auth.user.profile.role==='student' || this.props.auth.user.profile.role==='franchise') await this.props.get_user_credits(this.props.auth.user.id);
//         if(this.props.auth.user.profile.role==='student'){
//             try {
//                 if(this.props.checkedConsultingInfo) return;
//                 const consultingInfo = await this.props.get_consulting_info_by_student(this.props.auth.user.id, this.props.auth.user.profile.role);
//                 const filterConsulting =  consultingInfo.filter(consulting=>consulting.status!=="DE")
//                 if(filterConsulting.length !== 0) {
//                     this.setState({
//                         hasConsulting: true
//                     })
//                 }
//             } catch (error) {
//                 console.log("error getting consulting: ", error)
//             }
//         }
//     }

//     async componentDidUpdate(prevProps){
//         const { auth, studentinfo } = this.props;
//         if(auth.isAuthenticated && auth.user.profile.role === "student" && !studentinfo){
//             await this.props.get_student_info();
//         }
//     }

//     componentWillMount() {
//         /* Open collapse element that matches current url */
//         const pathName = this.props.location.pathname;

//         routes.forEach((route, index) => {
//             const isActive = pathName.indexOf(route.path) === 0;
//             const isOpen = route.open;
//             const isHome = route.containsHome && pathName === "/" ? true : false;

//             this.setState(() => ({
//                 [index]: isActive || isOpen || isHome
//             }));
//         });
//     }


//     toggleTrialModal = () => {
//         this.setState({openTrialModal: !this.state.openTrialModal});
//     }

//     toggleSelectPaymentModal = async() => {
//         this.props.toggle_select_payment_modal();
//     }

//     toggleSimpleModal = () => {
//         this.setState((prevState) => ({
//             isPayNotAvailable: !prevState.isPayNotAvailable,
//             isRedirectToCourseSignup: true
//         }))
//     }


//     handleFranchiseSelect = async (e) => {
//         const { value } = e.target

//         await this.props.set_franchise_by_admin(value)
//         await this.props.get_user();
//         window.location.reload();
//     }

//     findIntersection = (children, arr)=>{
//         let ret = false;
//         children.some((route)=>{
//             if (arr.includes(route.name)){
//                 ret = true;
//                 return true;
//             }
//         })
//         return ret;
//     }

    
//     getResult = (res) => {
//         if(res.PCD_PAY_RST === "close"){
//             showToast('', res.PCD_PAY_MSG, 'danger');
//         } else if(res.PCD_PAY_RST === "success"){
//             this.setState({
//                 openBill: false
//             },()=>{
//                 showToast('', res.PCD_PAY_MSG, 'success');
//                 window.location.href="/student/payment/list"
//             })
//             // return axios.post(`${URL}/api/payment/webhook/`, res)
//         }
//     }

//     roleRender = (role) =>{
//         return (
//             role === roles.ADMIN? '관리자' :
//             role === roles.TEACHER? '선생님' : 
//             role === roles.STUDENT? '학생' :
//             role === roles.FRANCHISE? '가맹점' : 'UNDEFINED'
//         )
//     }

//     render() {
//         const { sidebar, auth, studentinfo, franchise_list, promotion_data } = this.props; 
//         if(window.location.pathname !== "/student/classroom" && this.state.redirectToClassroom) {
//             return <Redirect to='/student/classroom' />
//         }

//         /* The sidebar items are loaded dynamically based on the routes/index component */
//         return (
//             <nav className={"sidebar " +
//             (auth.screen_size==="mobile" ?
//             "sidebar-mobile " + (sidebar.isOpen ? "sidebar-toggle-in" : "sidebar-toggle-out")
//             : ""
//             )
//             }>
//                 {auth.screen_size==='mobile' ? 
//                 <div className={classNames('service-mobile-sidebar')} onClick={(e) => e.stopPropagation()}>
//                     <img src={Logo} width="89px" height="15px" onClick={()=>{this.props.history.push('/');this.props.toggle_sidebar()}} />
//                     <div className={classNames('mobile-sidebar-sprite', 'white-close-btn')} onClick={()=>this.props.toggle_sidebar()} />
//                 </div>
//                 :
//                 null} 
//                 <div className="sidebar-profile" onClick={(e) => e.stopPropagation()}>
//                     <div className="sidebar-profile-center" style={{alignItems:"center", textAlign:"center"}}>
//                         <div className="sidebar-profile-avartar" style={{position:"relative"}}>
//                             <img
//                                 src={defaultProfile}
//                                 width={auth.screen_size==='mobile'?"112":"150"}
//                                 height={auth.screen_size==='mobile'?"112":"150"}
//                                 className="rounded-circle"
//                                 style={{marginTop:'15px', marginBottom:'24px'}}
//                             />
//                         </div>
//                         <div className="sidebar-profile-name f-b" style={{fontSize:"24px", color:"#FFFFFF"}}>{auth.user.first_name}</div>
//                         <div className="sidebar-profile-role f-b" style={{fontSize:"12px", color:"#FFFFFF", marginTop:"4px"}}>{this.roleRender(auth.user.profile.role)}</div>
//                         {((auth.user.profile.role === roles.STUDENT && auth.user.profile.franchise.id===16)||auth.user.profile.role === roles.FRANCHISE)? 
//                         <div className="sidebar-profile-point" style={{marginTop:"14px", fontSize: "12px", color:"#1DB4B4"}}>
//                             Credit : {this.props.credits}p
//                         </div> : null}
//                         <div className={classNames('service-logout')} onClick={()=>{this.props.log_out();this.props.toggle_sidebar()}}>
//                             로그아웃
//                         </div>
//                     </div>
//                 </div>
//                 <div className="sidebar-content">
//                         <Prompt 
//                             when={sidebar.isClassTime}
//                             message='아직 수업시간이 지나지 않았습니다. 그래도 종료 하시겠습니까?'
//                         />
//                         {
//                             this.props.studentinfo && this.props.studentinfo.highlight_tabs && this.props.studentinfo.highlight_tabs.includes("체험수업") ?
//                             // true?
//                             <div className="text-center" style={{paddingTop:'1em'}}>
//                                 <Button 
//                                     className="sidebar-trial-button" 
//                                     color="primary" 
//                                     onClick={
//                                         async() => {
//                                             await this.props.toggle_trial_modal(true, auth.user.id);
//                                             if(this.props.auth.screen_size==="desktop") return;
//                                             this.props.toggle_sidebar();
//                                         }
//                                     }
//                                     outline
//                                 >
//                                     체험 수업 등록
//                                 </Button>
//                             </div> :
//                             null
//                         }
//                         <ul className="sidebar-nav">
//                             {routes.map((category, index) => {
//                                 //Check whether or not to display the sidebar item
//                                 //Distinguish between shared UI, teacher UI, and student UI
//                                 if (!auth.isAuthenticated || (category.permission && (category.permission.indexOf(auth.user.profile.role) < 0))) {
//                                     return null;
//                                 }

//                                 if(category.name==="자동 수업 등록" && this.props.auth.user.profile.franchise.location!=="개인"){
//                                     return null;
//                                 }

//                                 if(category.name==="결제" && this.props.auth.user.profile.franchise.location!=="개인"){
//                                     return null;
//                                 }

//                                 if(category.name==="장비테스트" && this.props.auth.user.profile.role==="student") {
//                                     return null;
//                                 }

//                                 if(category.name==="진도 현황" && this.props.auth.screen_size === "mobile") {
//                                     return null;
//                                 }

//                                 if(category.name==="대회일정" && this.props.auth.screen_size==="mobile") {
//                                     return null;
//                                 }

//                                 if(category.name==="프로필" && this.props.auth.screen_size==="mobile") {
//                                     return null;
//                                 }

//                                 if((!this.state.hasConsulting || this.props.auth.screen_size==='mobile') && category.name==='컨설팅'){
//                                     return null;
//                                 }

//                                 return (
//                                     <React.Fragment key={index}>
//                                         {auth && auth.user.profile.role==="admin" && category.header && category.header==="가맹점주" ?
//                                         <div className="float-right mr-2 mt-1" style={{color: '#ADB5BD', fontSize: '0.75rem'}}>
//                                         가맹점 선택: 
//                                         <select className="ml-1" onChange={this.handleFranchiseSelect} value={auth.user.profile.franchise.id}>
//                                             {
//                                                 franchise_list && Object.keys(franchise_list).length !== 0 ?
//                                                 franchise_list.map((franchise, index) => {
//                                                     return (
//                                                         <option key={index} value={franchise.id}>{franchise.location}</option>
//                                                     )
//                                                 })
//                                                 : null
//                                             }
//                                         </select>
//                                         </div>
//                                         : null} 
//                                         {category.header ? (<li className="sidebar-header">{category.header}</li>) : null}
//                                         {category.children ? (
//                                             <SidebarCategory
//                                                 highlight={studentinfo && this.findIntersection(category.children, studentinfo.highlight_tabs? studentinfo.highlight_tabs : [])? 'main' : null}
//                                                 name={category.name}
//                                                 badgeColor={category.badgeColor}
//                                                 badgeText={category.badgeText}
//                                                 icon={category.icon}
//                                                 to={category.path}
//                                                 isOpen={this.state[index]}
//                                                 onClick={(e) => {e.stopPropagation();this.toggle(index)}}
//                                             >
//                                                 {category.children.map((route, index) => {
//                                                     if(this.props.auth.user.profile.franchise.location==="개인"&&route.name==="소속 가맹점"){
//                                                         return null
//                                                     }
//                                                     if(route.name==="프로모션" && (this.props.studentinfo && (!this.props.studentinfo.highlight_tabs || !this.props.studentinfo.highlight_tabs.includes('프로모션')))){
//                                                         return null;
//                                                     }

//                                                     if((route.path==="/teacher/manage/level" || route.path==='/teacher/manage/schedule') && this.props.auth.user.profile.role==="admin"){
//                                                         return null;
//                                                     }

//                                                     if(route.path==='/franchise/schedule' && this.props.auth.user.profile.role==='admin'){
//                                                         return null;
//                                                     }

//                                                     else{
//                                                         return(
//                                                             <div key={index}>
//                                                             <SidebarItem
//                                                                 highlight={studentinfo && studentinfo.highlight_tabs && studentinfo.highlight_tabs.includes(route.name)? 'child' : null}
//                                                                 key={index}
//                                                                 name={route.name}
//                                                                 to={route.path}
//                                                                 badgeColor={route.badgeColor}
//                                                                 badgeText={route.badgeText}
//                                                                 toggle={route.name==="프로모션"? this.props.toggle_promotion_modal : (route.name==="크레딧 충전"? this.toggleSelectPaymentModal: null)}
//                                                                 sidbarToggle={() => this.props.toggle_sidebar()}
//                                                                 screenSize={this.props.auth.screen_size}
//                                                             />
//                                                             <hr style={{paddingLeft:"20px",paddingRight:"15px", margin:'0', borderColor:"#292929"}}/>
//                                                             </div>
//                                                         )
//                                                     }
//                                             })}
//                                             </SidebarCategory>
//                                         ) : (
//                                                 <SidebarItem
//                                                     highlight={studentinfo && studentinfo.highlight_tabs && studentinfo.highlight_tabs.includes(category.name)? 'main' : null}
//                                                     name={category.name}
//                                                     to={category.path}
//                                                     icon={category.icon}
//                                                     badgeColor={category.badgeColor}
//                                                     badgeText={category.badgeText}
//                                                     bold={true}
//                                                     sidbarToggle={() => this.props.toggle_sidebar()}
//                                                     screenSize={this.props.auth.screen_size}
//                                                 />
//                                         )}
//                                     </React.Fragment>
//                                 );
//                             })}
//                         </ul>
//                 </div>
//                 <style jsx='true'>{`
//                     .sidebar-mobile::-webkit-scrollbar {
//                         width: 0px;
//                     }
//                 `}
//                 </style>
//             </nav>
//         );
//     }
// }

// export default withRouter(
//     connect(state => ({
//         sidebar: state.sidebar,
//         auth: state.auth,
//         studentinfo: state.api_studentinfo.studentinfo,
//         franchise_list: state.api_franchise.franchise_list,
//         topolar_uid: state.api_payment.topolar_uid,
//         payple_auth: state.api_payment.payple_auth,
//         promotion_data: state.api_promotion.promotion_data,
//         is_registered: state.api_schedule_fixed.is_registered,
//         error_code: state.api_schedule_fixed.error_code,
//         checkedConsultingInfo: state.api_consulting.checkedConsultingInfo,
//         credits: state.api_credits.credits
//     }),
//     dispatch => ({
//         get_franchise_list: () => dispatch(getFranchise()),
//         set_franchise_by_admin: (f_id) => dispatch(changeFranchiseIdByAdmin(f_id)),
//         get_user: () => dispatch(getMyUserInfo()),
//         get_student_info: () => dispatch(getMyStudentInfo()),
//         ready_payment: ready_info => dispatch(pay_actions.readyPayment(ready_info)),
//         get_available_promotion: () => dispatch(promotion_actions.getAvailablePromotion()),
//         toggle_sidebar: () => dispatch(toggle_modal.toggleSidebar()),
//         toggle_trial_modal : (isOpenTrial, student_id) => dispatch(toggle_modal.toggleTrialModal(isOpenTrial, student_id)),
//         toggle_select_payment_modal: () => dispatch(toggle_modal.toggleSelectPaymentModal()),
//         toggle_promotion_modal: () => dispatch(toggle_modal.togglePromotionModal()),
//         get_consulting_info_by_student: (userId, role) => dispatch(getConsultingInfoById(userId, role)),
//         log_out: () => dispatch(logout()),
//         get_user_credits: (userId) => dispatch(getUserCredits(userId))
//     })
//     )(Sidebar)
// );