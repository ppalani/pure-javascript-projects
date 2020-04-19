function cellcreator(){
    var rows=3;
    var cols=4;
    var baseelement=document.getElementById("scrach-area");

    console.log(baseelement);
   var tableelement=document.createElement("table");
   
    baseelement.appendChild(tableelement);

   
    var tablerow=document.createElement("tr");
    var tabledata=document.createElement("td");
    for(var p=0;p<rows;p++)
    {
      var trinside=  tableelement.appendChild(document.createElement("tr"));

        for (var q=0;q<cols;q++)
        {
            trinside.appendChild(document.createElement("td"))
            console.log(p,q)
        }
    }



}