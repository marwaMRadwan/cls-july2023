// let myName : string = "Marwa Radwan"
// let myHead = document.createElement("h3")
// myHead.innerText = myName
// document.body.appendChild(myHead)
// let x:number = 100, y:string="hello", stat:boolean=false
// let b:number = 0b1100, o:number = 0o10, h:number=0XA5F
// let num : bigint = 5656554854515454878n
// let fName:string = "Marwa"
// let lName:string = `Radwan`
// let userName = `Eng. ${fName} ${lName}`
// let s : boolean=true
// s=false
// let user : object
// user = {
//     fName:"marwa",
//     lName:"Radwan",
//     age: 38
// }
// let emp : {
//     fName:string,
//     lName:string,
//     age:number
// }
// emp={
//     fName:"sa",
//     lName:"GJ",
//     age:9876
// }
// let data : string[]= []
//tuple
// let t : [string, number] = ["hassan", 25]
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function ifSummer(month) {
    var result;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            result = true;
            break;
        default:
            result = false;
            break;
    }
    return result;
}
ifSummer(Month.Jul);
