import { FC } from "react";
import { FaRegCopyright } from "react-icons/fa"
import "./style/index.scss"

interface ICards { }
const Cards: FC<ICards> = () => {
    return (
        <div className="container-cards">
            <div className="card">
                <div className="header-card">
                    <span>BANK</span>
                    <span>xx/xx</span>
                </div>
                <div className="number-card">
                    <span>xxxx xxxx xxxx xxxx</span>
                </div>
                <div className="footer-card">
                    <span>xxxx xxxx</span>
                    <span>FIKY</span>
                </div>
            </div>
            <div className="card-verse">
                <div className="tarja" />
                <div className="footer-card">
                    <FaRegCopyright size={30} />
                    <div>
                        <span>xxx</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards