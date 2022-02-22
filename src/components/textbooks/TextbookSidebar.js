import React, { useCallback, useEffect, useReducer, useState, useContext } from 'react';
import TextbookBrowser from "./TextbookBrowser";
import TextbookOutline from "./TextbookOutline";

import { ImageContext } from 'contexts/ImageContext';

import { saveImage, loadImage, saveTextbook, loadTextbook } from "helpers/electronFileSystem";
// import { useSelector, shallowEqual } from 'react-redux';

// import useApi from 'components/Hooks/useApi';

// import { getTextbookLog, getTextbookIndex } from 'redux/actions/api_textbook';
// import { getStudentInfo } from 'redux/actions/api_studentinfo';
// import useGetCodeList from 'components/Hooks/useGetCodeList';
// import { getTextbook, getCurriculumProgress, getCurriculumIndex } from 'redux/actions/api_textbook';
// import Loader from 'guideComponents/Loader';

import 'assets/sass/Curriculum/TextbookSidebar.scss'
// import useParseCodeToValue from 'components/Hooks/useParseCodeToValue';

const TextbookSidebar = ({
    studentID=null, 
    textbookOnClickCallback=null,
    onEditFunction=null,
    toggleSidebar=null,
    isOpen = true,
    textbookCompleteCallback = null,
    currentTextbook = null,
    stepIndicator = 0,
    setStepIndicator = null,
    JSONBook = null, 
    setJSONBook = null,
    lastTextbook = null,
    }) =>{
    // const [CurriculumIndexLoading, CurriculumIndex, CurriculumIndexError, getCurriculum] = useApi(getCurriculumIndex);
    // const [CurriculumProgressLoading, CurriculumProgress, CurriculumProgressError, getCurrentProgress] = useApi(getCurriculumProgress);
    // const [TextbookIndexLoading, TextbookIndex, TextbookIndexError, getTextbooks] = useApi(getTextbookIndex);
    // const [CompletedTextbooksLoading, CompletedTextbooks, CompletedTextbooksError, getCompletedTextbooks] = useApi(getTextbookLog);
    // const [studentInfoLoading, StudentInfo, StudentInfoError, getCurrentStudentInfo] = useApi(getStudentInfo);
    
    // const auth = useSelector(state => state.auth, shallowEqual);
    
    // const myStudentInfo = useSelector(state=>state.api_studentinfo.studentinfo);
    // const receivedTextbook = useSelector(state=>state.api_textbook.textbook);

    // const courseLevel = useGetCodeList('course_level');

    const [viewType, setViewType] = useState(0);
    const [selectedCourseLevel, setSelectedCourseLevel] = useState("002");
    const [selectedCourseID, setSelectedCourseID] = useState(null);
    const [selectedTextbookLevel, setSelectedTextbookLevel] = useState(0);
    const [selectedOrderNum, setSelectedOrderNum] = useState(0);

    const { imageLib, setImageLib, addImageLib } = useContext(ImageContext);

    const downloadJson = () => {
      const saveText = JSON.stringify(JSONBook, null, "\t");

      // file setting
      const text = saveText;
      const name = "textbook.json";
      const type = "text/plain";
  
      // create file
      const a = document.createElement("a");
      const file = new Blob([text], { type: type });
      a.href = URL.createObjectURL(file);
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      console.log(JSONBook)
    }

    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });

    const onFolderChange = async (event) => {
      const os = window.require('os');
      let files = event.target.files;
      for(const file of files) {
        let folders, name;
        console.log("platform: ",os.platform())
        if (os.platform() === "win32") {
          folders = file.path.split('\\');
          name = folders[folders.length-2] + "/" + folders[folders.length-1];
        } else {
          folders = file.path.split('/');
          name = folders[folders.length-2] + "/" + folders[folders.length-1];
        }
        //saveImage(name, await toBase64(file));
        const binary = await toBase64(file);
        addImageLib(name, binary);
        console.log(name);
      }
    }

    const onJsonChange = (event) => {
      var reader = new FileReader();
      let json = event.target.files[0];

      var success = function ( content ) {
        console.log( JSON.parse(content) ); 
        setJSONBook(JSON.parse(content))
      }
      
      reader.onload = function ( event ) { success( event.target.result ) };
      reader.readAsText( json );

     // console.log(JSON.parse(reader.result));
    }


    // useEffect(() => {
    //     getCurriculum();
    //     if (myStudentInfo){
    //         getCurrentProgress(auth.user.id);
    //         getCompletedTextbooks(auth.user.id);
    //         if(lastTextbook){
    //             setSelectedOrderNum(lastTextbook.order_num);
    //             setCurrentLevel(lastTextbook.course, lastTextbook.level)
    //         }
    //     }
    // }, []);

    // useEffect(()=>{
    //     if (lastTextbook&&CurriculumIndex) {
    //         setSelectedOrderNum(lastTextbook.order_num);
    //         setCurrentLevel(lastTextbook.course, lastTextbook.level)
    //         for (const [code, courses] of Object.entries(CurriculumIndex)) {
    //             let breaked = false;
    //             for (const [course_id, course] of Object.entries(courses)) {
    //                 if (course_id == lastTextbook.course) {
    //                     setSelectedCourseLevel(code)
    //                     handleLevelOnClick(course_id, lastTextbook.level)
    //                     breaked = true;
    //                     break;
    //                 }
    //             }
    //             if (breaked) break;
    //         }
    //     }
    // },[JSON.stringify(lastTextbook), JSON.stringify(CurriculumIndex)])

    // useEffect(()=>{
    //     if(studentID){
    //         getCurrentStudentInfo(studentID);
    //         getCurrentProgress(studentID);
    //         getCompletedTextbooks(studentID);
    //     }
    // }, [studentID])

    // useEffect(()=>{
    //     if(CurriculumIndex && receivedTextbook){
    //         for (const [code, courses] of Object.entries(CurriculumIndex)){
    //             let breaked = false;
    //             for (const [course_id, course] of Object.entries(courses)){
    //                 if (course_id == receivedTextbook.course){
    //                     setSelectedCourseLevel(code);
    //                     breaked = true;
    //                     break;
    //                 }
    //             }
    //             if(breaked){
    //                 break;
    //             }
    //         }
    //         setSelectedOrderNum(receivedTextbook.order_num);
    //         setCurrentLevel(receivedTextbook.course, receivedTextbook.level);
    //         if(viewType !== 2){
    //             setViewType(2);
    //         }
    //     }
    // },[JSON.stringify(CurriculumIndex), JSON.stringify(receivedTextbook)])

    // useEffect(()=>{
    //     if(JSONBook){
    //         setViewType(2);
    //     }
    // },[JSON.stringify(JSONBook)])



    // useEffect(()=>{
    //     if(CurriculumProgress && CurriculumIndex){
    //         console.log("33333333333333333", CurriculumProgress, CurriculumIndex)
    //         let progress_course_id = CurriculumProgress["course_id"];
    //         if (CurriculumProgress["course_id"] !== 0){
    //             let breaked = false;
    //             for (const [code, courses] of Object.entries(CurriculumIndex)){
    //                 for (const [course_id, course] of Object.entries(courses)){
    //                     if (course_id == progress_course_id){
    //                         setSelectedCourseLevel(code);
    //                         handleLevelOnClick(course_id, CurriculumProgress["textbook_level"]);
    //                         breaked = true;
    //                         break;
    //                     }
    //                 }
    //                 if(breaked){
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    // }, [JSON.stringify(CurriculumProgress), JSON.stringify(CurriculumIndex)]);


    // const handleLevelOnClick = (course_id, textbook_level) =>{
    //     setCurrentLevel(course_id, textbook_level);
    //     setViewType(1);
    // }

    // const setCurrentLevel = (course_id, textbook_level) =>{
    //     let courseID = parseInt(course_id);
    //     let textbookLevel = parseInt(textbook_level);
    //     let request_data = {
    //         "course_id" : courseID,
    //         "textbook_level" : textbookLevel
    //     };
    //     setSelectedCourseID(courseID)
    //     setSelectedTextbookLevel(textbookLevel)
    //     getTextbooks(request_data);
    // }

    // const parseCurriculumIndex = (selectedIndex) =>{
    //     let to_return = [];
    //     for (const [course_id, course] of Object.entries(selectedIndex)){
    //         let course_return = [];
    //         let course_name = course['name'];
    //         for (const [textbook_level, value] of Object.entries(course['content'])){
    //             course_return.push(
    //                 <div className="curriculum-level" key={course_name + "_level_" +textbook_level} onClick={()=>{handleLevelOnClick(course_id,textbook_level)}}>
    //                     <div className="curriculum-level-content">
    //                         <div className={"level-badge badge-"+textbook_level}>LV.{textbook_level}</div>
    //                         <div className="curriculum-level-description">{value}</div>
    //                     </div>
    //                     <div className="curriculum-level-goto">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    //                             <g id="expand_more_black_48dp" transform="translate(0 24) rotate(-90)">
    //                                 <path id="패스_1041" data-name="패스 1041" d="M24,24H0V0H24Z" fill="none" opacity="0.87"/>
    //                                 <path id="패스_1042" data-name="패스 1042" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" fill="#757575"/>
    //                             </g>
    //                         </svg>
    //                     </div>
    //                 </div>
    //             );
    //         }
    //         to_return.push(
    //             <div className="course-layout" key={course_name}>
    //                 <div className="course-title">{course_name}</div>
    //                 {course_return}
    //             </div>
    //         );
    //     }
    //     return to_return;
    // }
    // const calculateTopIndicator = ()=>{
    //     if (textbookCompleteCallback){
    //         return "open";
    //     }
    //     if (CurriculumProgress){
    //         if (CurriculumProgress["course_level"] < selectedCourseLevel){
    //             return 0;
    //         }
    //         else if (CurriculumProgress["course_level"] > selectedCourseLevel){
    //             return "open";
    //         }
    //         else{
    //             if (CurriculumProgress["course_id"] == selectedCourseID){
    //                 if(CurriculumProgress["textbook_level"] > selectedTextbookLevel){
    //                     return "open";
    //                 }
    //                 else if (CurriculumProgress["textbook_level"] == selectedTextbookLevel){
                        
    //                     if (lastTextbook && lastTextbook.order_num > CurriculumProgress["order_indicator"]) {
    //                         return lastTextbook.order_num;
    //                     }
    //                     return CurriculumProgress["order_indicator"] + 1;
    //                 }
    //                 else{
    //                     return 0;
    //                 }
    //             }
    //             else{
    //                 return "open"
    //             }
    //         }
    //     }

    //     return "open";
    // }

    // const handleOnEdit = (data)=>{
    //     onEditFunction({
    //         ...data,
    //         course_id:selectedCourseID
    //     })
    // }

    // const handleTextbookOnClick = (data)=>{
    //     setSelectedOrderNum(data.order_num);
    //     textbookOnClickCallback(data);
    //     if(viewType !== 2){
    //         setViewType(2);
    //     }
    // }

    // const generateTextbookOutlineInfo = () =>{
    //     if (!selectedCourseLevel || selectedTextbookLevel==null) return null
    //     let info = {
    //         level_description:CurriculumIndex[selectedCourseLevel][selectedCourseID]?.content[selectedTextbookLevel],
    //         textbook_order_num:selectedOrderNum
    //     };
    //     return info;
    // }

    // if (!CurriculumIndex){
    //     return null;
    // }
    console.log("isopen" , isOpen)



    return (
        <div className={"textbook-sidebar" + (isOpen? "" : " closed") + (textbookCompleteCallback? " fixed" : "")}>
            <span className="material-icons-outlined textbook-sidebar-toggle" onClick={()=>{toggleSidebar(false)}}>
            close
            </span>
            {/* {(myStudentInfo || studentID) && (CurriculumProgressLoading || CurriculumIndexLoading) || viewType === 0? null: */}
            <div className="textbook-prev" onClick={()=>setViewType(viewType-1)}>
                <span className="textbook-sidebar-back material-icons-outlined">
                    west
                </span>
            </div>
            {/* {(myStudentInfo || studentID) && (CurriculumProgressLoading || CurriculumIndexLoading)? <Loader/> : viewType === 0? 
            <div className="course-level-container">
                <div className="course-level-browser">
                    {courseLevel.map((level, index) => {
                        if (level.code >= '003'){
                            return null;
                        }
                        return (
                            <div className={"course-badge badge-color" + (index+1) + (level.code==selectedCourseLevel? " clicked" : "")} onClick={()=>{setSelectedCourseLevel(level.code)}} key={level.value+"_"+level.id} value={level.code}>{level.description}</div>
                        )
                    })}
                </div>
                <div>
                    {
                        parseCurriculumIndex(CurriculumIndex[selectedCourseLevel])
                    }
                </div>
            </div>:
            viewType === 1?
            <TextbookBrowser 
                completedTextbooks = {CompletedTextbooks? CompletedTextbooks["detail"] : []} 
                textbookDict = {TextbookIndexLoading? null : TextbookIndex}
                textbookOnClickCallback = {textbookOnClickCallback? handleTextbookOnClick : null}
                topOrderIndicator = {calculateTopIndicator()}
                showTitle={true}
                textbookCompleteCallback = {textbookCompleteCallback}
                currentTextbook={currentTextbook || (lastTextbook)}
                onEditFunction={onEditFunction? handleOnEdit:null}
            />:
            viewType === 2?  */}
            <TextbookOutline stepIndicator={stepIndicator} setStepIndicator={setStepIndicator} selectedInfo={null} JSONBook={JSONBook}/>
            <hr></hr>
            {/* <button onClick={() => {saveTextbook(JSONBook)}}>저장</button> */}
            <button onClick={() => {setJSONBook(loadTextbook())}}>퀵로드</button>
            <br></br>
            <hr></hr>
            json파일 로드<input type="file" name="json" onChange={onJsonChange}/>
            
            <br></br>
            <hr></hr>
            <button onClick={downloadJson}> json 변환 </button>
            <br></br>
            <hr></hr>
            이미지파일 한번에 업로드 : <input type="file" name="myImage" onChange={onFolderChange} directory="" webkitdirectory="" multiple=""/>
            {/* } */}
        </div>
    )

}

export default TextbookSidebar