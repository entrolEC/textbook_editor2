import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import 'assets/sass/Service/NewPage.scss';
import classNames from 'classnames';

export const Title = ({children, subtitle="", MT=false}) => {
    return (
        <div className={classNames('newpage-title', {MT})}>
            <div>
                {children}
            </div>
            <div>
                <div>{subtitle}</div>
            </div>
        </div>
    )
}