document.getElementById('get').addEventListener('click',()=>{
    fetch('http://localhost:3000/api/v1/movies').
    then(res=>res.json()).
    then((val)=>{
        let {data}=val;
        let {movies}=data;
        console.log(movies);
        let str='';
        for(let i=0;i<movies.length;i++){
                  str=str+'movie id ='+movies[i].id+'<br>'+'movie name='+movies[i].name+'<br>'+'releaseYear='+movies[i].releaseYear+'<br>'+'duration='+movies[i].duration+'<br>'+'----------'+'<br>';
           }
         document.getElementById('get6').innerHTML=str;      
    })    
})
//---------------------------------------------------------------------------------
document.getElementById('post').addEventListener('click',()=>{
      let val=document.querySelectorAll('.post');
      console.log(val);
        let moviesInfo=[];
       val.forEach((val)=>{
            moviesInfo.push(val.value);
       })
       console.log(moviesInfo);
       fetch('http://localhost:3000/api/v1/movies',{
         method:"POST",
         body:JSON.stringify({
            name:moviesInfo[0],
            releaseYear:Number(moviesInfo[1]),
            duration:Number(moviesInfo[2])
         }),
          headers:{
            'content-type':'application/json'
          }
       }).then(res=>res.json()).
          then(({status})=>{
             document.getElementById('sta').innerText=status;
          })
       
})
//--------------------------------------------------------------------------------------
 document.getElementById('patch').addEventListener('click',()=>{
      let id=Number(document.getElementById('patch-1').value);
       let patchVal=[];
       let patchId=Number(document.getElementById('patch-id').value);
            patchVal.push(patchId);
       let movieName=document.getElementById('patch-movie-name').value;
            patchVal.push(movieName);
       let releaseYear=Number(document.getElementById('patch-Release-Year').value);
            patchVal.push(releaseYear);
       let duration=Number(document.getElementById('patch-duration').value);
             patchVal.push(duration);
       console.log(patchVal);
       let bodyy={};
        if(patchVal[0]!=0){
           bodyy.id=patchId;
        }
        if(patchVal[1]!=''){
          bodyy.name=movieName;
        }
        if(patchVal[2]!=0){
          bodyy.releaseYear=releaseYear;
        }
        if(patchVal[3]!=0){
          bodyy.duration=duration;
        }
        
     fetch(`http://localhost:3000/api/v1/movies/${id}`,{
            method:'PATCH',
             body:JSON.stringify(
                 bodyy
             ),
             headers:{
               'content-type':'application/json'
             }
       }).then(res=>res.json()).
          then(({message})=>{
            document.getElementById('err').innerText=message;
          })
 })


//--------------------------------------------------------------------------------------

document.getElementById('del').addEventListener('click',()=>{
     let val=document.getElementById('delete').value*1;
      fetch(`http://localhost:3000/api/v1/movies/${val}`,{
        method:'DELETE'
      }).then(res=>res.json()).
      then(({message})=>{
        document.getElementById('error').innerText=message;
      })

})
