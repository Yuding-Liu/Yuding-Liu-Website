import {
  getPositionByColAndRow
} from "../components/chess_piece.js";

const pieces = document.getElementsByClassName("chess_piece_container");
var boardConfiguration = new Array(10); //a assumes index start from 1 (to fit the rule in Xiangqi)

var whoseTurn = 0; // 0: Red Start, 1: Red End, 2: Black Start, 3: Black End
var pieceSelectedIndicator1Col = -1;
var pieceSelectedIndicator1Row = -1;
var pieceSelectedIndicator2Col = -1;
var pieceSelectedIndicator2Row = -1;

handleClicks();
initBoardSize();
initBoardConiguration();

function handleClicks() {
  for (let piece of pieces) {
    handleClickPiece(piece);
  }
}

function initBoardSize() {
  for (var i = 0; i < boardConfiguration.length; ++i) {
    boardConfiguration[i] = new Array(11).fill(0);
  }
}

function initBoardConiguration() {
  for (let piece of pieces) {
    const col = parseInt(piece.getAttribute("data-col"));
    const row = parseInt(piece.getAttribute("data-row"));
    const id = parseInt(piece.getAttribute("id"));
    boardConfiguration[col][row] = id;
  }
}

function handleClickPiece(piece) {
  piece.onclick = pieceOnClick;

  function placePieceSelectedIndicator(col, row, indicatorId) {
    const pieceSelectedIndicatorPosition = getPositionByColAndRow(col, row);
    const pieceSelectedIndicator = document.getElementById(indicatorId);
    pieceSelectedIndicator.style.bottom = (pieceSelectedIndicatorPosition.bottom + 19) + "px";
    pieceSelectedIndicator.style.right = (pieceSelectedIndicatorPosition.right - 16) + "px";

    switch (indicatorId) {
      case "pieceSelectedIndicator1":
        pieceSelectedIndicator1Col = col;
        pieceSelectedIndicator1Row = row;
        break;

      case "pieceSelectedIndicator2":
        pieceSelectedIndicator2Col = col;
        pieceSelectedIndicator2Row = row;
        break;
    }
  }

  function pieceOnClick() {
    const col = parseInt(piece.getAttribute("data-col"));
    const row = parseInt(piece.getAttribute("data-row"));

    switch (whoseTurn) {
      case 0:
        if (piece.getAttribute("data-piececolor") === "red") {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator1");
          ++whoseTurn;
          return;
        }
        break;

      case 1:
        if (piece.getAttribute("data-piececolor") === "red") {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator1");
          return;
        } else {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator2");

          var originId = boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row];
          var originPiece = document.getElementById(originId);
          originPiece.setAttribute("data-col", col);
          originPiece.setAttribute("data-row", row);
          console.log(originPiece);

          var destId = boardConfiguration[col][row];
          var destPiece = document.getElementById(destId);
          destPiece.setAttribute("data-col", pieceSelectedIndicator1Col);
          destPiece.setAttribute("data-row", pieceSelectedIndicator1Row);
          destPiece.setAttribute("data-insideboard", "no");

          var tmp = boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row];
          boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row] = boardConfiguration[col][row];
          boardConfiguration[col][row] = tmp;

          ++whoseTurn;
        }

        default:
    }


  }
}




// function dragElement(elmnt) {
//   var pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;

//   elmnt.onmousedown = dragMouseDown;


//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }