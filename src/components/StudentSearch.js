import React from 'react';
import '../assets/css/ReportManage.css';
import { Card, CardHeader, CardTitle } from 'reactstrap';
import { getVowel } from '../helpers/getVowel';
import Loader from './Loader';

const dummy = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ" ,"ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", 
"ㅌ", "ㅍ", "ㅎ"]

export default class StudentSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchValue: "",
            studentVowel: {},
            selectedStudent: null,
            loading_student_list: false
        }
    }

    componentDidMount(){
        this.arrangeByStudentVowel()
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.students_list !== this.props.students_list){
            this.arrangeByStudentVowel()
        }
    }
    
    arrangeByStudentVowel = () => {
        let temp = {}
        dummy.forEach((vowel) => {
            temp = {
                ...temp,
                [vowel]: []
            } 
        })
        temp["기타"] = []
        this.props.students_list.forEach((student) => {
            if(student.first_name==="") return;
            temp[getVowel(student.first_name, true) ? getVowel(student.first_name, true) : "기타"].push({
                name: student.first_name,
                id: student.id
            })
        })
    
        this.setState({
            studentVowel: temp
        })
    }

    handleSearchStudent = (e) => {
        let { value } = e.target
        this.setState({
            searchValue: value
        })
    }

    showStudentReport = async (student) => {
        this.setState({
            loading_student_list: true
        })
        try {
            await this.props.get_report_list(student.id)
            this.setState({
                selectedStudent: student.id,
                loading_student_list: false
            })
        } catch (error) {
            this.setState({
                loading_student_list: false
            })
        }

    }

    render(){
        const { 
            studentVowel,
            searchValue,
            selectedStudent,
            loading_student_list
        } = this.state
        return (
            <div className="student-search-container">
                <Card>
                    <div className="student-search-list-container">
                        <CardHeader>
                            <CardTitle>
                                리포트 관리
                            </CardTitle>
                        </CardHeader>
                        <input 
                            className="custom-search-bar mb-2"
                            type="text"
                            placeholder="검색"
                            onChange={this.handleSearchStudent}
                            value={this.state.searchValue}
                            maxLength={10}
                        />
                    </div>
                    {loading_student_list ? 
                    <Loader/> :
                    <div className="student-search-list-container">
                        {
                        Object.keys(studentVowel).filter(vowel => studentVowel[vowel].length !== 0)
                        .map((student_vowel, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="vowel-container">
                                        {student_vowel}
                                    </div>
                                    {studentVowel[student_vowel].filter((stu_obj) => {
                                        if(searchValue === "") return true;
                                        return (stu_obj.name + getVowel(stu_obj.name) + stu_obj.id).includes(searchValue)
                                    })
                                    .map((stu_obj, index) => {
                                        return (
                                            <div className={"student-name-by-vowel " + (selectedStudent===stu_obj.id ? "report-manage-selected-student" : "")}
                                            key={index} onClick={() => this.showStudentReport(stu_obj)}>
                                                <div>{stu_obj.name}</div>
                                                <div>{stu_obj.id}</div>
                                            </div>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                    </div>
                    }
                </Card>
            </div>
        )
    }
}