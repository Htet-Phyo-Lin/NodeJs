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

const Person = {
    name: "name",
    age: 24,
    showName(){
        console.log(this.name);
    },
    showAge(){
        let self = this;
    }
    
};

Person.showName();
Person.showAge();

