import React from 'react';
import blogData from "./blog-data";
import styles from './blog.module.scss';
import { Link } from "react-router-dom";

export default function Blog() {
  const blogs = blogData.map(blog => {
  return (
      <Link className={styles.blog} to={'/blogPost/' + blog.id}>
        <div className={styles.blogInfo}>
          <div className={styles.headers}>
            <div className={styles.title}>{blog.title} </div>
            <div className={styles.tagLine}>{blog.tagLine}</div>
          </div>
          <div className={styles.blogImageCover}>
            <img className={styles.blogImage} alt="" src={blog.img} />
          </div>
        </div>
        <div className={styles.date}>{blog.date}</div>        
        <div className={styles.readMoreButton}>
          <div className={styles.readMoreText}>Read More..</div>
        </div>
      </Link>
  )})
  
  return (
    <div className={styles.blogContainer}>{blogs}</div>
  );
};
