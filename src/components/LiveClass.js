// // import React from "react";
// import ReactPlayer from 'react-player';


// class LiveClass extends React.Component {
//   constructor(props) {
//       super(props);
//       this.live_class_url = new URLSearchParams(this.props.location.search).get("url");
//   }

//   render() {
//       const live_url = this.live_class_url ? this.live_class_url.startsWith("https://") ? this.live_class_url : "https://"+this.live_class_url : false
//       return (
        
//         <div>
//           {
//             live_url?
//             <ReactPlayer url={live_url} />:
//             "수업 준비중"
//           }
//         </div>
//       );
//   }
// }

// export default LiveClass;
