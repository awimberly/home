import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Blogs</h1>
      {bloglist.map((value) => (
        <BlogCard
          key={value.slug}
          title={value.title}
          description={value.description}
          slug={value.slug}
        />
      ))}
    </div>
  );
};

const BlogCard = ({ slug, title, description }) => {
  return (
    <div className="m-5">
      <div className="row">
        <div className="col-4 col-lg-12">
          {/* Optional: insert image or thumbnail here */}
        </div>
        <div className="col-8 col-lg-12">
          <div>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
            <Link to={`/blog/${slug}`}>Read more...</Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
export { BlogBuilder };
