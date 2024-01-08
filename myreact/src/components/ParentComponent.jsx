import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const message1ToChild = "Hello1 from Parent!";
    const message2ToChild = "Hello2 from Parent!";

    return (
        <div>
            {/* <h2>Parent Component</h2> */}
            <ChildComponent message1={message1ToChild} message2={message2ToChild}/>
        </div>
    );
};
export default ParentComponent;