async function fetchPosts() {
  // Fetch data from jsonPlaceHolder
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json(); // parsing the response to json format
  return data;
}

// Print the first 5 post titles in alphabetical order
function firstFive(posts) {
  const firstFivePosts = posts.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 5); //first we sorted all posts alphabetically by title, then we took the first 5 posts by .slice() method.
  firstFivePosts.forEach(post => console.log(post.title)); //print each title of the first five posts
}

//Print all posts that contain a same userID
function groupPostsByUserId(posts) {
  const userId = 3; // here we are filtering posts for userId 3
  const filteredPosts = posts.filter(post => post.userId === userId).map(post => ({ userId: post.userId, body: post.body })); // first we filtered posts by userId, this gives us an array of posts with userId 3, then we mapped over that array to create a new array of objects containing only userId and body properties.
  console.log(filteredPosts);
}

//Create a Javascript object that contains how many times a post of each userId appears
function countPostsByUserId(posts) {
  const groupedPosts = posts.reduce((obj, post) => { // we are using reduce method to create an object that counts posts by userId
    if (!obj[post.userId]) { //
      obj[post.userId] = 0
    }
    obj[post.userId] += 1; // increment the count for that userId
    return obj;
  }, {});
  return console.log(groupedPosts);
}

//executing all functions
async function main() {
  const posts = await fetchPosts();
  firstFive(posts);
  groupPostsByUserId(posts);
  countPostsByUserId(posts);

}

main();
