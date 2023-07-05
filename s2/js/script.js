const addForm = document.querySelector("#addForm")
const users = JSON.parse(localStorage.getItem("users") || "[]")
console.log(users)

const headers = [
    {name: "id", hasDefault: true, default: Date.now()},
    {name: "name", hasDefault: false},
    {name: "age", hasDefault: false},
    {name: "email", hasDefault: false},
    {name: "dateOfBirth", hasDefault: false}
]

addForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const user = {}
    headers.forEach(h=>{
        console.log(h)
        console.log(user)
        if(h.hasDefault) user[h.name]= h.default
        else user[h.name] = addForm[h.name].value
    })
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
})





