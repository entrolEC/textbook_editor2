import React from 'react';
import '../assets/css/Course.css';
import '../assets/css/ReportManage.css';

class ReportPreview extends React.Component{
    constructor(props){
        super(props);
    }

    parseLanguageId = (id) => {
        if(id===1) {
            return "스크래치"
        } else if(id===2) {
            return "파이썬"
        } else {
            return "등록x"
        }
    }

    render(){
        const{ textbook, progress, onClick, is_open, url_key } = this.props
        return (
                <div onClick={onClick}>
                    <div className="badge-container">
                        <div className="w-100 flex-between">
                            <div className="half-box bg-color-lang f-b c-ff">{this.parseLanguageId(textbook.language_id)}</div>
                            <div className="half-box bg-color-level f-b c-ff">레벨 {textbook.level}</div>
                        </div>
                        <div className="textbook-title-fullbox bg-color-tname f-b c-ff">{textbook.name}</div>
                    </div>
                    <div className="text-center f-12 c-ff f-b">
                        진도현황
                    </div>
                    <div className="progress-badge-container mt-2">
                        {
                            !is_open && !url_key?
                            <div className={progress.achievement ? "submitted-badge" : "waiting-badge"}>
                                {progress.achievement ? "발송불가" : "진행중"}
                            </div>:
                            is_open?
                            <div className={"progress-badge"}>
                                {"발송완료"}
                            </div>
                            :
                            <div className={"waiting-badge"}>
                                {"발송대기"}
                            </div>
                        }
                        
                    </div>
                    {/* <div className="mt-6rem text-center font-12 c-topolar">
                        {report.date.split("-")[0] + "년 " + report.date.split("-")[1] + "월 " + report.date.split("-")[2] + "일"}
                    </div> */}
                </div>
        )
    }
}

export default ReportPreview;