// import React from 'react';
// import '../assets/css/RootSubHeader.css';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'; 
// import RootMobileHeader from './RootMobileHeader';
// import classNames from 'classnames';
// import 'assets/sass/Service/Header.scss';
// // import { IS_ELECTRON } from 'App';
// import Notifications from './Notification';

// // const IS_ELECTRON = true;

// class RootSubHeader extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             toMyPage: false,
//             currentPage: null
//         }
//     }

//     handleMyPage = () => {
//         this.setState({
//             toMyPage: true
//         })
//     }

//     linkToWebsite = (auth) => {
//         let role = auth.user.profile.role
//         if(role==='student') window.open(window.location.origin +"?token="+localStorage.getItem('token')+"&path="+"/student/course/schedule", "_blank")
//         else window.open(window.location.origin +"?token="+localStorage.getItem('token')+"&path="+"/service", "_blank")
//     }

//     render(){
//         const { 
//             headerClassName, 
//             path=null, 
//             auth,
//             handleSignin=() => console.log('handleSignin is not defined'),
//             handleSignup=() => console.log('handleSignup is not defined'),
//             logOut=() => console.log('logOut is not defined'),
//             servicePage=false
//         } = this.props
//         const { toMyPage } = this.state;
//         const activeCondition = (pathName) => {
//             if(this.props.history && this.props.history.location.pathname===pathName) return true;
//             return false;
//         }

//         if(toMyPage) return <Redirect to='/profile/info' />
//         if(auth.screen_size === "desktop") {
//             return(
//                 <header className={classNames("root-relative-header", {servicePage})}>
//                     <div className={headerClassName} >
//                         <div className={"root-sub-body"}>
//                             <div style={{width: '20%'}} className="flex align-center">
//                                 <div className="header-logo mr-4" onClick={() => {
//                                     if(IS_ELECTRON) return;
//                                     this.props.history.push('/')
//                                 }}></div>
//                             </div>
//                             <div className={IS_ELECTRON?"display-none":"root-sub-body-content dnm"}>
//                                 <nav id="headerNav" className="gnb-nav-1 d-n">
//                                     <a href="/mycurriculum/index" className={activeCondition('/mycurriculum/index') ? 'active' : ''} onClick={(e) => {
//                                         e.preventDefault();
//                                         this.props.history.push('/mycurriculum/index')
//                                         }}>커리큘럼</a>
//                                     <a href="/user-reviews" className={activeCondition('/user-reviews') ? 'active' : ''} onClick={(e) => {
//                                         e.preventDefault();
//                                         this.props.history.push('/user-reviews')
//                                     }}>수강생 후기</a>
//                                     <a href="/FAQ" className={activeCondition('/FAQ') ? 'active' : ''} onClick={(e) => {
//                                         e.preventDefault();
//                                         this.props.history.push('/FAQ')
//                                     }} name="/FAQ">자주하는 질문</a>
//                                     <a href="/user-manual" className={activeCondition("/user-manual") ? 'active' : ''} onClick={(e) => {
//                                         e.preventDefault();
//                                         this.props.history.push('/user-manual')
//                                     }} name="/user-manual">수강 안내</a>
//                                     <a href="/eventlist" className={activeCondition('/eventlist') ? 'active' : ''} onClick={(e) => {
//                                         e.preventDefault();
//                                         this.props.history.push('/eventlist')
//                                     }} name="/eventlist">이벤트</a>
//                                 </nav>
//                             </div>
//                             <div style={{width: '20%', textAlign: 'end'}} className="dnm service-right-text">
//                                 <nav className="sub-header-nav">
//                                     {servicePage ? 

//                                     (IS_ELECTRON? 
//                                         <>
//                                             <a className= "login-text" onClick={()=>this.linkToWebsite(auth)}>마이페이지</a>
//                                             <a className="login-distirbution" style={{padding:'0px', color: '#e8e8e8'}}>|</a>
//                                             <a className= "login-text" onClick={logOut}>로그아웃</a>
//                                         </>
//                                     :
//                                     (
//                                         <div className="with-bell">
//                                             <Notifications
//                                                 isTeacher={auth.user? auth.user.profile.role==='teacher':null}
//                                             />
//                                             <a className="login-text" onClick={()=>this.props.history.push('/')}>홈으로</a>
//                                             <a className="login-distirbution" style={{padding:'0px', color: '#e8e8e8'}}>|</a>
//                                             <a className= "login-text" onClick={logOut}>로그아웃</a>
//                                         </div>
//                                     )
//                                     )
//                                     :
//                                     (auth.isAuthenticated ?
//                                     <React.Fragment>
//                                         <a className= "login-text" onClick={this.handleMyPage}>마이페이지</a>
//                                         <a className="login-distirbution" style={{padding:'0px', color: '#e8e8e8'}}>|</a>
//                                         <a className= "login-text" onClick={logOut}>로그아웃</a>
//                                     </React.Fragment>
//                                     :
//                                     <React.Fragment>
//                                         <a className= "login-text" onClick={handleSignin} name={window.location.pathname==="/" ? "/service" : window.location.pathname}>로그인</a>
//                                         <a className="login-distirbution" style={{padding:'0px', color: '#e8e8e8'}}>|</a>
//                                         <a className= "login-text" onClick={handleSignup}>회원가입</a>
//                                     </React.Fragment>)
//                                     }
                                    
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//             )           
//         } else {
//             return (
//                 <RootMobileHeader
//                     history={this.props.history}
//                     servicePage={servicePage}
//                 />
//             )
//         }
//     }
// }

// export default connect(
//     state => ({auth: state.auth})
// )(RootSubHeader);