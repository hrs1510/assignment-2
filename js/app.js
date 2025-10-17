async function fetchPosts() {
  /*fetch data from jsonPlaceHolder*/
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  // console.log(data);
  /* print the first 5 posts in alphabetical order*/
  const firstFivePosts = data.sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 5) //for first 5 posts
    .map(post => post.title);

  console.log(firstFivePosts);
}

fetchPosts();

