import { useLoaderData } from "react-router-dom";
import NewsCart from "../Components/NewsCart";


const CategoryNews = () => {
    const {data:news} = useLoaderData();
    console.log(news);
    return (
        <div>
           <h2 className="font-semibold text-xl">Dragon News Home</h2>
           <div>
            {
                news.map(singleNews=> 
                <NewsCart key={singleNews._id} news={singleNews}>
                    
                </NewsCart>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;