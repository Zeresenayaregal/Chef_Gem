import Chef from "../images/Chef.png"
import "../index.css"

export default function Header(){
    return (
        <header>
            <div className="img-content">
                <img src={Chef} alt="The Chef logo" />
            </div>
            <div className="head-text">
                <span>Chef Claude</span>
            </div>
        </header>
    )
}