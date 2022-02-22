// import Button from 'components/Button';
// import Modal from 'guideComponents/Modal';
// import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
// import captureDesktop from 'helpers/captureDesktop';
// import useDeviceValidation from 'components/useDeviceValidation';
// import MicAnalyser from 'helpers/micAnalyser';

// const inlineStyles = {
//     gap: {gap: '10px'},
//     fontSize: {
//         fontSize: '1.8rem'
//     },
//     pointerCursor: {
//         cursor: 'pointer',
//         fontSize: '1.8rem'
//     },
//     button: {
//         fontSize: '12px',
//         whiteSpace: 'pre'
//     }
// }

// // peerAudio: 실제 PeerCreation에서 stream을 받아 연결하는 MediaStream
// // testAudio: alert.mp3 실행 하기 위한 MediaStream
// const DeviceOption = ({children, peerAudio, testAudio, peer, needToCaptureDesktop=false}) => {
//     const [isOpen, setIsOpen] = useState(false)
//     const [outputDeviceId, setOutputDeviceId] = useState(null)
//     const [inputDeviceId, setInputDeviceId] = useState(null)
//     const [volume, setVolume] = useState(1)
//     const [micVolume, setMicVolume] = useState(1)
//     const [errMsg, setErrMsg] = useState('')
//     const headsetElement = useDeviceValidation(peer, needToCaptureDesktop, children);

//     const initDeviceOptions = () => {
//         const selectOutputElem = document.getElementById('audioOutput');
//         const selectInputElem = document.getElementById('audioInput')
//         if(selectOutputElem && selectInputElem){
//             while(selectOutputElem.firstChild) {
//                 selectOutputElem.removeChild(selectOutputElem.firstChild)
//             }
//             while(selectInputElem.firstChild){
//                 selectInputElem.removeChild(selectInputElem.firstChild)
//             }
//         }
//     }

//     const deviceErrorHandler = async (err) => {
//         console.log('err: ', err.message)
//         initDeviceOptions();
//         if(err.message==='Permission denied') {
//             setErrMsg('권한오류')
//         } else if(err.message==='Requested device not found'){
//             setErrMsg('장치를 찾을 수 없습니다.')
//         } else {
//             setErrMsg(err.message)
//         }
//     }

//     const requestDeviceOptions = async () => {
//         // 오디오/마이크 권한
//         navigator.mediaDevices.getUserMedia({ audio: true }).then(async res => {
//             if(!errMsg) setErrMsg('')
//             // 중복 장치 구별 집합: groupID
//             let audioOutputSet = new Set([])
//             let audioInputSet = new Set([])
//             let devicesArray = await navigator.mediaDevices.enumerateDevices()

//             const audioOutputSelect = document.querySelector('select#audioOutput')
//             const audioInputSelect = document.querySelector('select#audioInput')

//             if(audioOutputSelect && audioInputSelect){
//                 devicesArray.forEach((device) => {
//                     const option = document.createElement('option')
//                     option.value = device.deviceId
//                     if(device.kind==='audiooutput' && !audioOutputSet.has(device.groupId)){
//                         if(device.deviceId===outputDeviceId) option.selected=true
//                         option.text = device.label || `microphone ${audioOutputSelect.length + 1}`;
//                         audioOutputSelect.appendChild(option)
//                         audioOutputSet.add(device.groupId)
//                     } 
//                     else if(device.kind==='audioinput' && !audioInputSet.has(device.groupId)){
//                         if(device.deviceId===inputDeviceId) option.selected=true
//                         option.text = device.label || `micro ${audioInputSelect.length + 1}`;
//                         audioInputSelect.appendChild(option)
//                         audioInputSet.add(device.groupId)
//                     }
//                 })
//             }
//         }).catch(err => deviceErrorHandler(err))
//     }
    
//     useEffect(() => {
//         // 전역 변수로 window 변수에 저장
//         // EventListener 추가 후 state, props값이 업데이트 되지 않는 문제
//         window.globalPeer = peer
//     },[peer])
    
//     useEffect(() => {
//         navigator.mediaDevices.addEventListener('devicechange', () => {
//             console.log('device change detected')
//             initDeviceOptions();
//             navigator.mediaDevices.getUserMedia({audio: true}).then(res => {
//                 requestDeviceOptions();
//                 if(window.globalPeer) captureDesktop(window.globalPeer, null, needToCaptureDesktop)
//             }).catch(err => {
//                 deviceErrorHandler(err)
//             })
//         })

