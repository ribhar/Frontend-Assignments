type user = {
    id: number;
    name: string;
    age: number;
    salary: number;
}

let arr: user[]= [
    {
      id: 3,
      name: "Aakash",
      age: 77,
       salary: 200000,
    },
   
    {
        id: 2,
        name: "Parth Bisht",
        age: 20,
        salary: 300000,
    },
    {
        id: 1,
        name: "Ritik Bhardwaj",
        age: 21,
        salary: 200000,
    },
   
    {
        id: 4,
        name: "Muskan Shaw",
        age: 20,
        salary: 205000,
    },
]

const mysort = (arr: user[],by: keyof user): user[] =>{
    
    for(let i=0;i<arr.length;i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j][by]>arr[j+1][by]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    
}
return arr;
}

console.log(mysort(arr,"id"))



////////////////////////////////
// type UserInfo = {
//     id: number;
//     name: string;
//     age: number;
//     salary: number;
//   };
  
//   const user: UserInfo[] = [
//     { id: 1, name: "Arpit", age: 20, salary: 500000 },
//     { id: 2, name: "Ankur", age: 25, salary: 1000000 },
//     { id: 3, name: "Shubham", age: 19, salary: 10000 },
//     { id: 4, name: "Ranveer", age: 30, salary: 2000000 },
//     { id: 5, name: "Manan", age: 40, salary: 5000000 },
//     { id: 6, name: "Akshay", age: 29, salary: 200000 },
//     { id: 7, name: "Ajay", age: 30, salary: 100000 },
//     { id: 8, name: "Deepak", age: 27, salary: 600000 },
//   ];
//   console.table(user);
  
//   // using inbuild .sort method
  
//   // const sort = (user: UserInfo[]) =>
//   //   user.sort((userA: UserInfo, userB: UserInfo) => {
//   //     return userA.age - userB.age;
//   //   });
//   // const sortedAge = sort(user);
//   // console.table(sortedAge);
  
//   // using own custom sort method: [Bubble Sort]
  
//   // function bubbleSort(arr, para) {
//   //   var swapped;
//   //   do {
//   //     swapped = false;
  
//   //     for (var i = 0; i < arr.length - 1; i++) {
//   //       if (arr[i][para] > arr[i + 1][para]) {
//   //         var temp = arr[i];
  
//   //         arr[i] = arr[i + 1];
//   //         arr[i + 1] = temp;
  
//   //         swapped = true;
//   //       }
//   //     }
//   //   } while (swapped);
//   //   console.table(arr);
//   // }
  
//   // bubbleSort(user, "age");
  
//   //--------------------------------------------------------------------------
  
//   // Advanced (optional)
  
//   type TeacherInfo = {
//     subject: string;
//     numberOfStudents: number;
//   }
//   const Teacher: TeacherInfo[] | UserInfo[] = [
//     {
//       id: 1,
//       name: "Ajay",
//       age: 26,
//       subject: "English",
//       numberOfStudents: 40,
//       salary: 20000,
//     },
//     {
//       id: 2,
//       name: "Lokesh",
//       age: 30,
//       subject: "Hindi",
//       numberOfStudents: 20,
//       salary: 10000,
//     },
//     {
//       id: 3,
//       name: "Kavita",
//       age: 22,
//       subject: "Biology",
//       numberOfStudents: 60,
//       salary: 50000,
//     },
//     {
//       id: 4,
//       name: "Saloni",
//       age: 45,
//       subject: "Physics",
//       numberOfStudents: 40,
//       salary: 30000,
//     },
//     {
//       id: 4,
//       name: "Sanjay",
//       age: 55,
//       subject: "Computer Science",
//       numberOfStudents: 50,
//       salary: 35000,
//     },
//   ];
//   console.table(Teacher);
  
//   // using own custom sort method: [Bubble Sort]
  
//   function sort(arr, para) {
//     var swapped;
//     do {
//       swapped = false;
  
//       for (var i = 0; i < arr.length - 1; i++) {
//         if (arr[i][para] > arr[i + 1][para]) {
//           var temp = arr[i];
  
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
  
//           swapped = true;
//         }
//       }
//     } while (swapped);
//     console.table(arr);
//   }
  
//   sort(Teacher, "age");
//   // or change
//   // sort(user, "age");