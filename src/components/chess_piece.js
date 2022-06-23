'use strict';

const e = React.createElement;

const pieceRadius = 23;

export function getPositionByColAndRow(col, row) {
    const chessBoard = document.getElementsByClassName('chessBoardImg')[0];

    var style = chessBoard.currentStyle || window.getComputedStyle(chessBoard);

    var bottom = -35 + row * 61.5;
    var right = -60 + parseFloat(style.marginRight) + col * 61.5;
    return {
        bottom: bottom,
        right: right
    };
}

class ChessPiece extends React.Component {
    constructor(props) {
        super(props);
        this.piecePosition = getPositionByColAndRow(this.props.col, this.props.row);
    }

    render() {
        const chessStyle = {
            color: this.props.pieceColor,
            height: pieceRadius * 2,
            width: pieceRadius * 2,
            border: "5px double black",
            borderRadius: "50%",
            fontSize: pieceRadius * 1.5,
            textAlign: "center",
            backgroundColor: "#F9DB9F",
            position: "relative",
            bottom: this.piecePosition.bottom + "px",
            right: this.piecePosition.right + "px",
            display: "block",
            transform: this.props.pieceColor === "black" ? "rotate(180deg)" : "rotate(0deg)",
            opacity: this.props.pieceColor === "white" ? "0.0" : "1.0",
        }

        return e(
            'p', {
                style: chessStyle
            },
            this.props.pieceType
        );
    }
}


document.querySelectorAll('.chess_piece_container')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const pieceType = domContainer.dataset.piecetype;
        const pieceColor = domContainer.dataset.piececolor;
        const insideBoard = domContainer.dataset.insideboard;
        const col = parseInt(domContainer.dataset.col, 10);
        const row = parseInt(domContainer.dataset.row, 10);
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(ChessPiece, {
                pieceType: pieceType,
                pieceColor: pieceColor,
                insideBoard: insideBoard === "yes",
                col: col,
                row: row
            })
        );
    });