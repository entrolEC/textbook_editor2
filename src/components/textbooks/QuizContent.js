import React, {useEffect, useMemo, useState, useContext} from 'react'
import { ImageContext } from 'contexts/ImageContext';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Editor from './Editor';
import { TextbookContext } from 'contexts/TextbookContext';

import reactHtmlParser from 'react-html-parser';
import JsxParser from 'react-jsx-parser'

export const QuizContent = ({components_item, index, hoverItemIndex, setHoverItemIndex, count_for_key, ButtonGroup}) => {
  const [item, setItem] = useState('iji');
  const [input, setInput] = useState([]);

  useEffect(() => {
    if (input.length == 0) {
      for (let i = 0; i < components_item.inputCount; i++) {
        input.push("");
      }
      console.log(input);
    }
  }, [])
  
  const handleChange = (e) => {
    setItem(e.target.value);
    console.log(item)
  }

  return (
    <div 
      className={"body-desc"}
      key={components_item.quiz+count_for_key}
      onMouseEnter={() => {setHoverItemIndex(index)}}
      onMouseLeave={() => {setHoverItemIndex(null)}}
    >
        <JsxParser 
          bindings={{
            value: item,
            handleChange: handleChange,
          }}
          blacklistedAttrs={[]}
          jsx={components_item.quiz}
          />
        {hoverItemIndex === index && <ButtonGroup index={index}/>}
    </div>
  );
}

// return (
//   <div className={"body-code"} key={components_item.quiz+count_for_key} onMouseEnter={() => {setHoverItemIndex(index)}} onMouseLeave={() => {setHoverItemIndex(null)}}>
//     {reactHtmlParser(components_item.quiz)}
//     {hoverItemIndex === index && <ButtonGroup index={index}/>}
//   </div>
// );