import React, { useState, useContext, useEffect, useCallback, useMemo, useRef } from 'react';
import classNames from 'classnames';
import '../assets/sass/Modal.scss';
import closeBtn from '../assets/root_img/Modal/BtnClose.svg';

const Modal =({children, isOpen=false, size="sm", toggle=()=>{}, subHeader="", header="", parentOverflowDisabled=false, style=null, innerStyle=null}) => {
    const modalBodyEl = useRef(null)

    const escape = useCallback((e) => {
        if(e.key==="Escape") {
            modalBodyEl.current.classList.remove('isOpen')
            setTimeout(() => {
                document.getElementById('root').removeAttribute('style')
                toggle()
            }, 300);
        }
    }, [isOpen])

    useEffect(() => {
        if(isOpen){
            if(parentOverflowDisabled) document.getElementById('root').style.overflow="hidden"
            else document.getElementById('root').style.overflow='unset'
            document.addEventListener('keydown', escape)
        }

        return () => document.removeEventListener('keydown', escape)
    }, [isOpen])

    return (
        <div style={style} className={classNames('fixed-modal-bg', isOpen ? 'isOpen' : 'notOpen')}>
            <div ref={modalBodyEl} style={innerStyle} className={classNames('fixed-modal', size, {isOpen})}>
                <div className="flex justify-content-between mb-2">
                    <div>
                        <div className="sub-header">
                            {subHeader}
                        </div>
                        <div className="header" style={{textAlign: 'left'}}>
                            {header}
                        </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={closeBtn} onClick={() => {
                        modalBodyEl.current.classList.remove('isOpen')
                        setTimeout(() => {
                            document.getElementById('root').removeAttribute('style')
                            toggle()
                        }, 300);
                    }} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default React.memo(Modal);