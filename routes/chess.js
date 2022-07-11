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

async function fetchPieceInfo() {
    var pieces = await Piece.find();
    // pieces.sort((a, b) => a.problemId - b.problemId);
    
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
}

router.get('/chess', function (req, res, next) {
    if (!req.user) {
        return res.render('home');
    }
    next();
}, function (req, res, next) {
    fetchPieceInfo();
    res.render('chess', {
        user: req.user,
        chessPieceInfo: chessPieceInfo
    });
});




module.exports = router;