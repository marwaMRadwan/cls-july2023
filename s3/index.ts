//control flow if else switch for while do while continue break
// const userAge : number= 38
// if(userAge>21){
//     console.log("You are an adult")
// }

// if(true){

// }
// else if(false){

// }
// else{

// }

// switch(userAge){
//     case 1: console.log("test");break;
//     default: console.log("test 2")
// }

/*
blue print => variables, functions => type of data
model of data

human, animals, gamad, birds


*/

// let h = "marwa"
// let a = "sheep"

// function talk(user){
//     console.log("ay klma")
// }

// talk(a)

// constructor function
// function Human (name, age, email){
//     this.name=name
//     this.age=age
//     this.email = email
// }

// let marwa = new Human("marwa radwan", 38, "marwa@techs.com")

// class Human {
//     private name: string // public private protected
//     private age: number
//     private email: string

//     constructor(name, age, email){
//         this.name =name
//         this.age = age
//         this.email = email
//     }
//geters seters

//     get userName(){
//         return this.name.toUpperCase()
//     }

//     set userName(val){
//         this.name = val
//     }

//     getUserData() {
//         console.log(`name : ${this.name} - age: ${this.age} - email: ${this.email}`)
//     }
// }

// let marwa = new Human("marwa radwan", 38, "marwa@techs.com")
// marwa.getUserData()
// console.log(marwa.userName)
// marwa.userName = "vghdesh"


// class Employee{
//     private _name: string
//     private _age:number
//     private _salary : number
//     readonly compny: string = "techs"

//     get name() { return this._name }
//     get age() { return this._age }
//     get salary() { return this._salary }

//     set name(val: string){
//         if( val.length < 3 || val.length >20 ) 
//             throw new Error ( "invalid name")
//         this._name = val
//     }
//     set age(val: number){
//         if( val < 21 || val> 60) 
//             throw new Error ( "invalid age")
//         this._age = val
//     }
//     set salary(val: number){
//         if( val < 3000 || val> 30000) 
//             throw new Error ( "invalid salary")
//         this._salary = val
//     }

//     getEmpData():void{
//         console.log(`${this._name} - ${this._age} - ${this._salary}`)
//     }
// }
// let user = new Employee()
// try{

//     user.name = "ahmed"
//     user.salary =2000
//     user.getEmpData()
// }
// catch(e){
//     console.log(e.message)
// }


















