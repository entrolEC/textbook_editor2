import React from "react";
import CanvasDraw from "react-canvas-draw";
import { GithubPicker } from 'react-color';
import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

//brush color list
const color = ['#000000','#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB']

class Canvas extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayColorPicker: false,
            brushColor: "black",
            brushRadius: 1
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.isOpen !== prevProps.isOpen) {
            if(this.props.isOpen){
                setTimeout(()=>{
                    var canvasModal = document.getElementById("canvas-modal");
                    canvasModal.firstChild.style.width="100%"
                    canvasModal.firstChild.style.height="100%"
                },10)
            }


            this.setState({
                brushColor: "black",
                brushRadius: 1
            })
        }
    }


    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    }

    handleChangeColor = (color) => {
        this.setState({ brushColor: color.hex })
    }

    handleChangeBrushRadius = (e) => {
        const { value } = e.target
        let selectedBrushRadius = parseInt(value)
        this.setState({ brushRadius: selectedBrushRadius })
    }

    render(){
        const { isOpen, toggle } = this.props
        const { brushColor, brushRadius } = this.state
        return(
            <React.Fragment>
                <Modal className="modal-background-transparent" isOpen={isOpen} backdrop={false} toggle={toggle} fade={false}>
                    <ModalHeader toggle={toggle}>
                        <Row>
                            <Col>
                                <GithubPicker 
                                onChangeComplete={this.handleChangeColor}
                                colors={color}
                                width="250px"
                                height="50px"
                                />
                            </Col>
                            <Col>
                                <Input type="select" onChange={this.handleChangeBrushRadius}>
                                    {/* need to set default value */}
                                    <option value="1">1px</option>
                                    <option value="5">5px</option>
                                    <option value="10">10px</option>
                                </Input>
                            </Col>
                            <Col>
                                <Button size="lg" onClick={() => {this.saveableCanvas.clear()}} color="dark">Clear</Button> 
                            </Col>
                        </Row>          
                    </ModalHeader>
                    <ModalBody id="canvas-modal">
                        <CanvasDraw
                            ref={canvasDraw => {(this.saveableCanvas = canvasDraw)}}
                            hideGrid={true}
                            catenaryColor={brushColor}
                            brushColor={brushColor}
                            brushRadius={brushRadius}
                            lazyRadius={0}
                            backgroundColor= "rgba(0,0,0,0.1)"
                        />
                    </ModalBody>
                </Modal> 
            </React.Fragment>
        )
    }
}

export default Canvas