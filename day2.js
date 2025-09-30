// const printMessage = (msg)=>{
//     console.log(msg);
// }
// const bookTicket = ()=>{
//     printMessage("Welcome!");
//     setTimeout(()=>{
//         printMessage("Login Sucessfully");
//         setTimeout(()=>{
//             printMessage("seat has been selected sucessfully");
//             setTimeout(()=>{
//                 printMessage("yor seat has been booked");
//                 setTimeout(()=>{
//                     printMessage("Payment has been done");
//                     setTimeout(()=>{
//                         printMessage("Ticket has been confirmed");
//                         printMessage("Thankyou");
//                     },3000)
//                 },4000)
//             },3000)
//         },2000)
//     },3000)
// }


// const printMessage =(msg)=>{
//     console.log(msg);
// }
// const wait = (msg,sec)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//         printMessage(msg);
//         resolve();
//     },sec);
//     });
// }
// const bookTicket=()=>{
//     printMessage("Welcome");
//     wait("Login Sucessfully",3000)
//     .then(()=>wait("seat has been selected sucessfully",2000))
//     .then(()=>wait("your seat has been booked",3000))
//     .then(()=>wait("your seat has been booked",4000))
//     .then(()=>wait("Ticket has been confirmed",3000))
//     .then(()=>printMessage("Thankyou"))
// }

const arr = [1,2,3,4,5];

// map
const mapArr = arr.map((ele)=>ele*4);
console.log(mapArr);

// REDUCE
const sum =arr.reduce((acc,ele)=>acc+=ele, 0);
console.log(sum);

// filter
const filterData = arr.filter((ele)=>ele %4===0);
console.log(filterData);

const data=[
    {
        productID: 1,
        productName: "A",
        price: 200,
        color:"red"
    },
    {
        
        productID: 2,
        productName: "B",
        price: 700,
        color:"blue"
    },
    {
        productID: 3,
        productName: "3",
        price: 400,
        color:"black"
    } 
]
const mapData=data.map((ele)=>ele.productName);
console.log(mapData);

const filteredData = data.filter((ele) => ele.price < 600);

console.log(filteredData);