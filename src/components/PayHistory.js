import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import '../assets/sass/Payhistory.scss';

const Payhistory = ({children, payName="비고", payType="결제"}) => {

    const parseStatusPays = (status) => {
        if(status === "PA") {
            return "결제"
        } else if(status === "FR"){
            return "환불"
        } else if(status === "CA") {
            return "취소"
        } else {
            return "환불"
        }
    }

    return (
        <div className={classNames('service-pay-history')}>
            <div>
                <div>{parseStatusPays(payName)}</div>
                <div>{payType}</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Payhistory;