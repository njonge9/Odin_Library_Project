let myLibrary = [];

function Book() {
  this.title = "";
  this.author = "";
  this.pages = "";
}

function addBookToLibrary() {
  let book = new Book();
  book.title = my_form.title.value;
  book.author = my_form.author.value;
  book.pages = my_form.pages.value;

  myLibrary.push(book);
  document.getElementsByClassName("display").innerHtml = book.title;
  console.log(book.title);
  myLibrary.forEach((books) => {
    for (let key in books) {
      document.getElementsByClassName("display").innerHtml = books[key];
    }
  });
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
