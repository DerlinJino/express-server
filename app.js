//Import package
let express=require('express') //It will return a function
let app=express(); // when we call that function it will return a object // And in that object we will have bunch of methods that we can use in our node js application
let fs=require('fs');
app.use(express.json());
let cors=require('cors');
app.use(cors());
let movies=JSON.parse(fs.readFileSync('./data/movies.json'));

//Getting
//GET-api/v1/movies
app.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
      status:"success",
      count:movies.length,
      data:{
        movies:movies
      }
    })
});

//Getting by id
//GET-api/v1/movies/id
app.get('/api/v1/movies/:id',(req,res)=>{
      //console.log(req.params);
        let id = req.params.id*1; //note we are converting id from string to number (or) we can also use +req.params.id to convert it into number from string
        let movie=movies.find(el =>el.id===id);
       
        if(!movie){
          return res.status(404).json({
             status:"fail",
             message:`movie with id ${id} is not found`
          })
        }
      //send movie in the response
      res.status(200).json({
        status:'success',
        data:{
          movie:movie
        }
      });
});

//posting
//POST-api/v1/movies
app.post('/api/v1/movies',(req,res)=>{
    //console.log(req.body);
    let newId=movies[movies.length-1].id+1;
    let newMovie=Object.assign({id:newId},req.body)
    movies.push(newMovie);
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(201).json({
          status:"you have posted sucessfully",
          data:{
             movie:newMovie
          }
        })
    })
})

//patching
app.patch('/api/v1/movies/:id',(req,res)=>{
     let id=req.params.id*1;
     let flag=false;
     movies.forEach((el)=>{
       if(el.id===req.body.id){
            flag=true;
       }
     })
      if(flag){
          return res.status(404).json({
          //status:'you are trying to duplicate ids',
          message:'you are trying to duplicate ids'
        });
      }
    let movieToUpdate=movies.find(el=>el.id===id);
   if(!movieToUpdate){
      return res.status(404).json({
         //status:'fail',
         message:`no movie object with id ${id} is found`
      })

   }
   let index=movies.indexOf(movieToUpdate);
   Object.assign(movieToUpdate,req.body);
   movies[index]=movieToUpdate;
   fs.writeFile('./data/movies.json',JSON.stringify(movies),()=>{
        res.status(200).json({
            message:'success! It is patched',
          data:{
            movie:movieToUpdate
          }
        })
   })
     
       
    }
)

//deleting
app.delete('/api/v1/movies/:id',(req,res)=>{
    let id=req.params.id*1;
    let movieToDelete=movies.find(el=>el.id===id);
    if(!movieToDelete){
      return res.status(404).json({
         status:'fail',
         message:`no movie object with id ${id} is found to delete`
      })

   }
     let index=movies.indexOf(movieToDelete);
     movies.splice(index,1);
     fs.writeFile('./data/movies.json',JSON.stringify(movies),()=>{
        res.status(204).json({
        message:'you have deleted successfully',
         data:{
          movie:null
        }
      })
 })
})

//create a server
let port=3000;
app.listen(port,()=>{
    console.log('Server has started...');
})


/*
 Note:
   ->when we use send() method the content type of response by default will be set as text/html
   ->To send json response we need to use json() method, here the content type will be set as application/json
 */

  /*
   ->In order to attach the request body to request object we need use middle ware
   ->use this in code app.use(express.json())
   ->A middleware is just a function which can modify the incoming request data
   ->It stands in the  middle of request and response
  */