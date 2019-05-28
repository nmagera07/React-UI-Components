import React from 'react';
import './Header.css';

const HeaderTitle = () => {
   let moment = require('moment');
    
    return (
        
        <div className="title">
            <h1>Lambda School</h1>
            <h2>@LambdaSchool {moment().format("MMM Do YY")}</h2>
        </div>
    )
}

export default HeaderTitle