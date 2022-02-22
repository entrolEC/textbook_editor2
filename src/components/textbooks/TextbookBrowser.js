import React, { useCallback, useEffect, useRef, useState } from 'react';
import TextbookOrderCard from "./TextbookOrderCard";
import 'assets/sass/Curriculum/TextbookBrowser.scss'
// import Loader from 'guideComponents/Loader';

// import { useSelector, shallowEqual } from 'react-redux';
const TextbookBrowser = ({
    textbookDict, // 백엔드에서 잘 정렬해서 보낸다고 가정
    completedTextbooks = [], 
    topOrderIndicator = "open", // DB의 final_textbook + current_textbook 중 높은 order, open이면 전체보기, 0이면 전체잠금
    textbookOnClickCallback = null,
    textbookCompleteCallback = null, // textbookCompleteCallback 있으면 선생님
    showTitle=true,
    currentTextbook = null,
    onEditFunction=null
}) =>{ 
    
    // const myStudentInfo = useSelector(state=>state.api_studentinfo.studentinfo);
    // const otherStudentInfo = useSelector(state=>state.api_studentinfo.others_studentinfo);
    const [selectedTextbookID, setSelectedTextbookID] = useState(null);
    
    // useEffect(() => {
    //     if(myStudentInfo){
    //         setSelectedTextbookID(myStudentInfo.current_textbook);
    //     }
    //     else if (otherStudentInfo){
    //         setSelectedTextbookID(otherStudentInfo.current_textbook);
    //     }
    // }, [myStudentInfo, otherStudentInfo]);

    // useEffect(()=>{
    //     if(currentTextbook){
    //         setSelectedTextbookID(currentTextbook.id);
    //     }
    // }, [currentTextbook])

    const handleOnEdit = (data)=>{
        onEditFunction({
            ...data,
            textbook_level:parseInt(textbookDict["description"][2])
        })
    }
    const parseTextbookIndex = (textbotextbookDictList) =>{
        let to_return = [];
        for (const [textbook_order, textbooks] of Object.entries(textbotextbookDictList)){
            let textbook_ids = textbooks.map((textbook)=>textbook.id)
            to_return.push(
                <TextbookOrderCard 
                    key={"order-card" + textbook_order}
                    textbookList = {textbooks}
                    order={textbook_order} 
                    disabled={parseInt(textbook_order) > topOrderIndicator}
                    completedTextbooks = {completedTextbooks}
                    isSelected={textbook_ids.includes(selectedTextbookID)} 
                    textbookOnClickCallback={textbookOnClickCallback}
                    textbookCompleteCallback={textbookCompleteCallback}
                    currentTextbook={currentTextbook}
                    onEditFunction={onEditFunction? handleOnEdit : null}/>
            )
        }
        return to_return;
    }


    if (!textbookDict){
        return null
    }
    return (
        <div className="textbook-browser">
            {showTitle? <div className="textbook-browser-title">{textbookDict["description"]}</div> : null}
            <div className="small-title">교재리스트 <div className="small-title-book"/> {onEditFunction? <span className="material-icons-outlined" style={{cursor:"pointer"}} onClick={()=>{handleOnEdit({})}}> add</span> : null}</div>
            <div className="textbook-browser-index">{parseTextbookIndex(textbookDict["data"])}</div>
        </div>  
    )

}

export default TextbookBrowser