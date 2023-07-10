// class Human{
//     protected _name: string
//     protected _age: number
//     protected _email: string
//     constructor(name, age, email){
//         this._name=name
//         this._age=age
//         this._email=email
//     }
//     getHumanData(){
//         console.log("from Human")
//     }
// }
// class Student extends Human{
//     static count = 0
//     private _subjects : string[]
//     constructor(name, age, email, subjects=[]){
//         super(name, age, email)
//         this._subjects = subjects
//         Student.count++
//     }

//     get name(){ return this._name}
//     set name(val){ this._name = val}
//     getHumanData(){
//         super.getHumanData()
//         console.log("from student")
//     }
//     static getCounter(){
//         return Student.count
//     }
// }
// class Teacher extends Human{
//     private _salary: number
//     constructor(name, age, email, salary){
//         super(name, age, email)
//         this._salary = salary
//     }
// }

// const s1 = new Student("marwa", 38, "marwa@techsexperts.com")
// s1.getHumanData()

// console.log(Student.count)
// Student.getCounter()




// abstract 
// abstract class X{
//     abstract data(): void

//     test(){
//         console.log("ay test")
//     }
// }

// class Y extends X{
//  data(): void {
     
//  }
// }   


//interfaces
// let user = {
//     name:"marwa",
//     age:38,
//     martialStatus: "Married",
//     email: "marwa@techsexperts.com"
// }

// interface UserData{
//     name: string
//     age:number
//     gender: boolean
//     email?: string
// }

// let user :UserData ={
//     name: "mazen",
//     age:40,
//     gender: false
// }

// interface Data{
//     (str: string, str2: string): string
// }

// let fun: Data = function(str:string, s:string){
//     return `${str} ${s}` 
// }









// abstract class Myclass{
//     abstract userData(): void
//     abstract getData(): string
// }

// class X extends Myclass{
//     userData(): void {
        
//     }
//     getData(): string {
//         return ""
//     }
// }

// interface Myclass2 {
//     name: string
//     age:number
//     email?:string
// }

// let x :Myclass2 = {
//     name:"", age:20
// }
// interface v{
//     n:string
// }
// class Z extends Myclass implements Myclass2, v{
//     name: string
//     age: number
//     email:string
//     n:string
//     getData(): string {
//         return ""    
//     }
//     userData(): void {
        
//     }
// } 

// interface CompanyData { id: number, address: string }
// interface ContactInfo { phone: string, email: string }
// interface EmpData { id:number, name: string, age:number }

// type Emp = EmpData & ContactInfo

// const d : Emp = {
//     id: 5,
//     name:"bhdgb",
//     age: 35,
//     phone:"",
//     email:""
// }


/*
student => name, age, email, id , grades , add grades , get name, get total grades
teacher => name, age, email, id, salary, set data , get name
person => name, age , email, id , constr
*/

interface Grade { 
    subj: string
    degree: number
}
abstract class Person{
    name:string
    age:number
    id:number
    email: string
    constructor(name, age, id, email){
        this.id=id
        this.name=name
        this.age=age
        this.email=email
    }
    abstract getName()
}
class Teacher extends Person{
    salary: number
    constructor(name,age, id, email, salary){
        super(name,age, id,email)
        this.salary=salary
    }
    getName() {
        
    }
}
class Student extends Person{
    grades : Grade[]
}








