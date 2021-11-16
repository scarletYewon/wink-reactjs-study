import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    return (
        <div>
            <input type="text" onChange={onChange} />
            <div>
                <b>정답 : </b>
                {text}
            </div>
        </div>
    );
};


export default InputSample;
