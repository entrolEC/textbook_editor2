import { render } from "@testing-library/react";
import { saveImage } from "helpers/electronFileSystem";
import React, { useState, useCallback, useRef, Component } from "react";
import ReactCrop from 'react-image-crop'
import "react-image-crop/dist/ReactCrop.css";

const DisplayImage = (props) => {
  const [crop, setCrop] = useState({ unit: '%', width: 30, height:30});
  const [upImg, setUpImg] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);

  const imgRef = useRef(null);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

  const onImageChange = async event => {
    const os = window.require('os');
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let folders, name;
      console.log("platform: ",os.platform())
      if (os.platform() === "win32") {
        folders = img.path.split('\\');
        name = folders[folders.length-2] + "/" + folders[folders.length-1];
      } else {
        folders = img.path.split('/');
        name = folders[folders.length-2] + "/" + folders[folders.length-1];
      }
      
      console.log(name);

      const reader = new FileReader(); // set image for crop
      reader.addEventListener('load', () => {setUpImg(reader.result)});
      reader.readAsDataURL(event.target.files[0]);

      saveImage(name, await toBase64(img)); // save binary image to storage
      props.setSelectedImage(name)
    }
  };


    return (
      <div>
        <div>
          <div>
            {/* {this.state.image !== null && 
            // <img src={`data:image/jpeg;base64,${this.state.image.substring(24)}`} />
            <img src={this.state.image} />
            } */}
            
            {/* <h1>Select Image</h1> */}
            <input type="file" name="myImage" onChange={onImageChange} />
            {/* <ReactCrop
              src={upImg}
              onImageLoaded={onLoad}
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            /> */}
          </div>
        </div>
      </div>
    );
  }

export default DisplayImage;