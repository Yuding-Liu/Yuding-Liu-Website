'use strict';

import {
    chessPieceInfo
} from '../behaviors/chessPieceInfo.js';
import './chess_piece.js'

class ChessPieces extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return e("React.Fragment", {},
            chessPieceInfo.map(chessPieceInfoItem => (
                e("div", {
                    "class": "chess_piece_container",
                    "data-piecetype": chessPieceInfoItem.piecetype,
                    "data-piececolor": chessPieceInfoItem.piececolor,
                    "data-insideboard": chessPieceInfoItem.insideboard,
				    "data-col": chessPieceInfoItem.col,
                    "data-row": chessPieceInfoItem.row
                })
            )));
    }
}


document.querySelectorAll('.chess_pieces_container')
    .forEach(domContainer => {
        const root = ReactDOM.createRoot(domContainer);
        root.render(
            e(ChessPieces)
        );
    });