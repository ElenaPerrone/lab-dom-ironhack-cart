class Person {
    constructor(firstName,lastName){

        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(firstName, lastName){
        // let $p = document.querySelectorAll('p')[0]
        // $p.innerHTML =  `Hello my name is ${this.firstName} ${this.lastName}!`
        
        console.log('Hello ' + this.firstName + ' ' + this.lastName + '!');
    }
    
}
// let person1 = new Person('James', 'Bond');
// let person2 = new Person('Darth', 'Vader')
// let person3 = new Person('Tony', 'Stark')
// person1.sayHello()
// person2.sayHello()
// person3.sayHello()

 class Student extends Person {
     constructor(firstName, lastName, course) {
         super(firstName, lastName)
         this.course = course

     }
     sayCourse() {
        // let $pTwo = document.querySelectorAll('p')[1]
        // $p.innerHTML =  `Hi I am following this course: ${this.course}`
      console.log(`Hi I am following this course: ${this.course}`)
     }
 }

// let Student1 = new Student('Elena', 'Perrone', 'WDFT')

// Student1.sayHello()
// Student1.sayCourse()

class Teachers extends Person {
    constructor(firstName, lastName, courseT) {
        super(firstName, lastName)

        this.courseT = courseT
    }

    teachCourse() {
        console.log(`Hi I am teaching this course: ${this.course}`)
    }  
    
}

let Teacher1 = ('Jurgen', 'Tonneyck', 'Web Dev')
let teacher2 = ('Monika', 'Swidzinska', 'Web Dev')
let teacher3 = ('Joel', 'Verayk', 'Web Dev')





// teacher1.sayHello()
Teacher1.teachCourse()
// teacher2.sayHello()
// teacher2.teachCourse()
// teacher3.sayHello()
// teacher3.teachCourse()