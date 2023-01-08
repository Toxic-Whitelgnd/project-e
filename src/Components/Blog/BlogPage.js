import React,{useState,useEffect} from 'react'
import { Client } from '../../lib/client';
import "../Blog/BlogPage.css"


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
    <div>BlogPage
        <div>
            <h3>This is blog page</h3>

        </div>
    </div>
  )
}

export default BlogPage;