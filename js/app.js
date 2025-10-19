async function fetchPosts() {
  /*fetch data from jsonPlaceHolder*/
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return data;
}



/*Using array methods*/
/*Print the first 5 names of the meals in alphabetical order*/
function firstFive (posts) {
  return posts.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 5);
}

function main() {
  const posts = fetchPosts();
  const firstFive = firstFive(posts);
  console.log(firstFive);
}
