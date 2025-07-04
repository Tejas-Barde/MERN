function GetData(){
  return new Promise((resolve,reject)=>{
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET","https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = ()=>{
      if(xmlHttpReq.status!==200 && xmlHttpReq.readyState===4){
        resolve(xmlHttpReq.responseText)
      }
      else if(xmlHttpReq.status===200 && xmlHttpReq.readyState===4){
        reject("Error : ");
      }
    };
    xmlHttpReq.send();
  });
}