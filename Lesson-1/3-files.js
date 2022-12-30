const fs = require('fs');

//reading files

fs.readFile('./blog1.txt', (err, data)=>{
  if(err){
    console.log(err);
  }
  console.log(data.toString());
})

//writing files

fs.writeFile('./blog1.txt','hello, brother', ()=>{
  console.log("the file1 is writen")
})//=> overwrites the text

fs.writeFile('./blog2.txt','mynamu isu mhamedo abdoulou', ()=>{
  console.log("the file2 is writen")
})//=> it creates a new file and writes in it

//directories
if(!fs.existsSync('./newFolder')){
  fs.mkdir('./newFolder', (err)=>{
  if(err){
    console.log(err);
  }
  console.log("folder created") 
})
}else{
  fs.rmdir('./newFolder', (err)=>{
    if(err){
      console.log(err);
    }
    console.log("folder deleted")
})
}
  //deleting files

  if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt', (err)=>{
    if(err){
      console.log(err);
    }
    console.log("file deleted") 
  })
  }else{
    fs.writeFile('./deleteme.txt', 'im here', (err)=>{
      if(err){
        console.log(err);
      }
      console.log("file created")
  })
  }