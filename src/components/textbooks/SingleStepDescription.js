// import React from 'react';
// import '../../assets/css/SingleStepDescription.css';
// import {
//     Card,
//     CardTitle,
//     CardHeader,
//     CardBody,
//     CardText,
//     Collapse,
//     //CardImg,
//     //CardLink,
// } from 'reactstrap';
// //import { Collapse } from '@material-ui/core'
// import {
//     PlusSquare, MinusSquare
// } from "react-feather";
// // import { API_URL, API_PROTOCOL } from '../../config';
// import reactHtmlParser from 'react-html-parser';

// const URL = API_PROTOCOL + API_URL;

// class SingleStepDescription extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             collapse1: this.props.collapse,
//         }

//     }
//     toggle = () =>{
//         this.setState({collapse1: !this.state.collapse1});
//     }

//     render() {
//         let count_for_key = 0;
//         const { collapse1, src_prefix } = this.state;
//         const {title,images,descriptions,description_title} = this.props;
//         const step_item_images = (images&&images.length>0)? images.map((image_item)=>{
//             count_for_key += 1;
//             return image_item.src?(
//                 <div key={image_item.src+count_for_key}>
//                     <img src={URL+'/uploads/textbooks/'+image_item.src} alt={image_item.name} width="50%" />
//                     <br />
//                     <b> {reactHtmlParser(image_item.name? image_item.name:null)} </b>
//                     <div className={"CardDescription"}>
//                         {reactHtmlParser(image_item.description? image_item.description:null)}
//                     </div>
//                     <br />
//                 </div>
                
//             )
//             :""
//         }):""
//         const step_item_descriptions = (descriptions && descriptions.length>0)?descriptions.map((description_item)=>{
//             count_for_key += 1;
//             return description_item.sub_content?(
//                 <div className={"CardDescription"} key={description_item.content+count_for_key}>
//                     <div>
//                         {reactHtmlParser(description_item.content)}
//                     </div>
//                     <div>
//                         {reactHtmlParser(description_item.sub_content)}
//                     </div>
//                 </div>
//             )
//             :(
//                 <div className={"CardDescription"} key={description_item.content+count_for_key}>
//                     <div>
//                         {reactHtmlParser(description_item.content?description_item.content:null)}
//                     </div>
//                 </div>
//             )
//         }):""
//         const card1 = (
//             <Card className={"Card"}>
//                 <CardHeader className={"CardHeader"}>
//                     <CardTitle className={"CardTitle"} tag="h4" > 
//                     {
//                         (collapse1) ? 
//                         <MinusSquare className={"SquareIcon"} onClick={this.toggle}/>
//                         :
//                         <PlusSquare className={"SquareIcon"} onClick={this.toggle}/>
//                     }
//                     {title}
//                     </CardTitle>
//                 </CardHeader>
                
//                 <Collapse
//                     isOpen={collapse1}
//                 >
//                 <CardBody className="CardBody">
//                     {reactHtmlParser(description_title)}
//                     {step_item_images}
//                     {step_item_descriptions}
//                 </CardBody>
//                 </Collapse>
//             </Card>
//         );
//         return (
//             <div>
//                 {card1}
//             </div>
                
//         );
//     }
// }

// export default SingleStepDescription;