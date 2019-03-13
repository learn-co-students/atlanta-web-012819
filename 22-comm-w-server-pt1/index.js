//**** Communication with Server****///

//PART 1
//fetch from url
	//render data from fetch
	//create renderAllBooks
	//create renderBook

//PART 2 
//add a book
	//send that data to api via fetch
	//call renderbook

	const book_list = document.querySelector('#book-list')


document.addEventListener("DOMContentLoaded", ()=>{


	document.querySelector('form').addEventListener('submit', handleForm)

	renderAllBooks()})
	

function renderAllBooks(){

	fetch('http://localhost:3000/books')
	.then(res => res.json())
	.then(data => data.map(book => renderBook(book.title, book.author, book.img)))

}
function handleForm(e){

	e.preventDefault()

	const bookTitle = e.target.elements["title"].value

	const bookAuthor = e.target.elements["author"].value

	const bookURL = e.target.elements["cover"].value
	
	const newbook ={title: bookTitle,
					author: bookAuthor,
					img: bookURL}

	renderBook(bookTitle, bookAuthor, bookURL)

	fetch('http://localhost:3000/books',{
		headers:{
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(newbook)
		
	})
	.then(res => console.log(res))

	e.target.reset()

}


function renderBook(title, author, cover){

	const div = document.createElement('div')

	div.className = 'card'

	const img = document.createElement('img')

	img.src = cover

	const h3 = document.createElement('h3')

	h3.textContent = title

	const p = document.createElement('p')

	p.textContent = author 

	//add all elements to div

	div.appendChild(img)

	div.appendChild(h3)

	div.appendChild(p)

	book_list.appendChild(div)

}



























