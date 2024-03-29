fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(data => {
        displayBooks(data);
    })
    .catch(error => console.error("Errore durante la richiesta", error));

function displayBooks(books) {
    const bookListContainer = document.getElementById("bookList");

    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("col-md-3", "mb-4", "d-flex");

        card.innerHTML = `
        <div class="card" >
            <img src="${book.img}" class="card-img-top" alt="Copertina del libro">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Prezzo: ${book.price} €</p>
                <button class="btn btn-danger" onclick="discardBook(this)">Scarta</button>
            </div>
        </div>
        `;

        bookListContainer.appendChild(card);
    });
}

function discardBook(button) {
    const card = button.closest(".col-md-3");
    card.remove();
}


