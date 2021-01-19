import { useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem ipsum...', author: 'Ram', id: 1},
        { title: 'My new website', body: 'Lorem ipsum...', author: 'RaghuramReddy', id: 2},
        { title: 'My new website', body: 'Lorem ipsum...', author: 'Raghuram', id: 3},
    ])

    return ( 
        <div className="home">
            <BlogList blogs = {blogs}/>
        </div>
     );
}
 
export default Home;