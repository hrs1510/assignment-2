// async function fetchPosts() {
//   // Fetch data from jsonPlaceHolder
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json(); // parsing the response to json format
//   return data;
// }

// Print the first 5 post titles in alphabetical order
// function firstFive(posts) {
//   const firstFivePosts = posts.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 5); //first we sorted all posts alphabetically by title, then we took the first 5 posts by .slice() method.
//   firstFivePosts.forEach(post => console.log(post.title)); //print each title of the first five posts
// }
//
// //Print all posts that contain a same userID
// function groupPostsByUserId(posts) {
//   const userId = 3; // here we are filtering posts for userId 3
//   const filteredPosts = posts.filter(post => post.userId === userId).map(post => ({
//     userId: post.userId,
//     body: post.body
//   })); // first we filtered posts by userId, this gives us an array of posts with userId 3, then we mapped over that array to create a new array of objects containing only userId and body properties.
//   console.log(filteredPosts);
// }

//Create a Javascript object that contains how many times a post of each userId appears
// function countPostsByUserId(posts) {
//   const groupedPosts = posts.reduce((obj, post) => { // we are using reduce method to create an object that counts posts by userId
//     if (!obj[post.userId]) { //
//       obj[post.userId] = 0
//     }
//     obj[post.userId] += 1; // increment the count for that userId
//     return obj;
//   }, {});
//   return console.log(groupedPosts);
// }

//Stretch goals (VG)
//Group by userId
// function groupById(posts, userId) {
//   const grouped = posts.reduce((result, post) => {
//     const groupKey = post[userId]; // get the value of the specified userId property to group by
//     if (!result[groupKey]) { //
//       result[groupKey] = [];
//     }
//     result[groupKey].push(post); // add the post to the appropriate group by userId
//     return result;
//   }, {});
//   console.log(grouped);
// }

//Select and Reshape data
// function selectAndReshape(posts) {
//   const reShapedPosts = posts.map(post => ({
//     userId: post.userId,
//     postId: post.id,
//     title: post.title.toUpperCase(), // converting title to uppercase
//   }))
//   return console.log(reShapedPosts);
// }

//Frequency map
async function fetchData() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  const meals = data.meals;  // this shows array of meal objects
  // console.log(meals);
  const freqMap = {}; // empty object to store ingredients and their frequencies as key value pairs

  meals.forEach(meal => {
    for (let i = 1; i <= meals.length; i++) {
      const ingredient = meal[`strIngredient${i}`]; // it takes each ingredient property dynamically
      if (ingredient && ingredient.trim()) {
        freqMap[ingredient] = (freqMap[ingredient] || 0) + 1; // increment count if ingredient already exists, else initialize to 1
      }
    }
  });

console.log(freqMap);
}

fetchData(); // calling the function to execute



// //executing all functions
// async function main() {
//   const posts = await fetchPosts();
//   // firstFive(posts);
//   // groupPostsByUserId(posts);
//   // countPostsByUserId(posts);
//   // groupById(posts, 'userId');
//   // selectAndReshape(posts);
//
// }
//
// main();
