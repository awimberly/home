import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Blogs</h1>
      {bloglist.map((value, index) => (
        <BlogCard
          key={index}
          title={value.title}
          description={value.description}
          index={index}
        />
      ))}
    </div>
  );
};

const BlogCard = ({ index, title, description }) => {
  return (
    <div className="m-5">
      <div className="row">
        <div className="col-4 col-lg-12">
          {/* <img src={image} className="card-img" alt="..." /> */}
        </div>
        <div className="col-8 col-lg-12">
          <div>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
            <Link to={`${process.env.PUBLIC_URL}/blog/${index}`}>
              Read more...
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

// ✅ Default export for main Blog component
export default Blog;

// ✅ Named export if you still use BlogBuilder elsewhere
export { BlogBuilder };
