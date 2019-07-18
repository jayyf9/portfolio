import React from 'react';
import blogData from "./blog-data";
import styles from './blog.module.scss';
import { Link } from "react-router-dom";

export default function Blog() {
  const blogs = blogData.map(blog => {
  return (
      <Link className={styles.blog} to={'/blogPost/' + blog.id}>
        <div className={styles.blogImageCover}>
          <img className={styles.blogImage} alt="" src={blog.img} />
        </div>
        <h3 className={styles.blogTitle}>{blog.title}</h3>
        <div className={styles.blogSummary}>
            <h3>{blog.tagLine}</h3>
            <p>{blog.summary}<span>.....</span></p>
        </div>
        <div className={styles.date}>{blog.date}</div>        
        <div className={styles.readMore}>Read More..</div>
      </Link>
  )})
  
  return (
    <div className={styles.blogContainer}>{blogs}</div>
  );
};
