import React from 'react';
import './blog.css';
import blogData from "./blog-data.json";


export default function Blog() {
  return (
    <div className="blogContainer">
      <div className="row">
        <div v-for="post of posts" className="post col s6 m6">
          <div className="post-row">
            {/* <router-link class="blog-post" :to="{path: '/blog/post/' + post.url}"> */}
            <div className="card">
              <div className="card-image">
                {/* <img style="height: 300px;" v-bind: src="post.img"> */}
                            {/* <!-- The size of this image moves everything around!!! (may be because of the image used) --> */}
              </div>
              {/* <h3 class="center-align card-title">{{ post.title }}</h3> */}
              <div className="card-content">
                {/* <b>{{post.header}}</b>
                            <p>{{post.content}}<span>.....</span></p> */}
                {/* <v-btn class="button read-more" style="width: 100%; height: 40px; margin-top: 20px;">Read More..</v-btn> */}
              </div>


            </div>
            {/* </router-link> */}
          </div>
        </div>
      </div>
    </div>
  )
}