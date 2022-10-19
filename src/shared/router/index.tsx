import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../views/Home";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Router