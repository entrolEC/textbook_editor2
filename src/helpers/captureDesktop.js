const captureStudentScreen = (peer, dst=null) => {
    const desktopCapturer = window.require('electron').desktopCapturer;
    desktopCapturer.getSources({ types: ["window", "screen"]}).then(async sources => {
        for (const source of sources){
            if(source.name.toLowerCase() === 'entire screen' || source.name.toLowerCase()==="screen 1"){
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: false,
                        video: {
                            mandatory: {
                                chromeMediaSource: "desktop",
                                chromeMediaSourceId: source.id,
                                maxWidth: 1980,
                                maxHeight: 1080,
                                minWidth: 1280,
                                minHeight: 720
                            }
                        }
                    })
                    
                    if(dst) stream.addTrack(dst.stream.getAudioTracks()[0]);
                    if(peer){
                        // peer.removeStream(document.getElementById('studentLocalVideo').srcObject);
                        peer.addStream(stream)
                    }
                    document.getElementById('studentLocalVideo').srcObject = stream;
                } catch (error) {
                    console.log('Error while getting Desktop capture, add tracks to mediastream',error)
                }
            }
        }
    }).catch(err => {
        console.log('Critical Error while getting Electron DesktopCapture', err)
    })
}

const captureDesktop = async (peer=null, newDeviceId=null, needToCaptureDesktop=false) => {
    const constraint = {
        audio: { deviceId: newDeviceId ? { exact: newDeviceId } : undefined},
        video: false
    }
    
    const newAudioTracks = await navigator.mediaDevices.getUserMedia(constraint).catch(err => {
        if(needToCaptureDesktop) captureStudentScreen(peer)
        throw new Error('newAudioTracks: ', err)
    });

    const newAudioTrack = newAudioTracks.getAudioTracks()[0];
    var ctx = new AudioContext();
    var src = ctx.createMediaStreamSource(new MediaStream([newAudioTrack]))
    var dst = ctx.createMediaStreamDestination();
    var gainNode = ctx.createGain();
    [src, gainNode, dst].reduce((a,b)=>a && a.connect(b));

    window.gain = gainNode.gain;

    if(needToCaptureDesktop) captureStudentScreen(peer, dst);
    else {
        newAudioTracks.removeTrack(newAudioTrack)
        newAudioTracks.addTrack(dst.stream.getAudioTracks()[0])
        // For Teachers
        if(peer){
            // peer.removeStream(document.getElementById('teacherLocalAudio').srcObject);
            document.getElementById('teacherLocalAudio').srcObject = newAudioTracks;
            peer.addStream(document.getElementById('teacherLocalAudio').srcObject)
        }
        document.getElementById('teacherLocalAudio').srcObject = newAudioTracks;
    }
}

export default captureDesktop;