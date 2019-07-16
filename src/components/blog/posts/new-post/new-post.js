import React from 'react';
import blogData from "./../../blog-data";
import styles from './new-post.module.scss';


export default function newPost({match}) {
  return (
    <div className={styles.post}>
        <i className={styles.date}>{blogData[1].date}</i>
        <h3 className={styles.title}>{blogData[1].title}</h3>
        <h5 className={styles.tagLine}>{blogData[1].tagLine}</h5>
        <img className={styles.responsiveImg} alt="" src={blogData[1].img} />
    </div>
  )};
