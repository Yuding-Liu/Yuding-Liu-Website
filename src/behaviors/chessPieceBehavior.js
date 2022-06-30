import {
  getPositionByColAndRow,
  rerenderById
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
initSelectedIndicator();

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

function initSelectedIndicator() {
  placePieceSelectedIndicator(-1, -1, "pieceSelectedIndicator1");
  placePieceSelectedIndicator(-1, -1, "pieceSelectedIndicator2");
}

function placePieceSelectedIndicator(col, row, indicatorId) {
  const pieceSelectedIndicatorPosition = getPositionByColAndRow(col, row);
  const pieceSelectedIndicator = document.getElementById(indicatorId);
  pieceSelectedIndicator.style.bottom = (pieceSelectedIndicatorPosition.bottom + 19) + "px";
  pieceSelectedIndicator.style.right = (pieceSelectedIndicatorPosition.right - 16) + "px";

  if (col == -1 || row == -1) {
    pieceSelectedIndicator.style.opacity = 0;
  } else {
    pieceSelectedIndicator.style.opacity = 1;
  }

  switch (indicatorId) {
    case "pieceSelectedIndicator1":
      pieceSelectedIndicator1Col = col;
      pieceSelectedIndicator1Row = row;
      pieceSelectedIndicator2Col = -1;
      pieceSelectedIndicator2Row = -1;
      break;

    case "pieceSelectedIndicator2":
      pieceSelectedIndicator2Col = col;
      pieceSelectedIndicator2Row = row;
      break;
  }
}

function handleClickPiece(piece) {
  piece.onclick = pieceOnClick;

  function pieceOnClick() {
    const col = parseInt(piece.getAttribute("data-col"));
    const row = parseInt(piece.getAttribute("data-row"));

    switch (whoseTurn) {
      case 0:
        if (piece.getAttribute("data-piececolor") === "red" && piece.getAttribute("data-insideboard") == "yes") {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator1");
          placePieceSelectedIndicator(-1, -1, "pieceSelectedIndicator2");
          ++whoseTurn;
          return;
        }
        break;

      case 1:
        if (piece.getAttribute("data-piececolor") === "red") {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator1");
          placePieceSelectedIndicator(-1, -1, "pieceSelectedIndicator2");
          return;
        } else {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator2");

          var originId = boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row];
          var originPiece = document.getElementById(originId);
          originPiece.setAttribute("data-col", col);
          originPiece.setAttribute("data-row", row);
          const root = ReactDOM.createRoot(originPiece);
          rerenderById(originId);

          var destId = boardConfiguration[col][row];
          var destPiece = document.getElementById(destId);
          destPiece.setAttribute("data-col", pieceSelectedIndicator1Col);
          destPiece.setAttribute("data-row", pieceSelectedIndicator1Row);
          destPiece.setAttribute("data-insideboard", "no");
          rerenderById(destId);

          var tmp = boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row];
          boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row] = boardConfiguration[col][row];
          boardConfiguration[col][row] = tmp;

          ++whoseTurn;
        }

      case 2:
        if (piece.getAttribute("data-piececolor") === "black" && piece.getAttribute("data-insideboard") == "yes") {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator1");
          placePieceSelectedIndicator(-1, -1, "pieceSelectedIndicator2");
          ++whoseTurn;
          return;
        }
        break;

      case 3:
        if (piece.getAttribute("data-piececolor") === "black") {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator1");
          placePieceSelectedIndicator(-1, -1, "pieceSelectedIndicator2");
          return;
        } else {
          placePieceSelectedIndicator(col, row, "pieceSelectedIndicator2");

          var originId = boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row];
          var originPiece = document.getElementById(originId);
          originPiece.setAttribute("data-col", col);
          originPiece.setAttribute("data-row", row);
          const root = ReactDOM.createRoot(originPiece);
          rerenderById(originId);

          var destId = boardConfiguration[col][row];
          var destPiece = document.getElementById(destId);
          destPiece.setAttribute("data-col", pieceSelectedIndicator1Col);
          destPiece.setAttribute("data-row", pieceSelectedIndicator1Row);
          destPiece.setAttribute("data-insideboard", "no");
          rerenderById(destId);

          var tmp = boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row];
          boardConfiguration[pieceSelectedIndicator1Col][pieceSelectedIndicator1Row] = boardConfiguration[col][row];
          boardConfiguration[col][row] = tmp;

          whoseTurn = 0;
        }

        default:
    }


  }
}
