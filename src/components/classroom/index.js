import React, { useCallback, useEffect, useRef, useState, useMemo, useReducer } from 'react';

// import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import useApi from 'components/Hooks/useApi';

// import { getTextbook, getJSONTextbook } from 'redux/actions/api_textbook';
// import { getMyStudentInfo } from 'redux/actions/api_studentinfo';
// import { API_URL, CLASSROOM_ENTRY_TIME_BUFFER, SOC_PROTOCOL } from "../../../config";

import 'assets/sass/Curriculum/TextbookSidebar.scss';
import 'assets/sass/Classroom/NewClassroom.scss';
import ToolBar from "./ToolBar";
import ClassroomFooter from "./ClassroomFooter";
import ClassroomHeader from "./ClassroomHeader";


import TextbookSidebar from 'components/textbooks/TextbookSidebar';
//import { showToast } from 'helpers/toast';
import TextbookContentView from 'components/textbooks/TextbookContentView';

import { DefaultTextbook }  from "./DefaultTextbook";
//import ClassroomEventPopup from '../ClassroomEventPopup';

import { TextbookContext } from "contexts/TextbookContext";
import { ImageContext } from "contexts/ImageContext";

import { saveTextbook, loadTextbook } from "helpers/electronFileSystem";

import tutorial from "textbook/Textbook_lv0_0_tutorial/textbook1.json";
const NewClassroom = () =>{
    //===========================================USE API=============================================//
    // const [StudentInfoLoading, StudentInfoResolved, StudentInfoError, getStudentInfo] = useApi(getMyStudentInfo);
    // const [TextbookLoading, Textbook, TextbookError, getCurrentTextbook] = useApi(getTextbook);
    // const [JSONLoading, JSONBook, JSONError, getJSONBook] = useApi(getJSONTextbook);
    
    //===========================================USE SELECTOR=============================================//
    // const studentInfo = useSelector(state=>state.api_studentinfo.studentinfo)
    // const auth = useSelector(state => state.auth, shallowEqual);
    // const textbook = useSelector(state => state.api_textbook.textbook, shallowEqual);

    //===========================================USE STATE=============================================//
    
    const [Textbook, setTextbook] = useState(null);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [stepIndicator, setStepIndicator] = useState(0);
    const [stepsList, setStepsList] = useState([]);
    const [stepsListLength, setStepsListLength] = useState(null);
    
    const [JSONBook, setJSONBook] = useState(tutorial);

    const [stepIndex, setStepIndex] = useState(0);
    const [itemIndex, setItemIndex] = useState(0);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [imageLib, setImageLib] = useState(new Map());

    //===========================================USE EFFECT=============================================//
    // useEffect(()=>{
    //     if(!studentInfo){
    //         getStudentInfo();
    //     }
    //     // setDefaultJSON()
    // },[]);

    // useEffect(()=>{
    //     if(studentInfo && studentInfo.current_textbook){
    //         setTextbookId(studentInfo.current_textbook.id);
    //         getJSONBook(studentInfo.current_textbook.file);
    //         setLastTextbook(studentInfo.current_textbook);
    //     }
    //     else if (studentInfo && !studentInfo.current_textbook){
    //         getCurrentTextbook(0);
    //     }
    // },[JSON.stringify(studentInfo)])

    // useEffect(()=>{
    //     if(TextbookError){
    //         showToast('', TextbookError, 'danger')
    //     }
    // },[TextbookError])
    
    // useEffect(()=>{
    //     if(Textbook){
    //         if(Textbook.file.textbook_type !==2){
    //             //showToast('', "지원하지 않는 교재 형식입니다", 'danger');
    //         }
    //         else{
    //             setTextbookId(Textbook.id);
    //             getJSONBook(Textbook.file.id);
    //             if(fromTeacherTrigger){
    //                 setLastTextbook(Textbook);
    //                 setStepIndicator(0);
    //                 setTrigger(false);
    //             }
    //         }
    //     }
    // },[JSON.stringify(Textbook)])

    const movePage = () => {
      let steps_list = [];
      JSONBook.textbook_contents.forEach((step)=>{
      //JSONBook.textbook_content.textbook_contents.forEach((step)=>{
          steps_list = steps_list.concat(step.step_items);
      });
      setStepsList(steps_list);
      setStepsListLength(steps_list.length);
    }
    
    useEffect(()=>{
      movePage();
      forceUpdate();
    },[stepIndicator, JSONBook])

    //===========================================FUNCTIONS=============================================//

    // const textbookOnClick = (info)=>{
    //     if (info.textbook_id&&(info.textbook_id!==textbookId)){
    //         setStepIndicator(0);
    //         setStepsList([]);
    //         getCurrentTextbook(info.textbook_id);
    //     }
    // }

    // const setDefaultJSON = () =>{
        // TO DO IN FUTURE
    // }



    // if (!studentInfo){
    //     return null;
    // }

    const setIndex = (stepIndex, itemIndex) => {
      setStepIndex(stepIndex);
      setItemIndex(itemIndex);
    }

    const addStep = (stepTitle, stepIndex) => {
      let newBook = JSONBook;
      for(let i = stepIndex; i < newBook.textbook_contents.length; i++) {
        newBook.textbook_contents[i].step_no = i+1;
      }

      newBook.textbook_contents.splice(stepIndex, 0, {
        "step_title": stepTitle,
        "step_no": stepIndex,
        "step_items": []
      })
      console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const addItem = (itemTitle, stepIndex, itemIndex) => {
      let newBook = JSONBook;
      newBook.textbook_contents[stepIndex].step_items.splice(itemIndex, 0, {
        "title": itemTitle,
        "tags": [],
        "collapse": false,
        "components": []
      })

      console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const deleteStep = (stepIndex) => {
      let newBook = JSONBook;
      for(let i = stepIndex+1; i < newBook.textbook_contents.length; i++) {
        newBook.textbook_contents[i].stepIndex = i-1;
      }

      newBook.textbook_contents.splice(stepIndex, 1)
      console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const deleteItem = (stepIndex, itemIndex) => {
      let newBook = JSONBook;
      newBook.textbook_contents[stepIndex].step_items.splice(itemIndex, 1)

      console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const addDescription = (index, text) => {
      let newBook = JSONBook;
      newBook.textbook_contents[stepIndex].step_items[itemIndex].components.splice(index, 0, {
        "type": "desc",
        "description": text
      })

      console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const addImage = (index, name) => {
      let newBook = JSONBook;
      if(name === null) {
        return
      }
      newBook.textbook_contents[stepIndex].step_items[itemIndex].components.splice(index, 0, {    
        "type": "image",
        "name": "",
        "src": name
      })

      console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const addCode = (index, text, language) => {
      let newBook = JSONBook;
      newBook.textbook_contents[stepIndex].step_items[itemIndex].components.splice(index, 0, {
        "type": "code",
        "code": "~~~" + language + " \n" + text + "\n ~~~"
      })

      console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const addTable = (index) => {
      let newBook = JSONBook;
    }

    const deleteDescription = (index) => {
      let new_textbook = JSONBook
      new_textbook.textbook_contents[stepIndex].step_items[itemIndex].components.splice(index,1);
      setTextbook(new_textbook);
      forceUpdate();
    }

    const setDescription = async (index, text) => {
      let newBook = JSONBook
      // console.log(index, text)
      newBook.textbook_contents[stepIndex].step_items[itemIndex].components[index].description = text
      // console.log(newBook.textbook_contents[stepIndex].step_items[itemIndex].components[index].description)

      // console.log(new_textbook)

      // newBook.textbook_contents[stepIndex].step_items[itemIndex].components.splice(index, 1);
      // newBook.textbook_contents[stepIndex].step_items[itemIndex].components.splice(index, 0, {
      //   "type": "desc",
      //   "description": text
      // })

      // console.log(newBook)

      setJSONBook(newBook);
      saveTextbook(newBook);
      forceUpdate();
    }

    const addImageLib = (key, value) => {
      console.log("image added", key);
      setImageLib((prev) => new Map([...prev, [key, value]]));
    };

    const textbookContextValue = useMemo(() => ({ 
      stepIndex, itemIndex, setIndex, addDescription, addImage, addCode, addTable, deleteDescription, addStep, deleteStep, addItem, deleteItem, setDescription}
      ), [stepIndex, itemIndex, setIndex, addDescription, addImage, addCode, addTable, deleteDescription, addStep, deleteStep, addItem, deleteItem, setDescription]);

    const imageContextValue = useMemo(() => ({ 
      imageLib, setImageLib, addImageLib
    }),[imageLib, setImageLib, addImageLib]);

    if(stepsList.length === 0) {
      return null;
    }
    return (
        <>
        {/* {screenSize==='desktop' && 
        <ClassroomEventPopup
            isOpen={isCouponModalOpen}
            toggle={()=>setIsCouponModalOpen(!isCouponModalOpen)}
        >
        </ClassroomEventPopup>
        } */}
            
            <div className="new-classroom fit-app">
                {/* <ClassroomHeader firstName={"교재 제작 툴"}/> */}
                <ImageContext.Provider value={imageContextValue}>
                  <TextbookContext.Provider value={textbookContextValue}>
                    <TextbookSidebar 
                        toggleSidebar={setSidebarOpen}
                        textbookOnClickCallback={null}
                        isOpen = {sidebarOpen}
                        currentTextbook = {Textbook}
                        JSONBook = {JSONBook}
                        setJSONBook = {setJSONBook}
                        stepIndicator = {stepIndicator}
                        setStepIndicator = {setStepIndicator}
                        lastTextbook={Textbook}/>
                    <div className="classroom-textbook-header">
                        <span onClick={()=>{setSidebarOpen(true)}} className="material-icons-outlined textbook-sidebar-toggle">open</span>
                        {Textbook? Textbook.name : null}
                    </div>
                    {/* <ToolBar history={null} getTextbook={null} setTrigger={setTrigger} toggleCouponModal={()=>setIsCouponModalOpen(!isCouponModalOpen)} /> */}
                    <ClassroomFooter maxIndex={stepsListLength} stepIndicator={stepIndicator} setStepIndicator={setStepIndicator}/>
                    {<TextbookContentView JSONLoading={false} data={stepsList? stepsList[stepIndicator] : null} />}
                    
                  </TextbookContext.Provider>
                </ImageContext.Provider>
            </div>
        </>
    )
}

export default NewClassroom