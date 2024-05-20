var posts=["2024/05/03/Hexo-Obsidian：解决图片无法显示问题/","2024/05/19/hello-world/","2024/05/02/记录我搭建个人博客的全过程-使用-hexo-Obsidian-GithubPages-NexT/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };