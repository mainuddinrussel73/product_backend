import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogDetails.css';

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  const relatedBlogs = blogs.filter(b => b.id !== parseInt(id)).slice(0, 3);

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div className="blog-details-page">
      <div className="blog-content-section">
        <article className="blog-details">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-meta">
            <span className="blog-author">By {blog.author}</span> | <span className="blog-date">{blog.date}</span>
          </div>
          <div className="blog-image-container">
            <img src={blog.image} alt={blog.title} className="blog-image" />
          </div>
          <p className="blog-description">{blog.description}</p>
          <p className="blog-content">{blog.content}</p>
        </article>

        <div className="social-share">
          <h4>Share This Post:</h4>
          <div className="share-buttons">
            <button className="facebook-btn">Facebook</button>
            <button className="twitter-btn">Twitter</button>
            <button className="linkedin-btn">LinkedIn</button>
          </div>
        </div>
      </div>

      <aside className="related-blogs">
        <h3>Related Posts</h3>
        <ul>
          {relatedBlogs.map((relatedBlog) => (
            <><li key={relatedBlog.id}>
                  <img src={relatedBlog.image} alt={relatedBlog.title} className="related-blog-image" />
                  <div className="related-blog-info">
                      <h4>{relatedBlog.title}</h4>
                      <p>{relatedBlog.description}</p>
                  </div>
              </li><hr/></>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default BlogDetails;
