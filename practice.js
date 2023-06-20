//callback hell
// setTimeout(()=>{
//    console.log('why are you living in this world');
//    setTimeout(()=>{
//      console.log('Iam a good programmer');
//      setTimeout(()=>{
//         console.log('we are people of same organization');
//      },2000)
//    },3000)
// },5000)
 
//

function setTimeDuration(time){
    return new Promise((resolve,reject)=>{
         setTimeout(resolve,time,`What a wonderful day it is ${time}`);
    })
}

setTimeDuration(2000).
then((msg)=>{
    console.log(msg);
    return `our living has no meaning`;
}).then((msg)=>{
    console.log(msg);
    return setTimeDuration(5000);
}).then((msg)=>{
    console.log(msg);
})

console.log('Hi! marthanda varma');
console.log('Hi! marthanda varma who killed you');
console.log('Do you have any sense plese tell me marthanda varma');
console.log('Do you have any sense plese tell me marthanda varma');
console.log('Do you have any sense plese tell me marthanda varma');
console.log('Do you have any sense plese tell me marthanda varma');
console.log('Do you have any sense plese tell me marthanda varma');
console.log('Do you have any sense plese tell me marthanda varma');
console.log('Do you have any sense plese tell me marthanda varma');


