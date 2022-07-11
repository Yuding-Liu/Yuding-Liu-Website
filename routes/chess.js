const mongoose = require('mongoose');

main().catch(err => console.log(err));

// define DB data schemas
const pieceSchema = new mongoose.Schema({
    _id: Number,
    piecetype: String,
    piececolor: String,
    insideboard: String,
    col: Number,
    row: Number
});

const Piece = mongoose.model('Piece', pieceSchema);

const gameSchema = new mongoose.Schema({
    _id: Number,
    whoseTurn: Number,
    pieceSelectedIndicator1Col: Number,
    pieceSelectedIndicator1Row: Number,
    pieceSelectedIndicator2Col: Number,
    pieceSelectedIndicator2Row: Number
});

const Game = mongoose.model('Game', gameSchema);

const boardSchema = new mongoose.Schema({
    piece_id: Number,
    col: Number,
    row: Number
})

const Board = mongoose.model('Board', boardSchema);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chess');
    serializeChessPieceData();
    serializeChessGameData();
    serializeChessBoardData();

    async function serializeChessPieceData() {
        var pieces = await Piece.find();
        if (pieces.length == 0) {
            chessPieceInfoOriginalState.forEach(element => {
                const piece = new Piece({
                    _id: element.id,
                    piecetype: element.piecetype,
                    piececolor: element.piececolor,
                    insideboard: element.insideboard,
                    col: element.col,
                    row: element.row
                });
                piece.save();
            });
        }
    }
    
    async function serializeChessGameData() {
        var games = await Game.find();
        if (games.length == 0) {
            const game = new Game({
                _id: 0,
                whoseTurn: 0,
                pieceSelectedIndicator1Col: -1,
                pieceSelectedIndicator1Row: -1,
                pieceSelectedIndicator2Col: -1,
                pieceSelectedIndicator2Row: -1
            });
            game.save();
        }
    }

    async function serializeChessBoardData() {
        var boards = await Board.find();
        if (boards.length == 0) {
            chessPieceInfoOriginalState.forEach(element => {
                const board = new Board({
                    piece_id: element.id,
                    col: element.col,
                    row: element.row
                });
                board.save();
            });
        }
    }
}

var express = require('express');

var router = express.Router();

const { chessPieceInfoOriginalState: chessPieceInfoOriginalState } = require("../src/behaviors/chessPieceInfo.js");

var chessPieceInfo = new Array();
var gameInfo = new Object();
var boardsInfo = new Array();

async function fetchDataFromDb() {
    var pieces = await Piece.find();
    // pieces.sort((a, b) => a.problemId - b.problemId);
    
    chessPieceInfo = [];
    pieces.forEach(element => {
        chessPieceInfo.push({
            id: parseInt(element._id),
            piecetype: element.piecetype,
            piececolor: element.piececolor,
            insideboard: element.insideboard,
            col: parseInt(element.col),
            row: parseInt(element.row)
        })
    });
    
    chessPieceInfo.sort((a, b) => a.id - b.id);

    var games = await Game.find();
    gameInfo = ({
        whoseTurn: games[0].whoseTurn,
        pieceSelectedIndicator1Col: games[0].pieceSelectedIndicator1Col,
        pieceSelectedIndicator1Row: games[0].pieceSelectedIndicator1Row,
        pieceSelectedIndicator2Col: games[0].pieceSelectedIndicator2Col,
        pieceSelectedIndicator2Row: games[0].pieceSelectedIndicator2Row
    });

    boardsInfo = [];
    var boards = await Board.find();
    boards.forEach(element => {
        boardsInfo.push({
            id: parseInt(element.piece_id),
            col: element.col,
            row: element.row
        })
    });
}

router.get('/chess', function (req, res, next) {
    if (!req.user) {
        return res.render('home');
    }
    next();
}, function (req, res, next) {
    fetchDataFromDb();
    res.render('chess', {
        user: req.user,
        chessPieceInfo: chessPieceInfo,
        gameInfo: gameInfo,
        boardsInfo: boardsInfo
    });
});


router.post('/chess', (req, res) => {
    const positionString = req.body.position;
    const positionArray = positionString.split(' ');
    const col = parseInt(positionArray[0]);
    const row = parseInt(positionArray[1]);
    console.log(col);
    console.log(row);
    handleClickPiece(col, row);
    res.render('chess', {
        user: req.user,
        chessPieceInfo: chessPieceInfo,
        gameInfo: gameInfo,
        boardsInfo: boardsInfo
    });
  });

async function handleClickPiece(col, row) {
    const game = await Game.findOne();
    game.pieceSelectedIndicator1Col = col;
    game.pieceSelectedIndicator1Row = row;
    await fetchDataFromDb();
    await game.save();
}

module.exports = router;