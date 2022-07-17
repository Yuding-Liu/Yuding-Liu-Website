import {
    getPositionByColAndRow,
} from "../components/chess_piece.js";
var bottom = 0;
var right = 0;
var position = new Object();
const pieceSelectedIndicator1 = document.getElementById("pieceSelectedIndicator1");

var row = parseInt(pieceSelectedIndicator1.getAttribute("data-row"));
var col = parseInt(pieceSelectedIndicator1.getAttribute("data-col"));

if (row == -1 || col == -1) {
    pieceSelectedIndicator1.style.opacity = "0";
} else {
    pieceSelectedIndicator1.style.opacity = "1";
    position = getPositionByColAndRow(col, row);
    right = position.right;
    bottom = position.bottom;
    pieceSelectedIndicator1.style.right = (right - 16) + "px";
    pieceSelectedIndicator1.style.bottom = (bottom - 17) + "px";
}

