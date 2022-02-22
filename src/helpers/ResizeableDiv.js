export const makeResizeableWidth = (targetDiv, elem) => {
    elem.onmousedown = () => {
        const firstTargetDivWidth = targetDiv.offsetWidth;
        let e = window.event
        e.preventDefault()
        const clickedClientXPos = e.clientX;

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        document.onmousemove = () => {
            let moveEvent = window.event
            moveEvent.preventDefault()
            // when getting smaller
            if(clickedClientXPos > moveEvent.clientX) {
                let width = firstTargetDivWidth - (clickedClientXPos - moveEvent.clientX)
                targetDiv.style.width = String(width)+"px"
            } 
            // when getting bigger
            else {
                let width = firstTargetDivWidth + (moveEvent.clientX - clickedClientXPos)
                targetDiv.style.width = String(width)+"px"
            }
        }
    }
}

export const makeResizeableHieght = (targetDiv, elem) => {
    elem.onmousedown = () => {
        const firstTargetDivHeight = targetDiv.offsetHeight;
        let e = window.event
        e.preventDefault()
        const clickedClientYPos = e.clientY;

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        document.onmousemove = () => {
            let moveEvent = window.event
            moveEvent.preventDefault()
            // when getting smaller
            if(clickedClientYPos > moveEvent.clientY) {
                let height = firstTargetDivHeight - (clickedClientYPos - moveEvent.clientY)
                targetDiv.style.height = String(height)+"px"
            } 
            // when getting bigger
            else {
                let height = firstTargetDivHeight + (moveEvent.clientY - clickedClientYPos)
                targetDiv.style.height = String(height)+"px"
            }
        }
    }
}
