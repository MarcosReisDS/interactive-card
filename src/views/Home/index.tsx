import { FC } from "react";
import Cards from "../../components/Cards";
import Logo from "../../components/Logo";
import "./style/index.scss"

interface IHome { }
const Home: FC<IHome> = () => {
    return (
        <div className="container">
            <div className="left">
                <Cards />
            </div>
            <div className="right">
                <div className="logo">
                    <Logo />
                </div>
                <div className="container-buttons">
                    <button>
                        busca<br />
                        cartão
                    </button>
                    <button>
                        novo<br />
                        cartão
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home