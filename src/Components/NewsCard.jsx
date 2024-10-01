import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { id, title, details, image_url } = news;
  return (
    <div className="card bg-base-100 w-full shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${id}`} className="text-blue-600 font-semibold">read more</Link></p> : <p>{details}</p>
 
        }
        
      </div>
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
    </div>
  );
};

export default NewsCard;
