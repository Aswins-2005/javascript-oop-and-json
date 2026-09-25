// //Task 13.1: User Management System (Using Classes)

// //1. Create a Class
 
// class User{
//     constructor(UserName,Mobilenum,Age){
//         this.UserName = UserName;
//         this.Mobilenum = Mobilenum;
//         this.Age = Age
//     }

//     //2. Create Class Methods
   
//     //Method 1: getUserDetails()

//     getUserDetails(){
//         return `UserName : ${this.UserName}
// Mobilenum : ${this.Mobilenum}
// Age : ${this.Age}`

//     }

//     //Method 2: isAdult()

//     isAdult(){
//         if(this.Age >=18){
//             return true 
//         }
//         else{
//            return false
//         }
//     }


// }

// //3. Create User Objects

// const Alice = new User("Alice","676767676",21);
// console.log(Alice);




// const Bob = new User("Bob","878787878",54);
// console.log(Bob);
// const Charlie = new User("Charlie","58585858" ,13)
// console.log(Charlie);

// //4. Store Users in an Array

// const Allusers =[Alice,Bob,Charlie];
// console.log(Allusers);

// //5. Display User Details

// Allusers.forEach((user) => {
//     console.log(user.getUserDetails());
//     console.log("Adult : " , user.isAdult());
    

    
// })

//Task 13.2: Working with JSON Data

//Step 1: Create JSON Data

const json =`[
 { "username": "Alice", "mobileNum": "9876543210", "age": 25 },
 { "username": "Bob", "mobileNum": "9123456780", "age": 30 },
 { "username": "Charlie", "mobileNum": "9001122334", "age": 17 }
]`
console.log(json);

//Step 2: Convert JSON to JavaScript Object

const user = JSON.parse(json)
console.log(user);

//Step 3: Display the Data

user.forEach((we =>{
    console.log(`${we.username} - ${we.mobileNum} - ${we.age}`);
    
}))

//Step 4: Convert Object Back to JSON

const jsonOutput = JSON.stringify(user)
console.log(jsonOutput);
