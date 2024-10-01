import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="m-2">
            <h2 className="text-2xl">Left Side : {categories.length}</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className="flex py-2 px-4 border mb-1" key={category.id}>{category.category}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;