//         return () => {
//             navigator.mediaDevices.removeEventListener('devicechange', ()=>{
//                 navigator.mediaDevices.getUserMedia({audio: true}).then(res => {
//                     requestDeviceOptions();
//                 }).catch(err => {
//                     deviceErrorHandler(err)
//                 })
//             })
//         }
//     },[])

    
//     useEffect(() => {
//         if(isOpen) {
//             requestDeviceOptions()
//         }
//     }, [isOpen])
    
//     const deviceChange = useCallback((e) => {
//         const { value, name } = e.target
//         if(name==='output') {
//             peerAudio.setSinkId(value)
//             testAudio.setSinkId(value)
//             setOutputDeviceId(value)
//         } else if(name==='input'){
//             captureDesktop(peer, value, needToCaptureDesktop)
//             setInputDeviceId(value)
//         }
//     },[peerAudio, testAudio, outputDeviceId, peer])

//     const micVolumeChange = useCallback((e) => {
//         const { value } = e.target
//         window.gain.value = value
//         setMicVolume(value)
//     },[micVolume])

//     if(!peerAudio && !testAudio) return null;
//     return (
//         <>
//             <Modal isOpen={isOpen} title="장비 설정" size="sm" toggle={()=>setIsOpen(!isOpen)}>
//                 {errMsg ? 
//                 <div className="flex mb-2" style={{fontSize: '1rem', color: 'red'}}>
//                     <i className="material-icons">warning</i> 
//                     {errMsg}
//                 </div>
//                 : null} 
//                 <div>
//                     <label>{'스피커'}</label>
//                     <div className="flex" style={inlineStyles.gap}>
//                         <i className="material-icons" style={inlineStyles.pointerCursor} onClick={()=>{
//                             const volumeChanged = (volume===0) ? 1 : 0;
//                             peerAudio.volume = volumeChanged
//                             testAudio.volume = volumeChanged;
//                             setVolume(volumeChanged)
//                         }}>{parseFloat(volume)<=0?'volume_off' : 'volume_up'}</i>
//                         <Button style={inlineStyles.button} size="sm" onClick={()=>testAudio.play()}>스피커 테스트</Button>
//                         <select id={'audioOutput'} name={'output'} onChange={(e)=>deviceChange(e)} style={{minWidth: '260px'}}></select>
//                     </div>
//                     <div className="flex w-100 mt-2">
//                         <i className="material-icons" style={inlineStyles.fontSize} onClick={() => deviceChange({e: {target: { name: 'output', value: 0}}})}>volume_mute</i>
//                         <input type="range" style={{width: 'inherit'}} step={0.01} max={1} value={volume} onChange={(e)=>{
//                             peerAudio.volume=e.target.value
//                             testAudio.volume=e.target.value
//                             setVolume(e.target.value)
//                         }} />
//                         <i className="material-icons" style={inlineStyles.fontSize}>volume_up</i>
//                     </div>
//                 </div>
//                 <div>
//                     <label>{'마이크'}</label>
//                     <div className="flex" style={inlineStyles.gap}>
//                         <i className="material-icons" style={inlineStyles.pointerCursor} onClick={() => {
//                             const volumeChanged = (micVolume===0) ? 1:0;
//                             const e = {target: {value: volumeChanged}}
//                             micVolumeChange(e)
//                         }}>{parseFloat(micVolume)<=0?'mic_off':'mic'}</i>
//                         <select id={'audioInput'} name={'input'} onChange={(e)=>deviceChange(e)} style={{minWidth: '260px'}}></select>
//                     </div>
//                     <div className="flex w-100 mt-2">
//                         <i className="material-icons" style={inlineStyles.fontSize}>volume_mute</i>
//                         <input type="range" style={{width: 'inherit'}} step={0.01} max={1} value={micVolume} onChange={(e) => {micVolumeChange(e)}} />
//                         <i className="material-icons" style={inlineStyles.fontSize}>volume_up</i>
//                     </div>
//                 </div>
//                 <MicAnalyser needToCaptureDesktop={needToCaptureDesktop} inputDeviceId={inputDeviceId} />
//             </Modal>
//             <div onClick={()=>setIsOpen(!isOpen)}>
//                 {headsetElement()}
//             </div>
//         </>
//     )
// }

// export default React.memo(DeviceOption);