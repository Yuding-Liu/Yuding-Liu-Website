// Make the DIV element draggable:
const pieces = document.getElementsByClassName("chess_piece_container");
for (let piece of pieces) {
  dragElement(piece);
  clickPiece(piece);
}

import { getPositionByColAndRow } from "../components/chess_piece.js";

function clickPiece(piece) {
  piece.onclick = pieceOnClick;

  function pieceOnClick() {
    const col = parseInt(piece.getAttribute("data-col"));
    const row = parseInt(piece.getAttribute("data-row"));
    const pieceSelectedIndicator1Position = getPositionByColAndRow(col, row);
    const pieceSelectedIndicator1 = document.getElementById('pieceSelectedIndicator1');
    pieceSelectedIndicator1.style.bottom = (pieceSelectedIndicator1Position.bottom + 19) + "px";
    pieceSelectedIndicator1.style.right = (pieceSelectedIndicator1Position.right - 15) + "px";

  }
}


function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}