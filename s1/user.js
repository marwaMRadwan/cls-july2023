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

drawData = (u) => {
    // DataWrap.innerHTML=""
    // allUsers.forEach( u => {
    //     console.log(u)
        DataWrap.innerHTML +=`
        <div class="col-4">
        <div class="bg-success p-3 m-3">
            <h3>${u.FullName}</h3>
            <p>${u.age}</p>
            <p>${u.email}</p>
            <p>${u.phone}</p>
        </div>
    </div>
        `
    
}

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const userData = createUserObj(addForm)
    allUsers.push( userData )
    drawData(userData);
})

