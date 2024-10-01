import { toast, ToastContainer } from "react-toastify";
import BreakingNews from "./shared/BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();

    const toasting = () =>{
        toast("wertyuiopvhvghg v cycyc")
    }
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold">This is home page</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-blue-300"><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 bg-green-300">News comming soon.... {news.length}
                    {
                        news.map(n => <NewsCard key={n.id} news={n}></NewsCard>)
                    }
                </div>
                <div className="bg-orange-300"><RightSideNav></RightSideNav></div>
            </div>
            <button onClick={toasting}>toast</button>
            <ToastContainer/>
        </div>
    );
};

export default Home;