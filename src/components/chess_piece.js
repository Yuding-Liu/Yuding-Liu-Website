'use strict';

const pieceRadius = 20;

class ChessPiece extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const chessStyle= {
            color: this.props.pieceColor,
            height: pieceRadius * 2,
            width: pieceRadius * 2,
            border: "5px double black",
            borderRadius: "50%",
            display: "inline-block",
            fontSize: pieceRadius * 1.5,
            textAlign: "center",
            backgroundColor: "#F9DB9F"
        }

        return e(
            'p', {
                style: chessStyle
            },
            this.props.pieceType
        );
    }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.chess_piece_container')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const pieceType = domContainer.dataset.piecetype;
        const pieceColor = domContainer.dataset.piececolor;
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(ChessPiece, {
                pieceType: pieceType,
                pieceColor: pieceColor
            })
        );
    });