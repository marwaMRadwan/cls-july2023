const heads = ["FullName", "phone", "email", "age"]

const allUsers = []

const addForm = document.querySelector("#addData")

const DataWrap = document.querySelector("#DataWrap")

const createUserObj = (addForm) => {
    const data = { id: Date.now() }
    heads.forEach( head => data[head]= addForm[head].value )
    return data
}

const printUserObj = (user) => {
    const printData = `id : ${user.id} `
    heads.forEach(h=> printData+= `- ${h} :  ${user[h]}`)
    console.log(printData)
}

const createMyOwnElement = (parent, ele, classes , txt) =>{
    const myEle= document.createElement(ele)
    if(classes) myEle.classList = classes
    if(txt) myEle.innerText = txt
    parent.appendChild(myEle)
    return myEle
}
drawData = (allUsers) => {
    DataWrap.innerHTML=""
    allUsers.forEach( u => {
        const div= createMyOwnElement(DataWrap, "div", "col-4", null)
        const innerDiv = createMyOwnElement(div, "div", "bg-success p-3 m-3", null)
        heads.forEach(h=> createMyOwnElement(innerDiv, "p", null, u[h]) )
    })    
}
// drawData = (u) => {
    // DataWrap.innerHTML=""
    // allUsers.forEach( u => {
    //     console.log(u)
        // DataWrap.innerHTML +=`<div class="col-4"><div class="bg-success p-3 m-3">`
        // heads.forEach(h=> DataWrap.innerHTML +=`<p>${u[h]}</p>`)
        // DataWrap.innerHTML +=`</div></div>`
//     DataWrap.innerHTML=""
//     allUsers.forEach( u => {
//         const div= document.createElement("div")
//         div.classList = "col-4"
//         DataWrap.appendChild(div)
//         const innerDiv = document.createElement("div")
//         innerDiv.classList="bg-success p-3 m-3"
//         div.appendChild(innerDiv)
//         heads.forEach(h=> {
//             let data = document.createElement("p")
//             data.innerText = u[h]
//             innerDiv.appendChild(data)
//         })
//     })    
// }

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const userData = createUserObj(addForm)
    allUsers.push( userData )
    drawData(allUsers);
    addForm.reset();
})

