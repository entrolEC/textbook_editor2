import React, {useEffect, useMemo, useState} from 'react'
import { ImageContext } from 'contexts/ImageContext';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const DescContent = ({components_item, index, hoverItemIndex, setHoverItemIndex, count_for_key, ButtonGroup}) => {
  console.log("desc rerenderd");
  // const { imageLib, setImageLib, addImageLib } = useContext(ImageContext);
  //const image = useMemo(()=>loadImage(components_item.src),[components_item]);
  // console.log("dirname : ",__dirname)
  return (
    <div className={"body-desc"} key={components_item.description+count_for_key} onMouseEnter={() => {setHoverItemIndex(index)}} onMouseLeave={() => {setHoverItemIndex(null)}}>
        <div>
            <Markdown children={components_item.description} rehypePlugins={[rehypeRaw]} />
        </div>
        {hoverItemIndex === index && <ButtonGroup index={index}/>}
        
    </div>
  );
}
