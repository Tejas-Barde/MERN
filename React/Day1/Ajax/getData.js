async function GetData(callback){
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET","https://jsonplaceholder.typicode.com/posts");
  xmlHttpReq.onreadystatechange =  ()=>{
    if(xmlHttpReq.status === 200 && xmlHttpReq.readyState === 4){
      // console.log(xmlHttpReq.responseText);
      callback(xmlHttpReq.responseText);
    }
  }
  xmlHttpReq.send();
}