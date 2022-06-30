const mongoose = require('mongoose');



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chess');

    const pieceSchema = new mongoose.Schema({
        _id: Number,
        piecetype: String,
        piececolor: String,
        insideboard: String,
        col: Number,
        row: Number
    });

    const Piece = mongoose.model('Piece', pieceSchema);

    


    console.log("hi");
    const pieces = await Piece.find();
    console.log(pieces);
}