
//2. Build a Rectangle class 

//constructor
	//properties: width & height
	//method: area()

//static method called largestOf()
	//takes in array of rectangles
	//finds the largest area 
	//returns that rectangle

// static largestOf(rectangles){
//         let largest = rectangles[0]
//         rectangles.forEach( rectangle => {
//             if(largest.area() < rectangle.area()){
//                 largest = rectangle
//             }
//         })
//         return largest
//     }

//implement render() method
	//create a new element as a property
	//class Rectangle {
//     constructor(height, width){
//         this.height = height
//         this.width = width
//         this.element = document.createElement('div')
		// this.element.addEventListener('click', function(){
  //           console.log(`I am ${this.height}x${this.width}`)
  //       })
//     }

//     area(){
//         return this.height * this.width
//     }

//     render(){
//         this.element.style.height = `${this.height}px`
//         this.element.style.width = `${this.width}px`
//         this.element.style.borderStyle = 'solid'
//         return this.element
//     }

//     ...
// }

//Arrow Functions --> 
//Arrow functions are functions which effectively forfeit their right to a proper this- instead, this inside of an arrow function will be the exact same as this where the arrow function is defined. This is why arrow functions are extremely useful for defining callback functions.

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


let myRectangle = new Rectangle(400,300)

myRectangle.render()

document.body.append(myRectangle.element)





























