import React, {useState} from 'react';
import GolfClubBodyFilterSelectTemplate from "./GolfClubBodyFilterSelectTemplate";

const GolfClubBodyFilterSelectCheckboxies: React.FC = () => {

    return (
        <div className={"selectBlock"}>
            <p className={"selectCategories"}>CATEGORIES</p>
            <GolfClubBodyFilterSelectTemplate title={"PRICE"}>
                <p><input type="checkbox" name={"PRICE"}/>Under $500</p>
                <p><input type="checkbox" name={"PRICE"}/>$500 - $1000</p>
                <p><input type="checkbox" name={"PRICE"}/>$1000 - $1500</p>
                <p><input type="checkbox" name={"PRICE"}/>$1500 - $2000</p>
                <p><input type="checkbox" name={"PRICE"}/>$2000 +</p>
            </GolfClubBodyFilterSelectTemplate>
        </div>
    );
}

export default GolfClubBodyFilterSelectCheckboxies;