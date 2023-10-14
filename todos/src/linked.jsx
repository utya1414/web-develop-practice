import Linkify from "linkify-react";

const convertLinkedDescription = (description) => {

    const regexp_url = /https?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+/g;

    const addBlank = (descripition) => {
        return " " + descripition + " ";
    }
    //後ろの日本語をurl含まないようにする
    const blankedDescription = description.replace(regexp_url, addBlank);
    //linkify
    return(
        <>
            <Linkify>{blankedDescription}</Linkify> 
        </>
    );
}

export default convertLinkedDescription;