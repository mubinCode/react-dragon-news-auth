import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import flower1 from '../../assets/flower1.jpeg'
import flower2 from '../../assets/flower2.jpeg'
import flower3 from '../../assets/flower3.jpg'
import flower4 from '../../assets/flower4.jpg'
import '../shared/css/RightSideNav.css'

const RightSideNav = () => {
    return (
        <div className="space-y-3">
            <div className="p-4 space-y-3 bg-amber-300 rounded-lg">
                <h2 className="text-3xl">Login with</h2>
                
                <button className="btn btn-outline w-full"><FaGoogle />Google</button>
                <button className="btn btn-outline w-full"><FaGithub />Github</button>
            </div>
            <div className="p-4 bg-lime-300 rounded-lg">
                <h2 className="text-3xl mb-2">Find us on</h2>
                <a className="flex items-center p-4 border rounded-t-lg" href=""><FaFacebook className="mr-3" />Facebook</a>
                <a className="flex items-center p-4 border-x " href=""><FaTwitter className="mr-3" />Twitter</a>
                <a className="flex items-center p-4 border rounded-b-lg" href=""><FaInstagram className="mr-3" />Instagram</a>
            </div>
            <div className="p-4 bg-sky-300 rounded-lg sizePhoto">
                <h2 className="text-3xl mb-2">Q zone</h2>
                <img className="rounded-lg mb-1" src={flower4} alt="" />
                <img className="rounded-lg mb-1" src={flower3} alt="" />
                <img className="rounded-lg mb-1" src={flower2} alt="" />
                <img className="rounded-lg mb-1" src={flower1} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;