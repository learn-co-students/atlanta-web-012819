//**** Communication with Server****///

//PART 1
//fetch from url
	//render data from fetch
	//create renderAllBooks
	//create renderBook

//PART 2 
//add a book
	//send that data to api via fetch
	//call renderAllBook

//PART 3 DELETE
	//create a delete button
	//attach an event listener
	//on delete
		//remove from view 
		//delete from backend

//PART 4 UPDATE
	//create an edit button
	//attach event listener
	//on edit
		//add edit form onto page 
		//change view
		//update data 

	const book_list = document.querySelector('#book-list')


document.addEventListener("DOMContentLoaded", ()=>{


	document.querySelector('#book-form').addEventListener('submit', handleForm)
	//!!!//
	document.querySelector('#edit-form').addEventListener('submit', handleEditForm)

	renderAllBooks()})
	

function renderAllBooks(){

	fetch('http://localhost:3000/books')
	.then(res => res.json())
	.then(data => data.map(book => renderBook(book.title, book.author, book.img, book.id)))

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

	renderAllBooks()

	e.target.reset()

}

//!!! Note passing ID into card!!!///
function renderBook(title, author, cover, id){

	const div = document.createElement('div')

	div.className = 'card'

	const img = document.createElement('img')

	img.id = "img"

	img.src = cover

	const h3 = document.createElement('h3')

	h3.textContent = title

	h3.id = "title"

	const p = document.createElement('p')

	p.textContent = author 

	p.id = "author"

	const del = document.createElement('button')

	del.textContent = "Delete" 

	del.id = "del-btn"

	del.dataset.id = id

	del.addEventListener('click', handleDeleteBook)

	const edit = document.createElement('button')

	edit.textContent = "Edit"

	edit.dataset.id = id

	edit.addEventListener('click', handleEditBook)
	//add all elements to div

	div.appendChild(img)

	div.appendChild(h3)

	div.appendChild(p)

	div.appendChild(del)

	div.appendChild(edit)

	book_list.appendChild(div)

}

function handleDeleteBook(e){
	//deleting from the view
	e.target.parentNode.remove()

	deleteBook(e.target.dataset.id)

}

function deleteBook(id){

	//deleting from the database 

	fetch(`http://localhost:3000/books/${id}`,
	{

		method:'DELETE'
	}).
	then(res => console.log(res))
}

function handleEditBook(e){
	//passing the book info from card div to the form

	const cardInfo = e.target.parentNode

	const editForm = document.querySelector("#edit-form")

	console.log(cardInfo)
  editForm.elements["title"].value = cardInfo.querySelector('#title').textContent
editForm.elements["author"].value = cardInfo.querySelector('#author').textContent
  editForm.elements["cover"].value = cardInfo.querySelector('#img').src
  editForm.dataset.bookId = cardInfo.querySelector("#del-btn").dataset.id

}

function handleEditForm(e){
	//change view to reflect edits
	//'PATCH' to backend 

	e.preventDefault()

	const bookTitle = e.target.elements["title"].value

	const bookAuthor = e.target.elements["author"].value

	const bookURL = e.target.elements["cover"].value

	newbook ={title: bookTitle,
					author: bookAuthor,
					img: bookURL}

	const id = e.target.dataset.bookId

	console.log("e.taerget", e.target)
	fetch(`http://localhost:3000/books/${id}`,{
		headers:{
			'Content-Type': 'application/json'
		},
		method:'PATCH',
		body: JSON.stringify(newbook)

	})

	e.target.reset()

}























