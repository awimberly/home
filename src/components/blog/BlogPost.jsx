import React from "react";
import { Link } from "react-router-dom";
import bloglist from "../../editable-stuff/blog";

const Blog = () => {
  return (
    <div className="container-lg mt-5">
      <h1 className="display-4 text-center mb-5">Blog</h1>
      <div className="row">
        {bloglist.map((post, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              {post.image && (
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                {post.excerpt && <p className="card-text">{post.excerpt}</p>}
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-auto btn btn-primary"
                >
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
