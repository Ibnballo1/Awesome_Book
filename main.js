const bookShelf = document.getElementById('book-shelf');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBtn = document.getElementById('submitBtn');
let counter = 0;
let isEmpty = true;

if (isEmpty) {
    const p = document.createElement('p');
    p.innerText = 'Books have not been added.';
    bookShelf.appendChild(p);
    isEmpty = false;
}

class Books {
    constructor(bookTitle, bookAuthor) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
    }
    // Add books
    addBook() {
        let para1 = document.createElement('p');
        let removeBtn = document.createElement('input');
        removeBtn.setAttribute(`type`, `submit`);
        removeBtn.setAttribute(`value`, `Remove`);
        removeBtn.setAttribute(`id`, `rmBtn`);
        removeBtn.classList.add(`divRemoveBtn-${counter + 1}`, `rmBtns`);
        bookShelf.classList.add(`divRemovebtn-${counter + 1}`)
        
        para1.innerText = `"${this.bookTitle}" by ${this.bookAuthor}`;
        console.log(removeBtn);
        return bookShelf.appendChild(para1);  
    }
};

addBtn.addEventListener('click', ()=> {
    const titleInputVal = titleInput.value;
    const authorInputVal = authorInput.value;
    const myBooks = new Books(titleInputVal, authorInputVal);
    if (titleInputVal !== '' && authorInputVal !== '') {
        console.log(myBooks.addBook());
    } else {
        console.log('Add books');
    }
    //console.log(`book title is ${titleInputVal} and the author is ${authorInputVal}`);
});