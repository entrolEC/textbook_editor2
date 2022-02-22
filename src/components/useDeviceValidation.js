// import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
// import classNames from 'classnames';
// import captureDesktop from 'helpers/captureDesktop';
// import { useSelector } from 'react-redux';

// const useDeviceValidation = (peer, needToCaptureDesktop, children) => {
//     const [isValid, setIsValid] = useState(false)
//     const [errMsg, setErrMsg] = useState('')
//     const [isCanceled, setIsCanceled] = useState(false)
//     const { role } = useSelector(state => ({
//         role: state?.auth?.user?.profile?.role
//     }))

//     const deviceChangeDetected = (e, isMounted=false) => {
//         navigator.mediaDevices.getUserMedia({ audio: true}).then(res => {
//             if(!isValid) {
//                 if(!isMounted) captureDesktop(peer, null, needToCaptureDesktop);
//                 setErrMsg('')
//                 setIsValid(true)
//             }
//         }).catch(err => {
//             console.log('device change detected: ', err)
//             if(err.message==='Requested device not found'){
//                 setErrMsg('마이크가 감지되지 않습니다. 마이크 연결상태를 확인해 주세요.')
//             } else if(err.message==='Permission denied'){
//                 setErrMsg('장치 권한이 없습니다.')
//             }
//             setErrMsg(err.message)
//             setIsValid(false)
//         })
//     }

//     useEffect(() => {
//         // param2 true: 첫 마운트시 captureDesktop 함수 실행을 피하기 위해
//         // 마운트시 DesktopCapture.js 에서 captureDesktop 함수가 실행되고 있음.
//         deviceChangeDetected(null, true);
//         navigator.mediaDevices.addEventListener('devicechange', (e) => deviceChangeDetected(e))

//         return () => {
//             navigator.mediaDevices.removeEventListener('devicechange', (e) => deviceChangeDetected(e))
//         }
//     },[])

//     const elem = () => {
//         return (
//             <>
//                 <div className="service-classroom-device-validation">
//                     {
//                         (role==='teacher') ?
//                         <i className={classNames('material-icons', 'mic-icon', !isValid?'blink':'')}>{(isValid) ? 'headset_mic' : 'headset_off'} </i>
//                         :
//                         children
//                     }
//                 </div>
//             </>
//         )
//     }

//     return elem;
// }

// export default useDeviceValidation;