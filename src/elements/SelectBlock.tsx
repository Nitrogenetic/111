import React, {useState} from 'react';
import Select from "./Select";

function SelectBlock() {

    return (
        <div className={"selectBlock"}>
            <p className={"selectCategories"}>CATEGORIES</p>
            <Select title={"PRICE"}>
                <p><input type="checkbox" name={"PRICE"}/>Under $500</p>
                <p><input type="checkbox" name={"PRICE"}/>$500 - $1000</p>
                <p><input type="checkbox" name={"PRICE"}/>$1000 - $1500</p>
                <p><input type="checkbox" name={"PRICE"}/>$1500 - $2000</p>
                <p><input type="checkbox" name={"PRICE"}/>$2000 +</p>
            </Select>
        </div>
    );
}

export default SelectBlock;