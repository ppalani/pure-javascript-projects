function cellcreator() {
  var rows = 3;
  var cols = 3;
  var baseelement = document.getElementById("scrach-area");

  console.log(baseelement);
  var tableelement = document.createElement("table");

  baseelement.appendChild(tableelement);


  var tablerow = document.createElement("tr");
  var tabledata = document.createElement("td");
  for (var x = 0; x < rows; x++) {
    var trinside = tableelement.appendChild(document.createElement("tr"));

    for (var y = 0; y < cols; y++) {

      var childrow = trinside.appendChild(document.createElement("td"))
      console.log(x, y)




    }
  }



}
var imagearraylist = [];

class orgCor{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class sufcord{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class ImageArray {
  constructor(orgCor, sufcord) {
    this.orgCor = orgCor;
    this.sufcord = sufcord;
  }


}

function splitimages() {
  var  xcells= 9;
  var ycells = 9;
  var img = new Image();
  img.src = "images/img_src (4).jpg";
  var xlenght = img.width;
  var ylength = img.height;
  document.getElementById("split-images-area").width = xlenght;
  document.getElementById("split-images-area").height = ylength;

  var cellwidth = xlenght / xcells;
  var cellheight = ylength / ycells;

  for (var p = 0; p < xcells; p++) {
    for (var k = 0; k < ycells; k++) {
      console.log('X--', (k * cellwidth), 'Y--', (p * cellheight));
      
      imagearraylist.push(new ImageArray(new orgCor((k * cellwidth), (p * cellheight)),undefined));
    }
  }

  var tmparray=[];
  for(var k=0;k<(xcells*ycells);k++){
    tmparray.push(k);
  
  }
console.log(tmparray);
tmparray=shuffle(tmparray);
console.log(tmparray);

for(var k=0;k<(xcells*ycells);k++){
  imagearraylist[k].sufcord=new sufcord(imagearraylist[tmparray[k]].orgCor.x,imagearraylist[tmparray[k]].orgCor.y);

}


for(var k=0;k<(xcells*ycells);k++){

  var canvascell = document.createElement("canvas");
  var ctx = canvascell.getContext("2d");

  canvascell.width = cellwidth;
  canvascell.height = cellheight;
  ctx.drawImage(img, imagearraylist[k].sufcord.x, imagearraylist[k].sufcord.y, cellwidth, cellheight, 0, 0, cellwidth, cellheight);
  var canelement = document.getElementById("split-images-area");
  canelement.appendChild(canvascell);

if((k+1)%ycells===0){
  var caele = document.getElementById("split-images-area");

  caele.appendChild(document.createElement("br"));
}


}


}




function shuffle(a) {
  for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
  return a;
};