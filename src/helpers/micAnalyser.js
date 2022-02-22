import React, { useEffect } from 'react';

let globalScriptNode;
let globalDst;

const MicAnalyser = ({inputDeviceId, needToCaptureDesktop}) => {
    const makeAnalyser = async (mediaStreamTrack) => {
        navigator.mediaDevices.getUserMedia({audio: { deviceId: inputDeviceId ? {exact: inputDeviceId} : undefined}, video: false}).then(res => {
            var audioContext = new AudioContext();
            var analyser = audioContext.createAnalyser();
            // bufferSize, number of input channles, number of output channels
            globalScriptNode = audioContext.createScriptProcessor(2048,1,1);
    
            // default: 0.8
            analyser.smoothingTimeConstant = 0.8;
            // 값이 높을수록 주파수 영역의 자세함이 커지는 결과를 낳으나 시간 영역에서의 자세함은 떨어짐
            analyser.fftSize = 1024;
    
            // var src = audioContext.createMediaStreamSource(new MediaStream([mediaStreamTrack]));
            var src = audioContext.createMediaStreamSource(res);
            var globalDst = audioContext.createMediaStreamDestination();
            [src, analyser, globalScriptNode, globalDst].reduce((a,b) => a&&a.connect(b));
    
            var canvasContext = document.getElementById('myMicValues');
            var canvasContext = canvasContext.getContext('2d')
    
            // onaduioprocess eventhandler을 정상적으로 pause 하는 방법 필요
            globalScriptNode.onaudioprocess = function(){
                try {
                    var array = new Uint8Array(analyser.frequencyBinCount);
                    analyser.getByteFrequencyData(array);
                    var values = 0;
                    var length = array.length;
                    for(var i=0;i<length;i++){
                        values +=(array[i])
                    }
                    var average = values/length;
                    canvasContext.clearRect(0, 0, 400, 150);
                    canvasContext.fillStyle = '#ACACAC';
                    canvasContext.fillRect(0,0,average*5,150);
                } catch (error) {
                    console.log('Drawing canvas error: ', error);
                }
            }
        }).catch(err => {

        })
    }

    useEffect(() => {
        if(globalScriptNode) globalScriptNode.disconnect(globalDst)
        const mediaStream = needToCaptureDesktop ? document.getElementById('studentLocalVideo').srcObject : document.getElementById('teacherLocalAudio').srcObject;
        let mediaStreamTrack
        if(mediaStream) {
            mediaStreamTrack = mediaStream.getAudioTracks()[0];
            makeAnalyser(mediaStreamTrack)
        }

        return () => {
            if(globalScriptNode) globalScriptNode.disconnect(globalDst)
        }
    },[inputDeviceId])

    return (
        <canvas id="myMicValues" style={{backgroundColor: '#ACACAC55', height: '30px', width: '400px'}}></canvas>
    )
}

export default MicAnalyser;