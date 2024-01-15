// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
function measurePromiseAll() {
  const startTime = performance.now();

  Promise.all(apiUrls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
      const endTime = performance.now();
      document.getElementById("output-all").textContent = `${endTime - startTime} ms`;
    })
    .catch(error => {
      console.error("Error with Promise.all:", error);
      document.getElementById("output-all").textContent = "Error";
    });
}

// Function to measure the time taken by Promise.any()
function measurePromiseAny() {
  const startTime = performance.now();

  Promise.any(apiUrls.map(url => fetch(url)))
    .then(response => response.json())
    .then(data => {
      const endTime = performance.now();
      document.getElementById("output-any").textContent = `${endTime - startTime} ms`;
    })
    .catch(error => {
      console.error("Error with Promise.any:", error);
      document.getElementById("output-any").textContent = "Error";
    });
}

// Run the functions to measure performance
measurePromiseAll();
measurePromiseAny();
// You can write your code here
