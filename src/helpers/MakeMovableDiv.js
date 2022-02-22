const makeMovableDiv = (elem) => {
    // moveX, moveY: x,y value when cursor move
    // clickedX, clickedY: x,y value when cursor click div position
    let objPos = {
        moveX: 0,
        moveY: 0,
        clickedX: 0,
        clickedY: 0
    }

    // onmousedown: clicked
    // onmouseup: released
    
    if(document.getElementById(elem.id + "-header")) {
        document.getElementById(elem.id+"-header").onmousedown = () => dragMouseDown(objPos, elem);
    } else {
        elem.onmousedown = () => dragMouseDown(objPos, elem);
    }

}

const dragMouseDown = (objPos, elem) => {
    let e = window.event;
    e.preventDefault();
    objPos.clickedX = e.clientX;
    objPos.clickedY = e.clientY;
    document.onmouseup = () => closeDragElement();
    document.onmousemove = (e) => elementDrag(objPos, elem);
}

const elementDrag = (objPos, elem) => {
    let e = window.event;
    e.preventDefault()

    objPos.moveX = objPos.clickedX - e.clientX;
    objPos.moveY = objPos.clickedY - e.clientY;
    objPos.clickedX = e.clientX;
    objPos.clickedY = e.clientY;

    elem.style.top = (elem.offsetTop - objPos.moveY) + "px";
    elem.style.left = (elem.offsetLeft - objPos.moveX) + "px";
}

const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null
}

export default makeMovableDiv;