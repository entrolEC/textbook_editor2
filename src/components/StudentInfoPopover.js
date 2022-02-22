import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import reactHtmlParser from 'react-html-parser';
import "../assets/css/Classroom.css";
import { toggleSurveyInfo } from '../helpers/StudentInfoPopover';
import Loader from '../components/Loader';

class StudentInfoPopover extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { 
            isOpen=false, 
            target_info="", 
            parent=null,
            student_info=null,
            loading_survey_info=false
        } = this.props
        return (
            <UncontrolledPopover
                trigger="legacy"
                className='dnm classroom_settings2'
                placement='right-start'
                style={{position: 'absolute'}}
                isOpen={isOpen}
                target={'survey_info_'+target_info}
            >
                {loading_survey_info || !student_info ? 
                <>
                <PopoverBody className="flex align-center" style={{height: '200px'}}>
                    <Loader height_restriction />
                </PopoverBody>
                </>
                :
                <>
                <PopoverHeader>
                    <div className="flex-between">
                        <b className="c-topolar">
                            코딩경험: {" "+student_info.ead}
                        </b>
                        <div className="classroom-popover-close-button" onClick={() => toggleSurveyInfo(parent, student_info.id)} />
                    </div>                    
                </PopoverHeader>
                <React.Fragment>
                    <PopoverBody style={{wordBreak: 'keep-all', width: '300px', fontSize: '1rem'}}>
                        {reactHtmlParser(
                            "<b style=\"color:#1db4b4;\">Type</b> :" + student_info.course_type + "</br>" +
                            "<b style=\"color:#1db4b4;\">Level</b> :" + student_info.course_level + "</br>" +
                            "<b style=\"color:#1db4b4;\">생년월일</b> :" + student_info.date_of_birth + "</br>" +
                            "<b style=\"color:#1db4b4;\">연락처</b> :" + (student_info.mobile_number ? student_info.mobile_number : "입력된 정보가 없습니다.") + "</br>" +
                            "<b style=\"color:#1db4b4;\">학부모 연락처</b> :" + (student_info.parent_mobile_number ? student_info.parent_mobile_number : "입력된 정보가 없습니다.") + "</br>" +
                            student_info.content_html
                        )}
                    </PopoverBody>
                </React.Fragment>  
                </>              
                }
            </UncontrolledPopover>
        )
    }
}

export default StudentInfoPopover;