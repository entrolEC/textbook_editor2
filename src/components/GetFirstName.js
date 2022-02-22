import React from "react"

class GetFirstName extends React.Component{
    render(){
        return(
            <div>
                {this.props.from_first_name}
            </div>
        )
    }
}

export default GetFirstName;