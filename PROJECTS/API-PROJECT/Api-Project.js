// GET https://www.googleapis.com/books/v1/volumes?q=quilting

let searchButton = document.getElementById("SearchBtn");
searchButton.addEventListener("click", fetchBooks);

let allBooks = document.getElementById("allBooks");

let content = "";

// // Step 1 - Read user input
// function fetchBooks() {
//   let bookTitle = document.getElementById("SearchBar").value;

//   // Step 2 - Create the request
//   let myRequest = new XMLHttpRequest(); //ReadyState = 0
//   myRequest.open(
//     "GET",
//     `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
//   ); //ReadyState = 1

//   // Step 3 - Send the request and recived response
//   myRequest.send(); //ReadyState = 2

//   // Server processing, ReadyState = 3
//   // After response, ReadyState = 4
//   myRequest.onreadystatechange = () => {
//     if (myRequest.readyState === 4 && myRequest.status === 200) {

// Step 4 - Convert response to JS object
//       let convertedBooks = JSON.parse(myRequest.response);

// Step 5 - Display on the front end
//       let newBook = convertedBooks.items
//         .map(
//           (book) =>
//             `<div class="book">
//               <img src=${book.volumeInfo.imageLinks.thumbnail}/>
//             <h1>${book.volumeInfo.title}</h1>
//             <p>${book.volumeInfo.description}</p>
//           </div>`
//         )
//         .join("");

//       content += newBook;
//     }
//     allBooks.innerHTML = content;
//   };

// }

// Trying with Fetch()
async function fetchBooks() {
  let bookTitle = document.getElementById("SearchBar").value;

  let response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
  );

  let convertedBooks = await response.json();
  let newBook = convertedBooks.items
    .map(
      (book) =>
        `<div class="book">
            <img src=${book.volumeInfo.imageLinks.thumbnail}/>
          <h1>${book.volumeInfo.title}</h1>
          <h3>Author:  <i>${book.volumeInfo.authors}</i></h3>
          <p>${book.volumeInfo.description}</p>
        </div>`
    )
    .join("");

  content += newBook;

  allBooks.innerHTML = content;
  document.getElementById("SearchBar").value = "";
  content = "";
}
