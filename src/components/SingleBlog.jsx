import React from "react";
import { StyledSingleBlog } from "../styles/Stylesheet";

function Blog({ image, link, title, desc, tag, author }) {
  return (
    <StyledSingleBlog>
      <img src={image} alt="Post Thumbnail" className="post-img" />

      <a href={link} target="_blank" className="post-title" rel="noreferrer">
        {title}
      </a>
      <p className="post-desc">{desc}</p>
      <p className="post-tag">{tag}</p>
      <p className="post-author">by: {author}</p>
    </StyledSingleBlog>
  );
}

export default Blog;
