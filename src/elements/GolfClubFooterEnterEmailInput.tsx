import React, {useEffect, useState} from 'react';
import GolfClubFooterEnterEmailButton from "./GolfClubFooterEnterEmailButton";

const GolfClubFooterEnterEmailInput: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <div className={"enterEmail"}>
            <p className={"enterEmailInputDescription"}>Enter you email here:</p>
            {/*<form>*/}
            <input type="text" className={"enterEmailInput"} onChange={(e) => setValue(e.target.value)}/>
            <GolfClubFooterEnterEmailButton value={value}>SUBSCRIBE</GolfClubFooterEnterEmailButton>
            {/*</form>*/}
        </div>
    )
}

export default GolfClubFooterEnterEmailInput;