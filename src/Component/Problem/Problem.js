import React from "react";

const Problem = ({ title, content, answer, img }) => {
    return(
        <div>
            <div>{title}</div>
            <div>{content}</div>
            <div>{answer}</div>
            {
                img != null
                ? <img src={img} alt="Problem Image" />
                : null
            }
        </div>
    );
};

export default Problem;