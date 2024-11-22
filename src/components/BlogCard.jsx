import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, description, imageUrl, author, date, readTime }) => {
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img 
          src={imageUrl} 
          alt={title} 
          className="blog-image"
        />
      </div>
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        
        <div className="blog-metadata">
          <span className="blog-author">{author}</span>
          <span className="blog-dot">•</span>
          <span className="blog-date">{date}</span>
          <span className="blog-dot">•</span>
          <span className="blog-read-time">{readTime} min read</span>
        </div>

        <p className="blog-description">{description}</p>
        
        <button className="blog-read-more">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard; 