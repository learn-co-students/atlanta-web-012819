

class Rectangle{

	constructor(width, height){
		this.width = width
		this.height = height
		this.element = document.createElement('div')
		this.element.addEventListener('click', ()=>{

			console.log(`This is the width! ${this.width}`)
		})

	}

	area(){

		return this.width * this.height
	}

	render(){
		this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        this.element.style.borderStyle = 'solid'
        return this.element

	}

	static largestOf(rectangles){
        let largest = rectangles[0]
        rectangles.forEach( rectangle => {
            if(largest.area() < rectangle.area()){
                largest = rectangle
            }
        })
        return largest
    }

}































