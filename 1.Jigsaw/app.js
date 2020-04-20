var imageurl = ["images/img_1.jpg",
  "images/img_2.jpg",
  "images/img_3.jpg",
  "images/img_4.jpg",
  "images/img_5.jpg",
  "images/img_6.jpg",
  "images/img_7.jpg",
  "images/img_8.jpg"]




  const rows = document.querySelectorAll('.shuffled');
  rows.forEach(row => row.addEventListener('click',showId));
  
  function showId(e){
    
    console.log(e.target.id);
  }

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

class orgCor {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class sufcord {
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
  var xcells = 2;
  var ycells = 2;
  var img = new Image();
  img.src = imageurl[4];
  /// img.src = imageurl[randomIntFromInterval(0,7)];
  var xlenght = img.width;
  var ylength = img.height;
  document.getElementById("split-images-area").width = xlenght;
  document.getElementById("split-images-area").height = ylength;
  var cellwidth = xlenght / xcells;
  var cellheight = ylength / ycells;






  for (var p = 0; p < xcells; p++) {
    for (var k = 0; k < ycells; k++) {
      console.log('X--', (k * cellwidth), 'Y--', (p * cellheight));

      imagearraylist.push(new ImageArray(new orgCor((k * cellwidth), (p * cellheight)), undefined));
    }
  }

  var tmparray = [];
  for (var k = 0; k < (xcells * ycells); k++) {
    tmparray.push(k);

  }
  console.log(tmparray);
  tmparray = shuffle(tmparray);
  console.log(tmparray);

  for (var k = 0; k < (xcells * ycells); k++) {
    imagearraylist[k].sufcord = new sufcord(imagearraylist[tmparray[k]].orgCor.x, imagearraylist[tmparray[k]].orgCor.y);

  }
  var canelement = document.getElementById("split-images-area");
  while (canelement.lastElementChild) {
    canelement.removeChild(canelement.lastElementChild);
  }
  for (var k = 0; k < (xcells * ycells); k++) {
    var canelement = document.getElementById("split-images-area");



    var canvascell = document.createElement("canvas");
    canvascell.setAttribute("id", (imagearraylist[k].sufcord.x + '_' + imagearraylist[k].sufcord.y));
    canvascell.setAttribute("class", "dynaele")
    var ctx = canvascell.getContext("2d");

    canvascell.width = cellwidth;
    canvascell.height = cellheight;
    ctx.drawImage(img, imagearraylist[k].sufcord.x, imagearraylist[k].sufcord.y, cellwidth, cellheight, 0, 0, cellwidth, cellheight);
    canelement.appendChild(canvascell);

    if ((k + 1) % ycells === 0) {
      canelement.appendChild(document.createElement("br"));
    }


  }
 

}




function shuffle(a) {
  for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
  return a;
};


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}