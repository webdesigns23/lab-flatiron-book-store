const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}


// Write your code here!

//MANIPULATING EXISTING ELEMENTS:
//1. select id of 'header'
const bookStoreTitle = document.querySelector("#header");

//2. change element to match bookstore name
bookStoreTitle.textContent = bookStore.name;

//BOOK ELEMENTS-Loop through every book element in bookStore object:
bookStore.books.forEach(books => {
    //1.Create elements for each book
    const bookContainer = document.createElement('li')
    const bookTitle = document.createElement('h3')
    const bookAuthor = document.createElement('p')
    const bookImage = document.createElement('img')

    //2.Change the textContent of each element to match book object
    bookTitle.textContent = books.title
    bookAuthor.textContent = books.author
    //*image needs to be src= "link" (hence .src)
    bookImage.src = books.imageUrl

    //3. Append book elements to bookContainer
    bookContainer.append(bookTitle, bookAuthor, bookImage)

    //4. Append bookContainer element to bookList element
    const bookList = document.querySelector("#book-list")
    bookList.append(bookContainer)
    
})

    
 

    
   

    //3.Append book elements to bookList 
