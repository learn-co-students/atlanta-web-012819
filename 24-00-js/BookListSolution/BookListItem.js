class BookListItem{


	 constructor(options){

        this.title = options.title
        this.author = options.author
        this.image = options.img
        this.element = document.createElement('div')
    }

    render(){
    	this.element.innerHTML = ''
        this.element.className = 'card'

        const img = document.createElement('img')

        img.src = this.image 

        const h3 = document.createElement('h3')

        h3.textContent = this.title

        const p = document.createElement('p')

        p.textContent = this.author

        //add all elements to this.element

        this.element.appendChild(img)

        this.element.appendChild(h3)

        this.element.appendChild(p)
        
        return this.element

    }

}

const book1 = new BookListItem(books[1])



const booklist = document.querySelector('#book-list')

booklist.append(book1.render())



















