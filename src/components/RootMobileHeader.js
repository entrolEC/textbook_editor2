// import React from 'react';
// import { connect } from 'react-redux';
// import '../assets/css/RootSubHeader.css';
// import '../assets/sass/ImageSprites.scss';
// import { toggleSidebar } from '../redux/actions/msidebar';
// import * as toggleServiceSidebar from 'redux/actions/sidebar';
// import classNames from 'classnames';
// import HamburgerMenu from 'assets/root_img/serviceHamburger.png';

// class RootMobileHeader extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     toggleSidebar = () => {
//         this.props.toggle_sidebar();
//     }

//     render(){
//         const { sidebarIsOpen, history, servicePage } = this.props
//         return (
//             <div className={(servicePage?'':'root-sub-header-container')}>
//                 <div className={classNames('root-sub-header', {servicePage})}>
//                     {servicePage ? <img src={HamburgerMenu} width="19px" height="14px" onClick={()=>this.props.toggle_service_sidebar()} /> :
//                     <div className="mobile-sidebar-sprite mobile-sidebar-hamburger" onClick={this.toggleSidebar} />
//                     }
                    
//                     <div className="header-logo" onClick={
//                         () => history.push('/')
//                     }
//                     />
//                     <div className="header-kakao-logo" onClick={() => window.open('https://pf.kakao.com/_xdAxbMK', '_blank')} />
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     sidebarIsOpen: state.msidebar.isOpen
// })

// const mapDispatchToProps = dispatch => ({
//     toggle_sidebar: () => dispatch(toggleSidebar()),
//     toggle_service_sidebar: () => dispatch(toggleServiceSidebar.toggleSidebar())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(RootMobileHeader);