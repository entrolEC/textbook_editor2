// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import 'assets/sass/Curriculum/TextbookBrowser.scss'
// // import { Collapse } from 'pages/main/MainPageComponents';

// const TextbookOrderCard = ({
//     textbookList, 
//     completedTextbooks = [], 
//     disabled = false, // DB의 final_textbook + current_textbook 중 높은 order, null이면 전체보기, 0이면 전체잠금
//     textbookOnClickCallback = null,
//     textbookCompleteCallback = null, // textbookCompleteCallback 있으면 선생님
//     order = 1,
//     isSelected = null,
//     onEditFunction = null
// }) =>{
//     const length = textbookList.length;
//     const [expanded, setExpanded] = useState(false);
//     const parseTextbookList = (textbookList) =>{
//         let essential_alive = true;
//         let disabled_string = "";
//         if (disabled){
//             disabled_string = " textbook_disabled"
//         }
//         let collapsed = [];
//         let essential_card = null;

//         textbookList.forEach((textbook)=>{
//             if (essential_alive){
//                 essential_card= (
//                     <div className={"textbook"} key={"textbook_" + textbook.id}>
//                         {onEditFunction? null : <span 
//                             onClick={
//                                 (textbookCompleteCallback && 
//                                 !(completedTextbooks && 
//                                 completedTextbooks.includes(textbook.id)))? ()=>textbookCompleteCallback(textbook.id) : null} 
//                             className={
//                                 "material-icons-outlined textbook-checkmark" + 
//                                 (completedTextbooks && completedTextbooks.includes(textbook.id)? "completed" : "" ) + 
//                                 (textbookCompleteCallback? " clickable" : "")}>
//                             done
//                         </span>}
//                         <div className="textbook-title" onClick={disabled? null : ()=>textbookOnClickCallback({order_num:order, textbook_id:textbook.id})}>{textbook.name}</div>
//                         {onEditFunction?<span className="material-icons-outlined" style={{cursor:"pointer"}} onClick={()=>{onEditFunction({order_num:order})}}>add</span> : null}
//                         {length <=1? null : !expanded? 
//                             <span className="material-icons-outlined textbook-collapse" onClick={()=>{setExpanded(!expanded)}}>
//                                 expand_more
//                             </span>:
//                             <span className="material-icons-outlined textbook-collapse" onClick={()=>{setExpanded(!expanded)}}>
//                                 expand_less
//                             </span>
//                         }
//                     </div>)
//             }
//             else{
//                 collapsed.push(
//                     <div className={"textbook"} key={"textbook_" + textbook.id}>
//                         {onEditFunction? null : <span 
//                             onClick={
//                                 (textbookCompleteCallback && 
//                                 !(completedTextbooks && 
//                                 completedTextbooks.includes(textbook.id)))? ()=>textbookCompleteCallback(textbook.id) : null} 
//                             className={"material-icons-outlined textbook-checkmark" + 
//                             (completedTextbooks && completedTextbooks.includes(textbook.id)? "completed" : "" ) + 
//                             (textbookCompleteCallback? " clickable" : "")}>
//                             done
//                         </span>}
//                         <div className="textbook-title" onClick={disabled? null : ()=> textbookOnClickCallback({order_num:order, textbook_id:textbook.id})}>{textbook.name}</div>
//                     </div>
//                 );
//             }
//             essential_alive = false;
//         })
//         return (
//             <div className={"textbook-box" + disabled_string}>
//                 {essential_card}
//                 <Collapse isOpen={expanded} className='policy-collapse-container'>
//                     {collapsed}
//                 </Collapse>
//             </div>);
//     }


//     if (!textbookList){
//         return null;
//     }
    
//     return (
//         <div className={"textbook-order-box" + (expanded? " expanded" : "") + (isSelected? " current_textbook" : "") + (disabled? " disabled" : "")}>
//             <div className="textbook-order">
//                 <div className="textbook-order-badge">{order.padStart(2,'0')}</div>
//                 {length>1? <div className="textbook-order-vline"/> : null}
//             </div>
//             {parseTextbookList(textbookList)}
//         </div>
//     )

// }

// export default TextbookOrderCard