import React from 'react';
import blogData from "./blog-data";
import styles from './blog.module.scss';
import { Link } from "react-router-dom";

export default function Blog() {
  const blogs = blogData.map(blog => {
  return (
      <Link className={styles.blog} to={'/blog/post/0'}>
        <div className={styles.blogImage}>
          <img alt="" src={blog.img} />
        </div>
        <h3 className={styles.blogTitle}>{blog.title}</h3>
        <div className={styles.blogContent}>
            <b>{blog.header}</b>
            <p>{blog.content}<span>.....</span></p>
            <button className={styles.readMore}>Read More..</button>
        </div>
      </Link>
  )})
  
  return (
    <div className={styles.portfolioContainer}>{blogs}</div>
  );
};
