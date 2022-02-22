import React, { useEffect } from 'react';
import Alert from 'assets/sounds/alert.mp3';
import captureDesktop from 'helpers/captureDesktop';

const DesktopCaptur = ({peer=null}) => {
    
    useEffect(() => {
        // param: 1) P2P Obj, 2) deviceId(장치 변경시), 3) 화면 캡처 필요/불필요
        captureDesktop(peer, null, true);
    }, [peer])

    return (
        <>
        {/* 
            video: electron.DesktopCapture을 통해 보낼 element
            audio1: 원격접속시 상대방이 보낸 stream을 저장
            audio2: 스피커 테스트
        */}
            <video style={{ display: "none" }} id="studentLocalVideo" playsInline />
            <audio id="studentAudio" autoPlay />
            <audio id="studentTestAudio" src={Alert} />
        </>
    )
}

export default DesktopCaptur