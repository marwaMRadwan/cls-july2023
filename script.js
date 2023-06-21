// let const var

// console.log(x)

// var x = 5;

// while(x==5){
//     let z = 6
//     x++
// }

// console.log(z)
// const h = 14

// h=7
// h+=8

//loops
// do while   - while  - for - for in  - foreach  - for of

// let i =0 ;
// while(i<=10){
//     // console.log("i % 3 ", i%3)
//     i++
//     if( i % 3 == 0 ) continue
//     else console.log(i)  // 1  2  3  4  5  6 7 8 9 10  11
// }

// console.log("i after loop ", i)

// for(let i =1 ; i<=10; i+=2){
//     if( i % 3 == 0 ) continue
//     console.log(i) 
// }

// let i =15
// do{
//     console.log(i)
// }while(i<10)

// let choice = +prompt("enter your choice")
// switch(choice){
//     case 1: console.log(1); break
//     case 2: console.log(2); break
//     default: console.log("default")
// }









// function f1(){
//     console.log("f1");
// }
// const f2 = function(){
//     console.log("f2");
// }
// const f3 = () =>{
//     console.log('f3')
// }
// console.log(x);
// x = 5

// let x = 5

// function a(){
//     console.log("a");
// }

// var z = 3

// y= 6

// const a2 = function(){
//     console.log(this);
// }
// const a3 = () => {
//     console.log('a3');
// }

// z = 3
// y = 6
// a (){}
// x=5
// a2=(){}

// const obj = {
//     name:"marwa",
//     job: "developer",
//     printer: function(){
//         console.log(this)
//     }
// }

// obj.printer()

// for(a in obj){
//     console.log(a)
// }

// const a = [12,15, "hello", true]

// for (x of a){
//     console.log(x)
// }

// for(let i = 0; i<a.length; i++) console.log(a[i]);

// const data = [
//     {
//     userId: 1,
//     id: 1,
//     title: "quidem molestiae enim"
//     },
//     {
//     userId: 1,
//     id: 2,
//     title: "sunt qui excepturi placeat culpa"
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "omnis laborum odio"
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "non esse culpa molestiae omnis sed optio"
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "eaque aut omnis a"
//     },
//     {
//     userId: 1,
//     id: 6,
//     title: "natus impedit quibusdam illo est"
//     },
//     {
//     userId: 1,
//     id: 7,
//     title: "quibusdam autem aliquid et et quia"
//     },
//     {
//     userId: 1,
//     id: 8,
//     title: "qui fuga est a eum"
//     },
//     {
//     userId: 1,
//     id: 9,
//     title: "saepe unde necessitatibus rem"
//     },
//     {
//     userId: 1,
//     id: 10,
//     title: "distinctio laborum qui"
//     }
//     ]
// data.forEach( item =>  {
//     console.log(item)
//     // console.log(index)
//     // console.log(arr)
// })
const users = []
const inputFromUser = msg => prompt(msg)
const getUsersCount = () => +inputFromUser("please enter users count")

const getUsersData = ()=>{
    const userCount = getUsersCount()
    for(let i =0 ; i<userCount; i++){
        users.push({
            name: inputFromUser("enter emp name"),
            age: +inputFromUser("enter user age")
        })
    }
}

getUsersData()
console.log(users)





















































