// import React from 'react';
// import '../../assets/css/TextbookPage.css';
// import TextbookPage from './TextbookPage';
// // import * as textbook_actions from "../../redux/actions/api_textbook"
// // import { connect } from "react-redux"

// class ETextbook extends React.Component {

//     componentDidMount(){
//         const { src, textbook } = this.props
//         if(src){
//             this.displayJSONTextbook(src)
//         }
//         else if(textbook)
//             this.displayJSONTextbook(textbook.file.id)
//             document.getElementById('main-frame').animate([
//                 {opacity: '0'},
//                 {opacity: '1'}
//             ], {
//                 duration: 2000
//             }
//             )
//     }

//     componentDidUpdate(prevProps){
//         if(this.props.textbook !== prevProps.textbook){
//             if(this.props.textbook) {
//                 this.displayJSONTextbook(this.props.textbook.file.id)
//                 document.getElementById('main-frame').animate([
//                     {opacity: '0'},
//                     {opacity: '1'}
//                 ], {
//                     duration: 2000
//                 }
//                 )
//             }
//         }
//     }

//     async displayJSONTextbook(file_id) {
//         await this.props.get_json_textbook(file_id)
//     }

//     render() {
//         //this is textbook sample for /sample/textbook page
//         const sample_textbook ={
//             textbook_title : "행동과 반복",
//             textbook_subtitle : {
//                 stage: "BASIC",
//                 language: "SCRATCH",
//                 level: "1"
//             },
//             textbook_summary:{
//                 summary_image_src:"jsonsampletextbook/summary.gif",
//                 summary_text:"화살표 스프라이트를 화면 가장자릴 따라 이동시킵니다!"
//             },
//             textbook_contents : [
//               {
//                   step_title: "스프라이트를 만들어 봅시다!",
//                   step_no:"0",
//                   step_items:[
//                       {
//                           title: "화살표 모양을 선택하세요!",
//                           collapse:false,
//                           images:[{
//                             name:"image name 0-1",
//                             src:"jsonsampletextbook/img1.gif",
//                             description:"image description 0-1"
//                         }],
//                           description_title:"description_title0",
//                           descriptions:[
//                               {
//                                   content:"<h1>h1 태그</h1>",
//                                   sub_content:"<h1>h1 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></h1>"
//                               },
//                               {
//                                 content:"<h2>h2 태그</h2>",
//                                 sub_content:"<h2>h2 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></h2>"
//                             },
//                             {
//                                 content:"<h3>h3 태그</h3>",
//                                 sub_content:"<h3>h3 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></h3>"
//                             },
//                             {
//                                 content:"<h4>h4 태그</h4>",
//                                 sub_content:"<h4>h4 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></h4>"
//                             },
//                             {
//                                 content:"<h5>h5 태그</h5>",
//                                 sub_content:"<h5>h5 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></h5>"
//                             },
//                             {
//                                 content:"<h6>h6 태그</h6>",
//                                 sub_content:"<h6>h6 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></h6>"
//                             },
//                             {
//                                 content:"<p>p 태그</p>",
//                                 sub_content:"<p>p 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></p>"
//                             },
//                             {
//                                 content:"<b>b 태그</b>",
//                                 sub_content:"<b>b 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></b>"
//                             },
//                             {
//                                 content:"<a>a 태그</a>",
//                                 sub_content:"<a>a 태그 <b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b></a>"
//                             },
//                             {
//                                 content:"태그 없음",
//                                 sub_content:"태그 없음<b>Bold 글씨</b> <b style=\"color: #ff0000;\">Red Bold 글씨</b> <b  style=\"color: #0000ff;\">Blue Bold 글씨</b>"
//                             }
//                           ]
//                       }
//                   ]
//               },
//               {
//                 step_title:"초기화 합시다!",
//                 step_no:"1",
//                 step_items:[
//                   {
//                       title:"스프라이트의 크기를 설정해주세요",
//                       collapse:false,
//                       images:[
//                           {
//                               name:"image name 1-1",
//                               src:"jsonsampletextbook/img2.png",
//                               description:"image description 1-1"
//                           },
//                           {
//                               name:"image name 1-2",
//                               src:"jsonsampletextbook/img3.gif",
//                               description:"image description 1-2"
//                           }
//                       ],
//                       description_title:"description_title1",
//                       descriptions:[
//                           {
//                               content:"content1-1",
//                               sub_content:"sub_content1-1"
//                           },
//                           {
//                               content:"content1-2",
//                               sub_content:"sub_content1-2"
//                           }
//                       ]
//                   },
//                   {
//                       title:"처음 위치와 방향을 설정해주세요",
//                       collapse:false,
//                       images:[
//                           {
//                               name:"image name 2-1",
//                               src:"jsonsampletextbook/img4.png",
//                               description:"image description 2-1"
//                           },
//                           {
//                               name:"image name 2-2",
//                               src:"jsonsampletextbook/img5.png",
//                               description:"image description 2-2"
//                           }
//                       ],
//                       description_title:"description_title2",
//                       descriptions:[
//                           {
//                               content:"content2-1",
//                               sub_content:"sub_content2-1"
//                           },
//                           {
//                               content:"content2-2",
//                               sub_content:"sub_content2-2"
//                           }
//                       ]
//                   }
//                 ]
//               },
//               {
//                 step_title:"벽(가장자리)을 따라 이동하게 합시다!",
//                 step_no:"2",
//                 step_items:[
//                   {
//                       title:"화면의 크기를 다시 생각해봅시다",
//                       collapse:false,
//                       images:[
//                           {
//                               name:"image name 3-1",
//                               src:"jsonsampletextbook/img6.png",
//                               description:"image description 3-1"
//                           },
//                           {
//                               name:"image name 3-2",
//                               src:"jsonsampletextbook/img7.gif",
//                               description:"image description 3-2"
//                           }
//                       ],
//                       description_title:"description_title3",
//                       descriptions:[
//                           {
//                               content:"content3-1",
//                               sub_content:"sub_content3-1"
//                           },
//                           {
//                               content:"content3-2",
//                               sub_content:"sub_content3-2"
//                           }
//                       ]
//                   },
//                   {
//                       title:"한 변을 따라 움직이도록 해봅시다!",
//                       collapse:false,
//                       images:[
//                           {
//                               name:"image name 4-1",
//                               src:"jsonsampletextbook/img8.gif",
//                               description:"image description 4-1"
//                           },
//                           {
//                               name:"image name 4-2",
//                               src:"jsonsampletextbook/img10.gif",
//                               description:"image description 4-2"
//                           }
//                       ],
//                       description_title:"description_title5",
//                       descriptions:[
//                           {
//                               content:"content4-1",
//                               sub_content:"sub_content4-1"
//                           },
//                           {
//                               content:"content4-2",
//                               sub_content:"sub_content4-2"
//                           }
//                       ]
//                   },
//                   {
//                       title:"부드러운 회전을 해봅시다",
//                       collapse:false,
//                       images:[
//                           {
//                               name:"image name 5-1",
//                               src:"jsonsampletextbook/img11.gif",
//                               description:"image description 5-1"
//                           },
//                           {
//                               name:"image name 5-2",
//                               src:"jsonsampletextbook/img11.gif",
//                               description:"image description 5-2"
//                           }
//                       ],
//                       description_title:"description_title5",
//                       descriptions:[
//                           {
//                               content:"content5-1",
//                               sub_content:"sub_content5-1"
//                           },
//                           {
//                               content:"content5-2",
//                               sub_content:"sub_content5-2"
//                           }
//                       ]
//                   },
//                   {
//                       title:"처음 자리로 돌아오게 해봅시다",
//                       collapse:false,
//                       images:[
//                           {
//                               name:"image name 6-1",
//                               src:"jsonsampletextbook/img11.gif",
//                               description:"image description 6-1"
//                           },
//                           {
//                               name:"image name 6-2",
//                               src:"jsonsampletextbook/img11.gif",
//                               description:"image description 6-2"
//                           }
//                       ],
//                       description_title:"description_title6",
//                       descriptions:[
//                           {
//                               content:"content6-1",
//                               sub_content:"sub_content6-1"
//                           },
//                           {
//                               content:"content6-2",
//                               sub_content:"sub_content6-2"
//                           }
//                       ]
//                   },
//                   {
//                       title:"코드 간단히 하기",
//                       collapse:false,
//                       images:[
//                           {
//                               name:"image name 7-1",
//                               src:"jsonsampletextbook/img11.gif",
//                               description:"image description 7-1"
//                           },
//                           {
//                               name:"image name 7-2",
//                               src:"jsonsampletextbook/img11.gif",
//                               description:"image description 7-2"
//                           }
//                       ],
//                       description_title:"description_title7",
//                       descriptions:[
//                           {
//                               content:"content7-1",
//                               sub_content:"sub_content7-1"
//                           },
//                           {
//                               content:"content7-2",
//                               sub_content:"sub_content7-2"
//                           }
//                       ]
//                   }
//                 ]
//               }
//             ]
//         }
//         const {json_textbook} = this.props
//         if (json_textbook){
//             const textbook_content = json_textbook.textbook_content
//             return (
//                 <React.Fragment>
//                     <div className="main-frame main-frame-textbook" id="main-frame">
//                         <TextbookPage
//                             textbook_title={textbook_content.textbook_title}
//                             textbook_subtitle={textbook_content.textbook_subtitle}
//                             step_description_items={textbook_content.textbook_contents}
//                             toast_step_items={textbook_content.textbook_contents}
//                             textbook_summary={textbook_content.textbook_summary}
//                         />
//                     </div>
//                 </React.Fragment>
//             )
//         }
//         else{
//             const textbook_content = sample_textbook
//             return (
//                 <div className="main-frame main-frame-textbook" id="main-frame">
//                     <TextbookPage
//                         textbook_title={textbook_content.textbook_title}
//                         textbook_subtitle={textbook_content.textbook_subtitle}
//                         step_description_items={textbook_content.textbook_contents}
//                         toast_step_items={textbook_content.textbook_contents}
//                         textbook_summary={textbook_content.textbook_summary}
//                     />
//                 </div>
//             )
//         }
//     }
// }
// const mapStateToProps = state => ({
//     textbook: state.api_textbook.textbook,
//     json_textbook: state.api_textbook.json_textbook,
//     progress: state.api_textbook.progress,
//     auth: state.auth,
//     socket: state.peer_manager.socket
// })
// const mapDispatchToProps = dispatch => ({
//     get_json_textbook: fileId => dispatch(textbook_actions.getJSONTextbook(fileId)),
// });

// const ConnectedETextbook = connect(mapStateToProps,mapDispatchToProps)(ETextbook);

// export default ConnectedETextbook;