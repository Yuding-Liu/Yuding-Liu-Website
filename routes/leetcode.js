var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

const solutionSchema = new mongoose.Schema({
    url: String,
    problem_id: Number
});

const Solution = mongoose.model('Solution', solutionSchema);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chess');
    serializeLeetcodeData();

    async function serializeLeetcodeData() {

    
        var solutions = await Solution.find();
        if (solutions.length == 0) {
            var solutionArr = [{
                "url": "https://zhuanlan.zhihu.com/p/450700300",
                "problem_id": "1"
            }];
            solutionArr.forEach(element => {
                const solution = new Solution({
                    url: element.url,
                    problem_id: element.problem_id
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

        solutions.sort((a, b) => a.problem_id - b.problem_id);

        res.render('leetcode', {
            user: req.user,
            solutions: solutions
        });
    }

    
});

module.exports = router;