const myLibrary = [
    {
        title: "Test1",
        author: "Test1",
        pages: 123,
        read: "Read",
        id: "373c1960-6735-41a8-bae8-53430eaca371"
    },
    {
        title: "Test2",
        author: "Test2",
        pages: 321,
        read: "Not read",
        id: "38b4eaa5-6fc4-4dda-9222-4148b9b45bf0"
    },
    {
        title: "Test3",
        author: "Test3",
        pages: 456,
        read: "Not read",
        id: "0a96f7aa-b790-4c52-8bbc-be8fbec92d78"
    },
    {
        title: "Test4",
        author: "Test4",
        pages: 654,
        read: "Read",
        id: "3af124bd-12df-4a7e-8756-b88cd5db5bcd"
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const cardsContainer = document.querySelector("cards-container");
    myLibrary.forEach(book => {
        let newCard = document.createElement("div");
        newCard.innerText = `${this.title}\n${this.author} ${this.pages}`;
        newCard.setAttribute("class", "card");
        newCard.setAttribute("id", this.id);
    })
}