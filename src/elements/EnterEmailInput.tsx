import React, {useEffect, useState} from 'react';
import {useSiteMetadata} from "@hooks";
import {FooterProps} from "@elements";
import EnterEmailButton from "../elements/EnterEmailButton";

function EnterEmailInput() {
    const [value, setValue] = useState('');

    return (
        <div className={"enterEmail"}>
            <p className={"enterEmailInputDescription"}>Enter you email here:</p>
            {/*<form>*/}
            <input type="text" className={"enterEmailInput"} onChange={(e) => setValue(e.target.value)}/>
            <EnterEmailButton value={value}>SUBSCRIBE</EnterEmailButton>
            {/*</form>*/}
        </div>
    )
}

export default EnterEmailInput;