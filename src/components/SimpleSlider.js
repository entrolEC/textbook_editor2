// import React, { useState, useContext, useEffect, useCallback, useMemo, useRef } from 'react';
// import Slider from 'react-slick';
// import 'assets/sass/slick.scss';
// import 'assets/sass/SlickTheme.scss';
// import 'assets/sass/Components/SimpleSlider.scss';

// const SimpleSlider = ({children, width, ...rest}) => {
//     const containerRef = useRef(null)
//     const sliderRef = useRef(null);
//     const [activeSlide, setActiveSlide] = useState(0);

//     useEffect(() => {
//         let { current } = containerRef
//         if(current){
//             current.style.maxWidth = width+'px';
//         }
//     },[])

//     const clickSlide = (num) => {
//         sliderRef.current.slickGoTo(num)
//     }

//     const settings = {
//         arrows: false,
//         dots: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 600,
//         autoplaySpeed: 5000,
//         pauseOnHover: false,
//         pauseOnFocus: false,
//         draggable: false,
//         beforeChange: (current, next) => setActiveSlide(next),
//     }

//     return (
//         <div className='simple-slider-container' ref={containerRef}>
//             <Slider className='slide-item' {...settings} ref={sliderRef}>
//                 {children}
//             </Slider>
//             {children.length > 1?
//             <div className='slide-indicator'>
//                 {children.map((child,index) => {
//                     return (
//                         <div key={index} className={activeSlide===index ?'circle-selected' : 'circle-not-selected'} onClick={()=>{clickSlide(index);}}/>
//                     )
//                 })}
//             </div>
//             :<div className='slide-indicator'>
//                 <div className='circle-selected'/>
//             </div>
//             }
//         </div>
//     )
// }

// export default SimpleSlider;