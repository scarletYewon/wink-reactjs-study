import React from "react";
import './Header.css';
import Problem from "../Problem/Problem";

const Header= ({ num, title, getData }) => {
    const numMinus = () => {
        getData(num - 1);
    };

    const numPlus = () => {
        getData(num + 1);
    }
    return (
        <div className="header">
            <div>
                <button onClick={numMinus}>⇽</button>
                {num + 1}
                <button onClick={numPlus}>⇾</button>
            </div>
            <div>
                {title}
            </div>
        </div>
    );
};

export default Header;