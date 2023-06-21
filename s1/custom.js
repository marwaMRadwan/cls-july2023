// const addForm = document.getElementById("addData")
const addForm = document.querySelector("#addData")
const heads = ["FullName", "phone", "email", "age"]
const allUsers = []
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(addForm.elements.FullName.value)
    // const data = {
        // FullName:addForm.elements.FullName.value,
        // email : addForm.elements.email.value,
        // phone : addForm.elements.phone.value,
        // age : addForm.elements.age.value,
    // }
    const data = { id: Date.now() }
    heads.forEach( head => data[head]= addForm[head].value )
    console.log(data)
    allUsers.push(data)
})