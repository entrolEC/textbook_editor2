import React from 'react';
import '../assets/css/TabMenu.css';

class TabMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeButton: 1
        }
    }

    handleClick = (id) => {
        this.setState({
            activeButton: id
        })
    }

    render() {
        const { navItem } = this.props
        const { activeButton } = this.state
        return (
            <nav className="tab-menu">
                {navItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <button onClick={() => {
                                item.onClick(item.id)
                                this.handleClick(item.id)
                            }}
                            className={activeButton===item.id ? "active-tab-item" : ""}
                            >
                                {item.text}
                            </button>
                        </li>
                    )
                })}
            </nav>
        )
    }
}

export default TabMenu;