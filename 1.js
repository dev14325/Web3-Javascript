const users = [
    {
        name : "Dev",
        age : 20 ,
        gender : "male"
    }
    ,
    {
        name : "Shanaya" ,
        age : 22,
        gender : "Female"
    },

    {
        name : "Raman",
        age : 26,
        gender : "male"
    }
]

// function call(users){
//     for(let i = 0;i<users.length ; i++){
//         if(users[i].age>18 && users[i].gender=="male"){
//             console.log(users[i]);
//         }
//         console.log()

//     }
    
    
// }

// call(users);

let user = users.filter((val)=>val.age>18 && val.gender=="male");
console.log(user);