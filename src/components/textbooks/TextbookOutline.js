import React, { useCallback, useEffect, useRef, useState, useContext } from 'react';
import 'assets/sass/Curriculum/TextbookOutline.scss'
// import { Collapse } from 'pages/main/MainPageComponents';
// import Loader from 'guideComponents/Loader';
import { TextbookContext } from 'contexts/TextbookContext';
import smalltalk from 'smalltalk';

const TextbookOutline = ({
    stepIndicator,
    setStepIndicator,
    JSONBook, 
    selectedInfo = null, 
}) =>{
    const [hoverStepIndex, setHoverStepIndex] = useState(null);
    const [hoverItemIndex, setHoverItemIndex] = useState(null);
    const { setIndex, addStep, setStep, deleteStep, addItem, setItem, deleteItem } = useContext(TextbookContext);

    const stepAddClick = (stepIndex) => {
      smalltalk
      .prompt('Question', '스탭 제목을 입력해주세요.', '')
      .then((value) => {
          console.log(value);
          addStep(value, stepIndex+1)
      })
      .catch(() => {
          console.log('cancel');
      });
    }

    const stepChangeClick = (stepIndex) => {
      smalltalk
      .prompt('Question', '바꿀 제목을 입력해주세요.', '')
      .then((value) => {
          console.log(value);
          setStep(value, stepIndex)
      })
      .catch(() => {
          console.log('cancel');
      });
    }

    const itemAddClick = (stepIndex, itemIndex) => {
      smalltalk
      .prompt('Question', '아이템 제목을 입력해주세요.', '')
      .then((value) => {
          console.log(value);
          addItem(value, stepIndex, itemIndex + 1)
      })
      .catch((e) => {
          console.log(e)
      });
    }

    const itemChangeClick = (stepIndex, itemIndex) => {
      smalltalk
      .prompt('Question', '바꿀 제목을 입력해주세요.', '')
      .then((value) => {
          console.log(value);
          setItem(value, stepIndex, itemIndex)
      })
      .catch((e) => {
          console.log(e)
      });
    }

    const parseTextbook = (textbook) =>{
        let index = -1
        const textbookContents = textbook.textbook_contents.map((step_dict, stepIndex)=>{
            const textbookSteps = step_dict.step_items.map((step, itemIndex)=>{
                index +=1
                const CurrentIndex = index;
                if(stepIndicator==CurrentIndex) {
                  setIndex(stepIndex, itemIndex);
                }
                return(
                    <div key={step.title + CurrentIndex} className={"textbook-step" + (stepIndicator==CurrentIndex?" current" : "")}
                        onClick={()=>{setStepIndicator(CurrentIndex)}} onMouseEnter={() => {setHoverItemIndex(itemIndex)}} onMouseLeave={() => {setHoverItemIndex(null)}}>
                        - {step.title}
                        
                        {hoverItemIndex === itemIndex && hoverStepIndex === stepIndex &&
                        <div>
                          <button onClick={() => {itemAddClick(stepIndex, itemIndex)}}>아이템 추가</button>
                          <button onClick={() => {deleteItem(stepIndex, itemIndex)}}>아이템 제거</button>
                          <button onClick={() => {itemChangeClick(stepIndex, itemIndex)}}>아이템 이름 변경</button>
                        </div>
                      }
                    </div>
                )
            })
            return(
                <>
                  
                  <div className="textbook-steps" key={'textbook_steps_'+stepIndex} onMouseEnter={() => {setHoverStepIndex(stepIndex)}} onMouseLeave={() => {setHoverStepIndex(null)}}>
                      <div className="textbook-step-title"> Step {step_dict.step_no}. {step_dict.step_title}</div>
                      <div className="textbook-step-container">{textbookSteps}</div>
                      {hoverStepIndex === stepIndex && !step_dict.step_items.length && <button onClick={() => {itemAddClick(stepIndex, 0)}}>아이템 추가</button>}
                      {hoverStepIndex === stepIndex && 
                        <div>
                          <button onClick={() => {stepAddClick(stepIndex)}}>스탭 추가</button>
                          <button onClick={() => {deleteStep(stepIndex)}}>스탭 제거</button>
                          <button onClick={() => {stepChangeClick(stepIndex)}}>스탭 이름 변경</button>
                        </div>
                      }
                  </div>
                </>
            )
        })
        // if (!JSONBook ||  !selectedInfo || !selectedInfo.textbook_order_num){
        //     return <Loader/>;
        // }
        return (
            <div className = "textbook-outline">
                {/* <div className="textbook-description">
                    <div className="level-description">{selectedInfo.level_description}</div>
                    <div className="textbook-title">{selectedInfo?.textbook_order_num?.toString().padStart(2,'0')} {textbook.textbook_content.textbook_title} </div>
                    <div className="textbook-badges">
                        <div>{textbook.textbook_content.textbook_subtitle.stage}</div>
                        <div>{textbook.textbook_content.textbook_subtitle.language}</div>
                        <div>LV.{textbook.textbook_content.textbook_subtitle.level}</div>
                    </div>
                </div> */}
                <div className="textbook-contents">
                    {textbookContents}
                </div>
            </div>
        )
    }


    // if (!JSONBook || !selectedInfo){
    //     return <Loader/>;
    // }
    
    return (
      <>
        <div>
          <button onClick={() => {stepAddClick(-1)}}>스탭 추가</button>
        </div>
        {parseTextbook(JSONBook)}
      </>
    )

}

export default TextbookOutline