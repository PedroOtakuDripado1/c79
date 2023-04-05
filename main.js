menuListArray = ["Pizza Vegetariana","Pizza de Muzarela", "Pizza Portuguesa","Pizza de Doce de Leite","Pizza de Quatro Queijos","Pizza Margherita"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata
}
function addItem(){
var htmldata;
var imgtags='<img id="img1" src="images/pizzaImg.png"/> '
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayAddedMenu").innerHTML = htmldata
}


function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}