const body = document.getElementsByTagName('div');
console.log(body);
 sidebar =()=> {
     body.item(0).classList.toggle ('sidebar-expand');
}