import React from "react";
import { useState, useEffect, useContext } from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import { TextbookContext } from "contexts/TextbookContext";
import "react-quill/dist/quill.snow.css";
import "assets/css/EditorStyles.css";

const imageHandler = () => {

}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

const Editor = (props) => {
  const { stepIndex, itemIndex } = useContext(TextbookContext);
  // useEffect(() => {
  //   console.log(props.text)
  // },[props.text])

  const modules = {
    toolbar: {
      container: ("#toolbar"+stepIndex+itemIndex),
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "size",
    "color",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "code"
  ];

  return (
    <div className="text-editor">
      
      <ReactQuill
        value={props.text || ''}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        modules={modules}
        formats={formats}
        theme="snow"
        style={{height:"250px"}}
      />
    </div>
  );
  
}


export default Editor;