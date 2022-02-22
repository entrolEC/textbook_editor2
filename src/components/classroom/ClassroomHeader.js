// import React, { useCallback, useEffect, useRef, useState } from 'react';
// //import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import "../../../assets/css/PDFViewer.css";
// import {
//     topolarLogo
// } from 'assets/root_img';
// import Tony from "assets/classroom/classroom-tony.png"

// const ClassroomHeader = ({history, img, firstName}) => {
//     const { auth } = useSelector(state => ({
//         auth: state.auth
//     }))
//     const [fileSrc, setFileSrc] = useState(null);
//     const { profile_file } = auth.user.profile;

//     useEffect(() => {
//         if(!profile_file) return;
//         setFileSrc(profile_file.url);
//     },[JSON.stringify(auth)])
    
//     return(
//         <div className="classroom-header">
//             <img src={topolarLogo} alt="topolarLogo" width="119px" onClick={()=>{window.open("/")}}/>
//             <div className="header-user-card" onClick={()=>window.open(`/?token=${auth?.token}&path=/account/profile`)}>
//                 <div className="header-user-image">
//                     <img id="testImg" alt="profileImg" src={fileSrc? 'https://www.topolar.co.kr/uploads/'+fileSrc : Tony} />
//                 </div>
//                 <div className="header-user-name">
//                     <div className="header-bold">{firstName}</div>
//                     <div>학생</div>
//                 </div>
//             </div>
//         </div>
//     )
    
// };

// export default ClassroomHeader;
