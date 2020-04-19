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
class ImageArray {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


}

function splitimages() {
  var xcells = 4;
  var ycells = 4;

  var img = new Image();
  img.src = "images/img_src (4).jpg";

  var xlenght = img.width;
  var ylength = img.height;
  document.getElementById("split-images-area").width = xlenght;
  document.getElementById("split-images-area").height = ylength;

  for (var p = 0; p < 4; p++) {

    for (var k = 0; k < 4; k++) {

      var canvascell = document.createElement("canvas");
      var ctx = canvascell.getContext("2d");
      var cellwidth = xlenght / xcells;
      var cellheight = ylength / ycells;
      canvascell.width = cellwidth;
      canvascell.height = cellheight;
      ctx.drawImage(img, k * cellwidth, p * cellheight, cellwidth, cellheight, 0, 0, cellwidth, cellheight);
      var canelement = document.getElementById("split-images-area");
      canelement.appendChild(canvascell);
      console.log('X--', (k * cellwidth), 'Y--', (p * cellheight));

      imagearraylist.push(new ImageArray((k * cellwidth), (p * cellheight)));


    }
    var caele = document.getElementById("split-images-area");

    caele.appendChild(document.createElement("br"));

  }


}




function shuffle(a) {
  for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
  return a;
};