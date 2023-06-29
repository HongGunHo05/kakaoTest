import React from "react";
import TestComponent from "../pages/TestComponent";
import {Route, Routes} from "react-router-dom";

const Switcher = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<TestComponent/>}/>
            </Routes>
        </div>

    );
};

export default Switcher;

