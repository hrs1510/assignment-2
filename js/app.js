async function fetchPosts() {
  // Fetch data from jsonPlaceHolder
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

// Print the first 5 post titles in alphabetical order
function firstFive(posts) {
  const firstFivePosts = posts.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 5);
  firstFivePosts.forEach(post => console.log(post.title));
}

//Print all posts that contain a same userID
function groupPostsByUserId(posts) {
  const userId = 3;
  const filteredPosts = posts.filter(post => post.userId === userId).map(post => ({ userId: post.userId, body: post.body }));
  console.log(filteredPosts);
}


//executing all functions
async function main() {
  const posts = await fetchPosts();
  firstFive(posts);
  groupPostsByUserId(posts);

}

main();
