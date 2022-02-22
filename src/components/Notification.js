// // import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { 
//     ListGroupItem, 
//     Row, 
//     Col,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     ListGroup,
//     DropdownItem,
//     Button
// } from 'reactstrap';
// import {
//     AlertCircle,
//     Bell,
//     UserPlus,
//     HelpCircle,
// } from "react-feather";
// import moment from 'moment-timezone';
// import { deleteNotification, deleteAllNotification } from 'redux/actions/notifications';

// const NavbarDropdown = ({
//     children,
//     count,
//     showBadge,
//     header,
//     footer,
//     icon: Icon
// }) => (
//         <UncontrolledDropdown nav inNavbar className="mr-2">
//             <DropdownToggle nav className="nav-icon dropdown-toggle">
//                 <div className="position-relative">
//                     <Icon className="align-middle" size={18} />
//                     {showBadge ? <span className="indicator">{count}</span> : null}
//                 </div>
//             </DropdownToggle>
//             <DropdownMenu right className="dropdown-menu-lg py-0" modifiers={{
//                 setMaxHeight: {
//                     enabled: true,
//                     order: 890,
//                     fn: (data) => {
//                     return {
//                         ...data,
//                         styles: {
//                             ...data.styles,
//                             overflow: 'auto',
//                             maxHeight: 100,
//                             },
//                         };
//                     },
//                 },
//             }}>
//                 <div className="dropdown-menu-header position-relative">
//                     {count} {header}
//                 </div>
//                 <ListGroup className="scrollable-menu">
//                     {count > 0 ? children : <ListGroupItem><Row noGutters className="align-items-center"><Col xs={12}><div className="text-muted small mt-1">알림이 없습니다.</div></Col></Row></ListGroupItem> }
//                 </ListGroup>
//                 <DropdownItem header className="dropdown-menu-footer">
//                     <span className="text-muted">{footer}</span>
//                 </DropdownItem>
//             </DropdownMenu>
//         </UncontrolledDropdown>
// );

// const NavbarDropdownItem = ({ icon, title, description, time, spacing, onClick }) => (
//     <ListGroupItem onClick={onClick}>
//         <Row noGutters className="align-items-center">
//             <Col xs={2}>{icon}</Col>
//             <Col xs={10} className={spacing ? "pl-2" : null}>
//                 <div className="text-dark">{title}</div>
//                 <div className="text-muted small mt-1">{description}</div>
//                 <div className="text-muted small mt-1">{time}</div>
//             </Col>
//         </Row>
//     </ListGroupItem>
// );

// const Notification = ({isTeacher}) => {
//     const notifications = useSelector(state=>state.notifications.notifications)
//     const [notiArr, setNotiArr] = useState([])
//     const dispatch = useDispatch()

//     useEffect(() => {
//         if(!notifications) return;

//         let temp = []
//         notifications.forEach((noti) => {
//             temp.push({
//                 type: noti.type,
//                 title: '알림',
//                 description: noti.msg,
//                 time: moment.utc(noti.time).fromNow()
//             })
//         })
//         setNotiArr(temp)
//     }, [notifications])

//     const deleteNoti = (id) => {
//         const deletedId = id;
//         dispatch(deleteNotification(deletedId))
//     }

//     const deleteAllNoti = () => {
//         setNotiArr([])
//         dispatch(deleteAllNotification());
//     }

//     if(!isTeacher) return null;
//     return (
//         <NavbarDropdown
//         header="New Notifications"
//         icon={Bell}
//         count={notiArr.length}
//         showBadge
//         >
//         {notiArr.map((item, key) => {
//             let icon = <Bell size={18} className="text-warning" />;

//             if (item.type === "danger") {
//                 icon = <AlertCircle size={18} className="text-danger" />;
//             }

//             if (item.type === "info") {
//                 icon = <HelpCircle size={18} className="text-primary" />;
//             }

//             if (item.type === "success") {
//                 icon = <UserPlus size={18} className="text-success" />;
//             }

//             return (
//                 <NavbarDropdownItem
//                     key={key}
//                     icon={icon}
//                     title={item.title}
//                     description={item.description}
//                     time={item.time}
//                     onClick={() => deleteNoti(key)}
//                 />
//             );
//         })}
//         <Button onClick={() => deleteAllNoti()} color='primary'> 모두 지우기 </Button>
//         </NavbarDropdown>
//     )
// }

// export default React.memo(Notification);