const myLibrary = [
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        pages: 600,
        read: "Read",
        id: "373c1960-6735-41a8-bae8-53430eaca371"
    },
    {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        pages: 450,
        read: "Read",
        id: "38b4eaa5-6fc4-4dda-9222-4148b9b45bf0"
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        pages: 1000,
        read: "Not read",
        id: "0a96f7aa-b790-4c52-8bbc-be8fbec92d78"
    },
    {
        title: "Pale Fire",
        author: "Vladimir Nabokov",
        pages: 320,
        read: "Not read",
        id: "3af124bd-12df-4a7e-8756-b88cd5db5bcd"
    },
];

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.replaceChildren();
    myLibrary.forEach(book => {
        let newCard = document.createElement("div");
        newCard.innerText = `${book.title}\n${book.author} ${book.pages}pg\n`;
        newCard.setAttribute("class", "card");
        newCard.setAttribute("id", book.id);
        let readButton = document.createElement("button");
        readButton.textContent = `${book.read}`;
        readButton.addEventListener("click", () => {
            if (readButton.textContent == "Read") {
                book.read = "Not read";
                readButton.textContent = `${book.read}`;
            } else {
                book.read = "Read";
                readButton.textContent = `${book.read}`;
            }
        });
        newCard.appendChild(readButton);
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            newCard.remove();
        });
        newCard.appendChild(removeButton);
        cardsContainer.appendChild(newCard);
    })
}
displayBooks();

document.getElementById("add-new-book-button").addEventListener("click", () => {
    addBookToLibrary(document.getElementById("new-book-title").value, document.getElementById("new-book-author").value, document.getElementById("new-book-pages").value, document.getElementById("new-book-pages").value, document.getElementById("new-book-read").value);
    document.getElementById("dialog-form").reset();
    document.getElementById("add-book").hidePopover();
    event.preventDefault();
})