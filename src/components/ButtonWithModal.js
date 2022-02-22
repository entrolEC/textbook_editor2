// import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
// import Button from 'guideComponents/Button';
// import Modal from 'guideComponents/Modal';
// import Popup from 'guideComponents/Popup';

// const ButtonWithModal = ({children, modalMessage, modalTitle, isConfirmed, ...rest}) => {
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         return () => {
//             setIsOpen(false)
//         }
//     },[])
//     return (
//         <div onClick={()=>setIsOpen(!isOpen)}>
//             <Popup 
//                 isOpen={isOpen} 
//                 title={modalTitle}
//                 size="sm"
//                 button1={{
//                     name: "확인",
//                     color: "topolar-blue",
//                     onClick: () => isConfirmed()
//                 }}
//                 button2={{
//                     name: "취소",
//                     color: "grey",
//                     onClick: () => setIsOpen(!isOpen)
//                 }}
//             >
//                 {modalMessage}
//             </Popup>
//             {children}
//         </div>
//     )
// }

// ButtonWithModal.defaultProps = {
//     modalMessage: 'modalMessage 값을 통해 보여줄 메세지를 입력하세요.',
//     modalTitle: 'modalTitle값을 통해 모달의 Title을 입력하세요.',
//     isConfirmed: () => console.log('Add function When clicked confirm')
// }

// export default ButtonWithModal;