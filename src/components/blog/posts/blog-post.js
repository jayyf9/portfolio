import React from 'react';
import './Home.css';

export default {
  data() {
    return {
      posts: [
        {
          id: 0,
          img: "./src/images/blog-posts/cms/cms2.jpg",
          title: 'Should a developer be using a CMS?',
          header: 'First of all, what is a CMS?',
          content: 'Content management system’s are software application that runs on the web-server and allows a user to easily manage the content of their website. This uses an interface and does not require any programming knowledge to do. This makes it perfect for people who want to have a site that they can keep updated without having to learn to programme or pay a developer to update it for them.',
          date: '13th September 2018'
        }
      ]
    }
  }

}

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});
function BlogPost() {
  return (
    <div class="col s12 m12">
      Testttt
    {/* <i>{{ posts[$route.params.id].date }}</i>
      <h3>{{ posts[$route.params.id].title }}</h3>
      <h5>{{ posts[$route.params.id].header }}</h5>
      <p>{{ posts[$route.params.id].content }}</p>
      <p>{{ posts[$route.params.id].htmlContent }}</p>
      <img class="responsive-img materialboxed" v-bind: src="posts[$route.params.id].img"> */}
    </div>
  )
};

export default BlogPost;
