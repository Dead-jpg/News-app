import { useEffect, useState } from "react"; 
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles)); 
  }, [category]);
  return(
     <div>
       <h2 className="text-center">Latest <span className="badge bg-danger my-4">News</span></h2>
    {
     
      articles.map((news, index) => {
        return (
          <div key={index} className="d-inline-block my-3 mx-3 px-2 py-2x">
            <Newsitem
              key={index} title={news.title }description={news.description} src={news.urlToImage}  url={news.url}  />
          </div>
        )
      })
    }
    </div>
  )

};
export default NewsBoard;
