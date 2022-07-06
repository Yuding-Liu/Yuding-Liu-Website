var express = require('express');
var router = express.Router();
const { solutionArr } = require('../leetcodeSolutions.js');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

const solutionSchema = new mongoose.Schema({
    url: String,
    problemId: Number
});

const Solution = mongoose.model('Solution', solutionSchema);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chess');
    serializeLeetcodeData();

    async function serializeLeetcodeData() {
        var solutions = await Solution.find();
        if (solutions == null || solutions.length == 0) {
            // var solutionArr = [{
            //     "url": "https://zhuanlan.zhihu.com/p/450700300",
            //     "problemId": "1"
            // }];
            solutionArr.forEach(element => {
                const solution = new Solution({
                    url: element.url,
                    problemId: element.problemId
                });
                solution.save();
            });

        }
        
    }
}



router.get('/leetcode', function (req, res, next) {
    if (!req.user) {
        return res.render('home');
    }
    next();
}, function (req, res, next) {
    fetchSolutions();

    async function fetchSolutions() {

        var solutions = await Solution.find();

        solutions.sort((a, b) => a.problemId - b.problemId);

        res.render('leetcode', {
            user: req.user,
            solutions: solutions
        });
    }
});

router.post('/insert', (req, res) => {
    const problemId = parseInt(req.body.problemId);
    const url = req.body.url;
    console.log(problemId);
    if (!isNaN(problemId)) {
        saveSolution();
    }
    function saveSolution() {
        const solution = new Solution({
            url: url,
            problemId: problemId
        });
        solution.save();
    }
    

    res.redirect('/leetcode');
});

module.exports = router;