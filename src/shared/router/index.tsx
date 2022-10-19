import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../views/Home";
import New from "../../views/New";
import Search from "../../views/Search";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/busca" element={<Search />} />
            <Route path="/novo" element={<New />} />
        </Routes>
    )
}

export default Router