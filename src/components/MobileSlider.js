import React, { useState, useContext, useEffect, useCallback, useMemo, useRef } from 'react';
import 'assets/sass/Components/MobileSlider.scss';

// let timeout;
const MobileSlider = ({children, width, ...rest}) => {
    const containerEl = useRef(null)
    const [indicator, setIndicator] = useState(0)

    useEffect(() => {
        let { current } = containerEl
        if(current){
            current.style.maxWidth = width+'px';
        }
    },[])

    function debounce(callback, delay){
        let timeout;
        return (...args) => {
            if(timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                // callback();
                callback.apply(this, args);
            },delay)
        }
    }

    const handleScroll = () => {
        if(!containerEl.current) return;
        const scrollAmount = containerEl.current.firstChild.scrollLeft;
        if(scrollAmount < 320) setIndicator(0)
        else if(scrollAmount >=320 && scrollAmount <640) setIndicator(1)
        else if(scrollAmount >= 640) setIndicator(2)
    }

    return (
        <div className='components-mobile-slider' ref={containerEl} {...rest}>
            <div className='slide-items' onScroll={debounce(()=>handleScroll(), 100)}>
                {children}
            </div>
            <div className='slide-indicator'>
                <div className={indicator===0 ?'circle-selected' : 'circle-not-selected'} />
                <div className={indicator===1 ?'circle-selected' : 'circle-not-selected'} />
                <div className={indicator===2 ?'circle-selected' : 'circle-not-selected'} />
            </div>
        </div>
    )
}

export default MobileSlider;