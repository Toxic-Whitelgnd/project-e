import React,{useState,useEffect} from 'react'
import { Client } from '../../lib/client';
// import "../Blog/BlogPage.css"
import BlogCard from './blogCard';

const BlogPage = () => {
    const [Blogpost,setBlogpost] = useState([]);
    useEffect(()=>{
        Client.fetch(
            `*[_type == "post"] {
                title,
                slug,
                body,
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
            setBlogpost(data);
            console.log(data);
        })
        .catch(console.error);
    },[]);
  return (
    <>
    <div className="container text-center mt-2">
      <h1 className="Heading">Recent posts form our Blog</h1>
      
        {Blogpost[0] && (
          <div className="row">
            {Blogpost.map((story) => (
              <BlogCard
                key={story.slug.current}
                title={story.title}
                img={story.mainImage.asset.url}
                goTo={story.slug.current}
                author={story.name}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default BlogPage;