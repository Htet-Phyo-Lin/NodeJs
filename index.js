//ES6



// // Code block အတွင်းကိုကြည့် တစ်ကြိမ်သုံးနဲ့အမြဲသုံး

// var v = "var";
// let l = "let";
// console.log(v,l);
// if(true){
//     var v = "uvar";
//     let l = "ulet";
//     console.log(v,l);
// }
// console.log(v,l);



//function သုံးနည်း

// // Simple function
// function showName(){
//     console.log('this is my name');
// }
// showName();

// // Multiple line
// var showName = ()=>{
//     console.log('show name');
// }

// // Single line
// const showName = (name,age)=> console.log(name,age);
// showName("this is my name",24);



// // This Keywork

// const Person = {
//     name: "name",
//     age: 24,
//     showName(){
//         console.log(this.name);
//     },
//     showAge(){
//         let self = this;
//         console.log(self.age)
//     } 
// };
// Person.showName();
// Person.showAge();



// // rest parameters(most use in react)

// function multi(name, ...num){
//     console.log(name);
//     let total = 1;
//     for (n of num){
//         total*=n;
//     }
//     console.log(total);
// }
// multi("Htet Phyo Lin",1,2,3,4)



// // spread operator

// let fruits = ['apple', 'orange'];
// let fullFruits = [...fruits, 'mango'];
// console.log(fullFruits);

// let personalDetail = {name:"Htet Phyo Lin", age:24};
// let fullID = {...personalDetail, locations:'Magway', phone:09784108936};
// console.log(fullID);



// // object literal

// const person = (name, age)=>{
//     return {
//         // name: name, OR
//         name,
//         // age: age OR
//         age
//     }
// }
// console.log(person('Htet Phyo Lin', 24))

// const person = ()=>{
//     return {
//         showName: function(){
//             console.log('Htet Phyo Linm(Methods in Object)');
//         },
//         showAge: function(){
//             console.log(24);
//         }
//     }
// }
// person().showName();
// person().showAge();

const person = (name)=>{
    let perfix='Name';
    return {
        [perfix+name]:name
    }
}
console.log(person('HPL'))

