import React, {useEffect, useState} from 'react';
import GolfClubHeaderButton from "./GolfClubHeaderButton";

const GolfClubHeaderMainInput: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <div className={"headerInputBlock"}>
            {/*<form>*/}
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5172 7.75862C13.5172 10.939 10.939 13.5172 7.75862 13.5172C4.57822 13.5172 2 10.939 2 7.75862C2 4.57822 4.57822 2 7.75862 2C10.939 2 13.5172 4.57822 13.5172 7.75862ZM12.4922 13.9064C11.1823 14.9165 9.54063 15.5172 7.75862 15.5172C3.47365 15.5172 0 12.0436 0 7.75862C0 3.47365 3.47365 0 7.75862 0C12.0436 0 15.5172 3.47365 15.5172 7.75862C15.5172 9.54063 14.9165 11.1823 13.9064 12.4922L18.0864 16.6722C18.4769 17.0627 18.4769 17.6959 18.0864 18.0864C17.6959 18.4769 17.0627 18.4769 16.6722 18.0864L12.4922 13.9064Z" fill="#262525"/>
            </svg>

            <input type="text" className={"headerInput"} placeholder={"Amet minim mollit "} onChange={(e) => setValue(e.target.value)}/>
                <GolfClubHeaderButton value={value}>Search</GolfClubHeaderButton>
            {/*</form>*/}
        </div>
    )
}

export default GolfClubHeaderMainInput;