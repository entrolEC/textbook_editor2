import React, { useCallback, useEffect, useRef, useState, useContext, useMemo } from 'react';
import 'assets/sass/Curriculum/TextbookBrowser.scss'
import { API_URL, API_PROTOCOL } from '../../config';
import reactHtmlParser from 'react-html-parser';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark, materialLight, vs, duotoneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';

import {RenderImage} from './RenderImage';
import DisplayImage from './DisplayImage';
import {saveImage, loadImage} from '../../helpers/electronFileSystem'
import { TextbookContext } from 'contexts/TextbookContext';

import Editor from 'components/textbooks/Editor';
import CustomToolbar from 'components/textbooks/CustomToolbar'

import Button from 'components/Button';
import { Field } from 'components/textbooks/Field';
import { CodeLanguageSelectBox } from './CodeLanguageSelectBox';

import Modal from 'components/Modal'
import { ImageContent } from 'components/textbooks/ImageContent';


const URL = API_PROTOCOL + API_URL;

const TextbookContentView = ({
    data,
    JSONLoading,
    stepIndex,

}) =>{
    // const [image, setImage] = useState(null);
    const[text, setText] = useState("");
    const[code, setCode] = useState("더블클릭하여 code 입력");
    const[codeLanguage, setCodeLanguage] = useState("python");
    const[selectedImage, setSelectedImage] = useState(null);
    const [hoverItemIndex, setHoverItemIndex] = useState(null);
    const[imageModalVisible, setImageModalVisible] = useState(false);
    const { addDescription, addImage, addCode, addTable, deleteDescription } = useContext(TextbookContext);

    useEffect(() => {
      console.log("selectedImageName : ", selectedImage);
    },[selectedImage])

    const readFile = () => {
      const fs = window.require('fs');

      const dir = "/Users/eui-chan/Documents/tonysCoding/textbook_simulator_edited/textbook/guessNumber"
      const files = fs.readdirSync(dir)

      for (const file of files) {
        console.log(file)
      }

      // fs.readFile('/Users/eui-chan/Documents/tonysCoding/textbook_simulator_edited/textbook/guessNumber/input.gif', function(err, data) {
      //   console.log(data);
      //   setImage(Buffer.from(data).toString('base64'));
      //   console.log(Buffer.from(data).toString('base64'))
      // })
    }


      // const files = fs.readdirSync(dir)

      // for (const file of files) {
      //   console.log(file)
      // }
    

    const selectFolder = async () => {
      const dirHandle = await window.showDirectoryPicker();
      console.log(dirHandle);
    }

    const handleCode = (e) => {
      setCode(e.currentTarget.value);
    }

    const handleText = (text) => {
      setText(text);
    }

    const ButtonGroup = ({index}) => (
      <div className={"body-buttonGroup"}>
        <Button size="small" type="fill" color="black" onClick={()=>{addDescription(index+1, text)}}>desc 추가</Button>
        <Button size="small" type="fill" color="black" onClick={()=>{addImage(index+1, selectedImage)}}>image 추가</Button>
        <Button size="small" type="fill" color="black" onClick={()=>{addCode(index+1, code, codeLanguage)}}>code 추가</Button>
        {/* <Button size="small" type="fill" color="black" onClick={()=>{addTable(index+1, text)}}>table 추가</Button> */}
        {index > -1 && <Button size="small" type="fill" color="red" onClick={()=>{deleteDescription(index)}}>제거</Button>}
        
      </div>
      
    )

    const parseData = (data) =>{
        const {title, components, description_title} = data;

        let count_for_key = 0;

        const step_item_descriptions = (components && components.length>0)?components.map((components_item, index)=>{
            count_for_key += 1;
            let type = components_item.type;
            if (type === "desc"){
                count_for_key += 1;
                return (
                    <div className={"body-desc"} key={components_item.description+count_for_key} onMouseEnter={() => {setHoverItemIndex(index)}} onMouseLeave={() => {setHoverItemIndex(null)}}>
                        <div>
                            <Markdown children={components_item.description} rehypePlugins={[rehypeRaw]} />
                        </div>
                        {hoverItemIndex === index && <ButtonGroup index={index}/>}
                        
                    </div>
                );
            }
            else if (type === "table"){
                count_for_key += 1;
                return(
                <div className={"body-table"} key={components_item.description+count_for_key} onMouseEnter={() => {setHoverItemIndex(index)}} onMouseLeave={() => {setHoverItemIndex(null)}}>
                    <Markdown 
                        children={components_item.description} 
                        remarkPlugins={[[gfm, {borderWidth: "1px"}]]}
                    />
                    {hoverItemIndex === index && <ButtonGroup index={index}/>}
                </div>
                );
            }
            else if (type === "code"){
                count_for_key += 1;
                return (
                    <div className={"body-code"} key={components_item.code+count_for_key} onMouseEnter={() => {setHoverItemIndex(index)}} onMouseLeave={() => {setHoverItemIndex(null)}}>
                    <Markdown
                        children={components_item.code}
                        components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={materialLight}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                            ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                            )
                        }
                        }}
                    />
                    {hoverItemIndex === index && <ButtonGroup index={index}/>}
                    </div>
                );
            }
            else if (type === "image") {
                count_for_key += 1;
                return (
                  <>
                  <ImageContent
                    components_item={components_item} 
                    index={index} 
                    hoverItemIndex={hoverItemIndex}
                    setHoverItemIndex={setHoverItemIndex} 
                    loadImage={loadImage} 
                    count_for_key={count_for_key} 
                    selectedImage={selectedImage} 
                    setSelectedImage={setSelectedImage}
                    ButtonGroup={ButtonGroup}
                  />
                  
                  </>
                )
            }
        }):null;
        
        const card1 = (
            <div className={"textbook-container"}>
                <div className={"textbook-header"}>
                    <div className={"textbook-title"}> 
                    {title}
                    </div>
                </div>
                
                <div className="textbook-body">
                <ButtonGroup index={-1}/>
                    {reactHtmlParser(description_title)}
                    {step_item_descriptions}
                </div>
            </div>
        );
        return (
            <div>
                {card1}
            </div>
                
        );
    }

    if (JSONLoading){
        return null;
    }
    if (!data){
        return null;
    }
    const OPTIONS = [
      { value: "python", name: "python" },
      { value: "cpp", name: "cpp" },
      { value: "java", name: "java" },
      { value: "javascript", name: "javascript" },
    ];
    
    return (
        <div className="textbook-content-view">
            {/* <Modal isOpen={imageModalVisible} toggle={setImageModalVisible} subHeader="b" header="a">
              <DisplayImage selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            </Modal> */}
            
            {parseData(data)}
            <div style={{marginTop: "50px"}}>
              <hr></hr>
              이미지 선택 : 
              {/* <button onClick={() => {setImageModalVisible(true)}}>modal</button> */}
              <DisplayImage selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
              <hr></hr>
              <CustomToolbar/>
              <Editor placeholder={"이곳에 desc 입력"} text={text} handleChange={handleText}/>
              <hr></hr>
              <CodeLanguageSelectBox options={OPTIONS} defaultValue="python" setCodeLanguage={setCodeLanguage}></CodeLanguageSelectBox>;
              <Field
                value={code}
                inputChange={handleCode}
                active = {code}
              />
              <br></br>
            </div>
        </div>
    )

}

export default TextbookContentView