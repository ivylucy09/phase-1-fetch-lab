
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      console.log("Fetched books:", json);
      renderBooks(json); // Call renderBooks with the fetched books
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  console.log("Rendered books:", books);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
