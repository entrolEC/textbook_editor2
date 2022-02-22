import React, {useState, useEffect} from "react";

export const RenderImage = (url) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => res.blob()) // Gets the response and returns it as a blob
    .then(blob => {
      // Here's where you get access to the blob
      // And you can use it for whatever you want
      // Like calling ref().put(blob)

      // Here, I use it to make an image appear on the page
      let objectURL = global.URL.createObjectURL(blob);
      let myImage = new Image();
      myImage.src = objectURL;
      setImage(objectURL);
    });
  },[])
  
  return(
    <img src={image}/>
  )
}