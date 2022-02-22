import React from 'react';

const ServiceTitle = ({children}) => {
    return (
        <div style={{fontSize:'24px', fontWeight: 'bold', color: '#ACACAC'}}>
            {children}
        </div>
    )
}

export default ServiceTitle;