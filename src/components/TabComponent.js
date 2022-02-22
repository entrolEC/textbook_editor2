import React, { useState, useContext, useEffect, useCallback, useMemo, useRef } from 'react';
import '../assets/sass/Tab.scss';
import classNames from 'classnames'

const TabComponent = ({navList=[], active=0, setActiveTabIndex, buttonColor=null}) => {
    const navEl = useRef(null);

    useEffect(() => {
        const { current } = navEl
        let buttonEl = current.querySelectorAll('.tab-button')
        buttonEl.forEach(el => el.classList.remove('active'))
        current.children[active].children[0].classList.add('active')
    }, [active])
    

    return (
        <nav className="tab-hook-menu" ref={navEl}>
            {navList.map((item, index) => {
                return (
                    <li key={index}>
                        <button
                            className={classNames('tab-button', buttonColor)}
                            onClick={() => setActiveTabIndex(index)}
                        >
                            {item}
                        </button>
                    </li>
                )
            })}
        </nav>
    )
}

export default React.memo(TabComponent);