import React from 'react';
import blogData from "./../../blog-data";
import defaultStyles from './../blog-post.module.scss';
import styles from './new-post.module.scss';


export default function newPost({match}) {
  return (
    <div className={defaultStyles.post}>
        <i className={defaultStyles.date}>{blogData[1].date}</i>
        <h3 className={defaultStyles.title}>{blogData[1].title}</h3>
        <h5 className={defaultStyles.tagLine}>{blogData[1].tagLine}</h5>
        <img className={styles.responsiveImg} alt="" src={blogData[1].img} />
    </div>
  )};
