//Promise All


// Promise.all([Promise.resolve('Hello'),Promise.resolve('Hi'),Promise.resolve('whatsup')]).
// then((msg)=>console.log(msg)).
// catch((err)=>console.log(err));


//promise Any

   Promise.any([Promise.reject('Hello'),Promise.reject('Hi'),Promise.reject('whatsup')]).
   then((msg)=>console.log(msg)).
   catch((err)=>console.log(err.message))
   


//

// let data1=new Promise((resolve,reject)=>{
//    setTimeout(resolve,5000,'Iam a professor');
// })
// let data2=50;
// let data3=Promise.resolve('Its okay');

// // Promise.all([data1,data2,data3]).
// // then((msg)=>console.log(msg)).
// // catch((err)=>console.log(err))

// Promise.any([data1,data2,data3]).
// then((msg)=>console.log(msg));



/*
Note:
 Please don't forget these three properties while using try-catch() or especially the catch() method.
   error.name
   error.message
   error.stack

*/




     
    



