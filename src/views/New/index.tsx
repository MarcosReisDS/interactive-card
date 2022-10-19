import { FC } from "react";
import Cards from "../../components/Cards";
import Logo from "../../components/Logo";
import "./style/index.scss"

interface INew { }
const New: FC<INew> = () => {
    return (
        <div className="container-new">
            <div className="left">
                <Cards />
            </div>
            <div className="right">
                <div className="logo">
                    <Logo />
                </div>
                <div className="container-button">
                    <div className="name">
                        <label>nome do titular</label>
                        <input type="text" />
                    </div>
                    <div className="env">
                        <button>gerar cartão</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New