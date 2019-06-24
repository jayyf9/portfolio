<template src="./post-cms.html"></template>
<script>
  export default {
    data(){
      return {
        posts: {
            id: 0,
            img: "./src/images/blog-posts/cms/cms2.jpg",
            title: 'Should a developer be using a CMS?',
            header: 'First of all, what is a CMS?',
            content: '',
            date: '13th September 2018'
          }        
      } 
    }

  }

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });
</script>
