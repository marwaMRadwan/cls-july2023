// let z = 5
// setTimeout(()=> z=10, 1000)
// console.log(z)
// console.log(2)
// setTimeout(()=> console.log(z), 1500)

//promises
// const myPromise = (val) => { 
//     return new Promise(
//         (resolve, reject)=> {
//             setTimeout(()=>{
//                 if(val>=5) resolve("number greater than 5")
//                 else reject("less than 5")
//             }), 1500
//         }
//     )
// }

// myPromise(4).then((res)=> console.log(res)).catch(e=> console.log(e))

// fetch('https://dummyjson.com/products')
// .then(res=> {
//     res.json().then( data=> console.log(data) )
// })
// .catch(e=> console.log(e))


// async function readApi (){
//     try{
//         res = await fetch('https://dummyjson.com/products')
//         data = await res.json()
//         console.log(data)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// readApi()

//call back
// arr = [1,2,3,4]

// arr.forEach(element => {
    
// });

// x = (cb) => {
//     (()=> {
//         let z = 5
//         // console.log("test")
//         cb(z)
//     })()
// }

// x ( data => console.log(data) )

const myArrayMethods = (myArray) => {
    return {
        myArray,
        myForEach: (ahmed)=>{
            for(let i = 0; i<myArray.length; i+=x)
                ahmed(myArray[i], i, myArray)
        }
    }
}
data= [
    {name:"a", age:30},
    {name:"b", age:20},
    {name:"c", age:35},
    {name:"d", age:25},
]

users = myArrayMethods(data)
users.myForEach(user=>{
    console.log(user.age)
})
// const arr = myArrayMethods([1,2,3,4,5])
// arr.myForEach((el, ind)=> console.log(el, ind))
// emps = myArrayMethods([
//     {name:"a", job:"it", salary:2000},
//     {name:"b", job:"developer", salary:3000},
//     {name:"c", job:"it", salary:2500},
//     {name:"d", job:"sales", salary:2300},
// ])
// emps.myForEach(emp=>{
//     console.log(emp.name)
// })

// const a = ( x , y ) => {
//     return {
//         x,
//         y,
//         add: () => { console.log(x+y) },
//         mul: () => console.log(x*y),
//         div: () => console.log(x/y)
//     }
// }

// const myVal = a(5,3)
// console.log(myVal)
// myVal.mul()
// a(5,3).mul()
// a(5,3).add()

// myVal.mul()
// myVal.add()














