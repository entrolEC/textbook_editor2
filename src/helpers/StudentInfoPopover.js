import { showToast } from "./toast";

let survey_format = null;

const parseCourseLevel = (str) => {
    if(str==="ADV") return "Adventurer"
    else if(str==="PIO") return "Pioneer"
    else if(str==="MAS") return "Master"
    else if(str==="EXP") return "Expert"
    else return "NEW LEVEL";
}

const parseCourseType = (str) => {
    if(str==="NO") return "Normal"
    else if(str==="BL") return "Black"
    else if(str==="NP") return "Normal Promotion"
    else if(str==="BP") return "Black Promotion"
    else return "New Type"
}

const refindStudentInfo = (surveyInfoObj) => {
    let studentSelectedLevel = ""
    let content="";
    if(!surveyInfoObj.curriculumInfo) studentSelectedLevel="정보없음"
    else{
        studentSelectedLevel = surveyInfoObj.curriculumInfo.find(item=>item.id===2).answers[0].split("-")[0]
        surveyInfoObj.curriculumInfo.forEach((info) => {
            if(info.id===2) return;
            content += "<b style=\"color:#1db4b4;\">" + info.title + "</b> : ";
            let choices_string = info.answers.map(answer => answer).join(', ')
            content += choices_string + "</br>"
        })

    }
    let popoverInfoFormat = {
        id: surveyInfoObj.id,
        course_level: parseCourseLevel(surveyInfoObj.level),
        course_type: parseCourseType(surveyInfoObj.type),
        date_of_birth: surveyInfoObj.dateOfBirth,
        mobile_number: surveyInfoObj.mobileNumber,
        parent_mobile_number: surveyInfoObj.parentMobileNumber,
        ead: studentSelectedLevel,
        content_html: content
    }
    return popoverInfoFormat;
}

export const toggleSurveyInfo = (component=null, student_id=null) => {
    // if(!survey_format) survey_format = ead_survey_format;
    if(component.state.currentPopoverStudentInfo===student_id){
        component.setState({
            currentPopoverStudentInfo: null
        })
    } else {
        component.setState({
            currentPopoverStudentInfo: student_id,
            loading_survey_info: true
        }, async () => {
            // if data already called make loading false
            if(component.state.surveyInfoList[student_id]) {
                component.setState({
                    loading_survey_info: false,
                })
            } else {
                try {
                    const surveyInfoObj = await component.props.get_popover_survey_info(student_id);
                    component.setState({
                        surveyInfoList: {
                            ...component.state.surveyInfoList,
                            [student_id]: refindStudentInfo(surveyInfoObj)
                        },
                        loading_survey_info: false
                    })
                } catch (error) {
                    console.log("error: ", error)
                    showToast('설문조사 정보 오류', error.message, 'danger');
                }
            }
        })
    }
}