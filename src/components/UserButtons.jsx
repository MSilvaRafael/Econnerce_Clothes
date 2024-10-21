import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const UserButtons = () => {
    return (
        <div>
            <button>
                <FontAwesomeIcon className="px-2 text-slate-100 relative" icon={faBagShopping} />
                <div id="cart-amount" className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full top-8 right-14">3</div>
            </button>
            <a href="">
                <FontAwesomeIcon className="px-2 text-slate-100" icon={faUser} />
            </a>
        </div>
    )
};

export default UserButtons;