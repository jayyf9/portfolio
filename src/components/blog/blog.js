import React from 'react';
import blogData from "./blog-data";
import styles from './blog.module.scss';
import { Link } from "react-router-dom";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      blogDataFiltered: blogData, isBlogPage: false 
     };
  }

  componentDidMount() {
    if(window.location.pathname === "/home") {
      this.setState({  
        isBlogPage: true
      });
    };
  }
  
  searchPosts = (event) => {
    this.setState({
      blogDataFiltered: []
    })
    const blogsMatchingSearch = []; 
    blogData.some(blog => {
      if(blog.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        blogsMatchingSearch.push(blog)
        this.setState({
          blogDataFiltered: blogsMatchingSearch
        })
      }
    });
    if(event.target.value === "") {
      this.setState({
        blogDataFiltered: blogData
      })
    } 
  }
  
  render() {
    const blogs = this.state.blogDataFiltered.map(blog => {
    return (
      <Link className={styles.blog} to={'/blogPost/' + blog.id}>
        <div className={styles.blogInfo}>
          <div className={styles.title}>{blog.title} </div><br/>
          <div className={styles.subTitle}>{blog.subTitle}</div>        
          <div className={styles.blogImageCover}>
            <img className={styles.blogImage} alt="" src={blog.postImage} />
          </div>
        </div>
      </Link>
    )})
  
  return (
    <div className={styles.blogHeader}>
      {/* <div className={styles.search}>Search:<input className={styles.searchInput} onChange={this.searchPosts.bind(this)}></input></div> */}
      <div className={styles.blogContainer}>{blogs}</div>
      {this.state.isBlogPage ?  
      <div class="buttonWrapper">
        <Link className={styles.blog} to={'/blog/'}><button className={styles.viewMoreButton}>View More</button></Link>
      </div>
      : null
      }
      <div class="buttonWrapper">

      </div>
    </div>
  );
  }
};
