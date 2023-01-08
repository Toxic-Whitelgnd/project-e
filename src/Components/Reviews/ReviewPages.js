import React,{useState,useEffect} from 'react'
import { Client } from '../../lib/client';
import ReviewCard from './reviewcard'; 

const ReviewPages = () => {
    const [revposts,setRevposts] = useState([]);
    useEffect(()=>{
        Client.fetch(
            `*[_type == "postReview"] {
                title,
                slug,
                body,
                rating,
                publishedAt,
                mainImage {
                  asset -> {
                    _id,
                    url
                  },
                  alt,
                },
                "name": author -> name,
              } | order(publishedAt desc)`
        ).then((data)=>{
            setRevposts(data);
            console.log(data);
        })
        .catch(console.error);
    },[]);
    return (
        <div className="container text-center mt-2">
      <h1 className="Heading">Recent Reviews</h1>
      
        {revposts[0] && (
          <div className="row">
            {revposts.map((story) => (
              <ReviewCard
                key={story.slug.current}
                title={story.title}
                img={story.mainImage.asset.url}
                goTo={story.slug.current}
                author={story.name}
                rating = {story.rating}
              />
            ))}
          </div>
        )}
      </div>
    );
}

export default ReviewPages;
