import React from 'react';
import {Toast, ToastHeader, ToastBody, Collapse} from 'reactstrap';
import '../../assets/css/TextbookPage.css'

class ToastStep extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const status = true;
        const {title, img, step } = this.props;
        return (
            <div>
                <Toast className="tempToastSize"> 
                    <ToastHeader style={{backgroundColor:"#61bfad"}}>
                        <b className="mr-auto" > Step.{step} </b>
                    </ToastHeader>
                    <Collapse isOpen={status}>
                        <ToastBody>
                            {img?<img width="72%" height="54%" src={img}></img>:null}
                            <br></br>
                            <br></br>
                            <b style={{fontSize:"calc(3px + 1vmin)"}}> {title} </b>
                        </ToastBody>
                    </Collapse>

                </Toast>
            </div>
        )
    }
}

export default ToastStep;