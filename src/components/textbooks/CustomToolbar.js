import React, {useContext, useEffect} from "react";
import 'assets/css/CustomToolbar.css'
import { TextbookContext } from "contexts/TextbookContext";

const CustomHeart = () => <span>♥</span>;

const CustomToolbar = ({complete, changeFolder, step_no, idx}) => {

  const { stepIndex, itemIndex } = useContext(TextbookContext);
  useEffect(() => {
    console.log("#toolbar"+stepIndex+itemIndex);
  }, [stepIndex, itemIndex]);

  // console.log("customToolbar", stepIndex);
  return (
  <div id={"toolbar"}>
    <span className="ql-formats">
      <select className="ql-font"></select>
      <select className="ql-size"></select>
    </span>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <select className="ql-color">
        <option value="blue"></option>
        <option value="#b103fc"></option>
        <option value="violet"></option>
        <option value="gold"></option>
        <option value="deepskyblue"></option>
        <option value="#00e317"></option>
        <option value="orange"></option>
        <option value="tomato"></option>
        <option value="black"></option>
      </select>
      <select className="ql-background"></select>
    <span className="ql-formats">
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-indent" value="-1"></button>
      <button className="ql-indent" value="+1"></button>
      <button className="ql-code"></button>
    </span>
    
{/* 
    
      <button style={{width:70}} onClick={complete}> 
        <div style={{margin:'10%', display:'inline-block', width:50, height:40}}> 수정완료 </div>
      </button>

      <button style={{width:100}} onClick={changeFolder}> 
        <div style={{margin:'10%', display:'inline-block', width:80, height:50}}> 교재폴더이름 </div>
      </button> */}
    
  </div>
)
    };

export default CustomToolbar;