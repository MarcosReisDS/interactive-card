import { FC } from "react";
import Cards from "../../components/Cards";
import Logo from "../../components/Logo";
import "./style/index.scss"

interface ISearch { }
const Search: FC<ISearch> = () => {
    return (
        <div className="container-search">
            <div className="left">
                <Cards />
            </div>
            <div className="right">
                <div className="logo">
                    <Logo />
                </div>
                <div className="container-buttons">
                    <div className="name">
                        <label>nome do titular</label>
                        <input type="text" />
                    </div>
                    <div className="number-card">
                        <label>Número do cartão</label>
                        <input type="number" />
                    </div>
                    <div className="separete-box">
                        <div className="date">
                            <label>data de expiração</label>
                            <div className="box-date">
                                <input type="date" />
                                <input type="date" />
                            </div>
                        </div>
                        <div className="cvc">
                            <label>CVC</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="env">
                        <button>buscar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search