export const ipcSendMouseClick = (ipcRenderer, screenSize, data) => {
    var x = Math.round(parseFloat(data.xRatio) * parseFloat(screenSize.width))
    var y = Math.round(parseFloat(data.yRatio) * parseFloat(screenSize.height))
    ipcRenderer.send("mouse-click", x, y)
}

export const ipcSendMouseUp = (ipcRenderer, screenSize) => {
    ipcRenderer.send("mouse-up")
}

export const ipcSendMouseDown = (ipcRenderer, screenSize, data) => {
    var x = Math.round(parseFloat(data.xRatio) * parseFloat(screenSize.width))
    var y = Math.round(parseFloat(data.yRatio) * parseFloat(screenSize.height))
    ipcRenderer.send("mouse-down", x, y)
}

export const ipcSendMouseMove = (ipcRenderer, screenSize, data) => {
    var x = Math.round(parseFloat(data.xRatio) * parseFloat(screenSize.width))
    var y = Math.round(parseFloat(data.yRatio) * parseFloat(screenSize.height))
    ipcRenderer.send("mouse-move", x, y)
}

export const ipcSendRightMouseDown= (ipcRenderer, screenSize, data) => {
    var x = Math.round(parseFloat(data.xRatio) * parseFloat(screenSize.width))
    var y = Math.round(parseFloat(data.yRatio) * parseFloat(screenSize.height))
    ipcRenderer.send("right-mouse-down", x, y)
}

export const ipcSendKeyPress = (ipcRenderer, screenSize, keyCode, modifiers) => {
    ipcRenderer.send("key-press", keyCode, modifiers)
}