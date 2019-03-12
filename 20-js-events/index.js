//take in information from form

//on submit button clicked 
	//add new book object to the array
	//render new book on the page 


const book_list = document.querySelector('#book-list')

books.map(book =>{

	const div = document.createElement('div')

	div.className = 'card'

	const img = document.createElement('img')

	img.src = book.img

	const h3 = document.createElement('h3')

	h3.textContent = book.title

	const p = document.createElement('p')

	p.textContent = book.author

	//add all elements to div

	div.appendChild(img)

	div.appendChild(h3)

	div.appendChild(p)

	book_list.appendChild(div)
})


document.addEventListener("DOMContentLoaded", ()=>{

	document.querySelector('form').addEventListener('submit', handleForm)
})


function handleForm(e){

	e.preventDefault()

	//console.log("it works! here is the event:", event.target)

	console.log(e.target.elements)

	const bookTitle = e.target.elements["title"].value

	const bookAuthor = e.target.elements["author"].value

	const bookURL = e.target.elements["cover"].value

	const newbook ={title: bookTitle,
					author: bookAuthor,
					URL: bookURL}


	books.push(newbook)

	const div = document.createElement('div')

	div.className = 'card'

	const img = document.createElement('img')

	img.src = books[books.length-1].img

	const h3 = document.createElement('h3')

	h3.textContent = books[books.length-1].title

	const p = document.createElement('p')

	p.textContent = books[books.length-1].author 

	//add all elements to div

	div.appendChild(img)

	div.appendChild(h3)

	div.appendChild(p)

	book_list.appendChild(div)

	e.target.reset()
}

























