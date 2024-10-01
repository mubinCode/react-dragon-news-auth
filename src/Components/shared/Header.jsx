import moment from "moment";
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="text-center bg-red-300">
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-xl">Journalism without fear or Favour</p>
           <p className="text-xl">{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;