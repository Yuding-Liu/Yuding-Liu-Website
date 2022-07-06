var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chess');
    serializeLeetcodeData();

    async function serializeLeetcodeData() {
        const solutionSchema = new mongoose.Schema({
            url: String,
            problem_id: Number
        });
    
        const Solution = await mongoose.model('Solution', solutionSchema);
    
        var solutions = await Solution.find();
        if (solutions.length == 0) {
            var solutionArr = [
                {
                    "url": "https://zhuanlan.zhihu.com/p/450700300",
                    "problem_id": "1"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/450716780",
                    "problem_id": "2"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/450753986",
                    "problem_id": "3"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505157000",
                    "problem_id": "4"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/452980143",
                    "problem_id": "5"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/483795743",
                    "problem_id": "9"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440583612",
                    "problem_id": "10"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479665283",
                    "problem_id": "15"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462651998",
                    "problem_id": "17"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462664708",
                    "problem_id": "18"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534520022",
                    "problem_id": "19"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480275032",
                    "problem_id": "20"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/464341523",
                    "problem_id": "21"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/453405151",
                    "problem_id": "22"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479919345",
                    "problem_id": "23"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534504112",
                    "problem_id": "24"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462694030",
                    "problem_id": "25"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/441298938",
                    "problem_id": "28"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462712228",
                    "problem_id": "31"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/453641512",
                    "problem_id": "32"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462726111",
                    "problem_id": "33"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/504535338",
                    "problem_id": "34"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/442491303",
                    "problem_id": "37"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513683998",
                    "problem_id": "39"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513695885",
                    "problem_id": "40"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480536873",
                    "problem_id": "41"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479738758",
                    "problem_id": "42"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/454661697",
                    "problem_id": "45"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479927322",
                    "problem_id": "46"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513677350",
                    "problem_id": "47"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526848512",
                    "problem_id": "48"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/506549182",
                    "problem_id": "51"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479716392",
                    "problem_id": "53"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479727180",
                    "problem_id": "54"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/454672740",
                    "problem_id": "55"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/464346665",
                    "problem_id": "56"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/454673867",
                    "problem_id": "62"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/454674682",
                    "problem_id": "63"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513750365",
                    "problem_id": "64"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525544256",
                    "problem_id": "67"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537081092",
                    "problem_id": "68"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480583269",
                    "problem_id": "69"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513698176",
                    "problem_id": "70"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/442500699",
                    "problem_id": "72"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505237667",
                    "problem_id": "75"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/481196392",
                    "problem_id": "76"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505311094",
                    "problem_id": "77"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505324520",
                    "problem_id": "79"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462728205",
                    "problem_id": "81"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/492136315",
                    "problem_id": "83"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456658893",
                    "problem_id": "84"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456662310",
                    "problem_id": "85"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479224373",
                    "problem_id": "88"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513822215",
                    "problem_id": "91"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480526692",
                    "problem_id": "92"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534911668",
                    "problem_id": "94"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456690659",
                    "problem_id": "95"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456694409",
                    "problem_id": "96"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456726176",
                    "problem_id": "97"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462741416",
                    "problem_id": "98"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/442913759",
                    "problem_id": "99"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462742565",
                    "problem_id": "100"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480595384",
                    "problem_id": "101"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480273121",
                    "problem_id": "102"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479514024",
                    "problem_id": "103"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534521409",
                    "problem_id": "104"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480578571",
                    "problem_id": "105"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534910106",
                    "problem_id": "106"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534922473",
                    "problem_id": "109"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534526930",
                    "problem_id": "110"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462744269",
                    "problem_id": "112"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462890687",
                    "problem_id": "113"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456769195",
                    "problem_id": "115"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/463306410",
                    "problem_id": "116"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/463308390",
                    "problem_id": "117"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456890811",
                    "problem_id": "120"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456894336",
                    "problem_id": "121"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456912572",
                    "problem_id": "122"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457138108",
                    "problem_id": "123"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457155026",
                    "problem_id": "124"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/511644758",
                    "problem_id": "126"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/442920183",
                    "problem_id": "128"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/463309399",
                    "problem_id": "129"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/512078792",
                    "problem_id": "130"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457187986",
                    "problem_id": "131"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/467737644",
                    "problem_id": "135"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526313235",
                    "problem_id": "136"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/444530441",
                    "problem_id": "139"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457364106",
                    "problem_id": "140"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480532342",
                    "problem_id": "141"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/485128014",
                    "problem_id": "142"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480269363",
                    "problem_id": "143"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534726094",
                    "problem_id": "144"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534914990",
                    "problem_id": "145"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/464341875",
                    "problem_id": "148"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/528665544",
                    "problem_id": "149"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537275959",
                    "problem_id": "150"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457387325",
                    "problem_id": "152"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/504550824",
                    "problem_id": "153"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/504557921",
                    "problem_id": "154"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/527982155",
                    "problem_id": "155"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479679833",
                    "problem_id": "160"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479220548",
                    "problem_id": "167"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525540041",
                    "problem_id": "168"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440176655",
                    "problem_id": "169"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525381073",
                    "problem_id": "172"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457428692",
                    "problem_id": "174"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/464349970",
                    "problem_id": "179"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/516844721",
                    "problem_id": "188"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526311456",
                    "problem_id": "190"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513702009",
                    "problem_id": "198"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/463310329",
                    "problem_id": "199"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/463435170",
                    "problem_id": "200"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526304315",
                    "problem_id": "202"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525376787",
                    "problem_id": "204"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534378310",
                    "problem_id": "205"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/462692234",
                    "problem_id": "206"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/476505606",
                    "problem_id": "207"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534741216",
                    "problem_id": "208"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/476508228",
                    "problem_id": "210"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/516928030",
                    "problem_id": "213"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479509631",
                    "problem_id": "215"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/529653205",
                    "problem_id": "217"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/527990299",
                    "problem_id": "218"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/481213921",
                    "problem_id": "221"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/529625341",
                    "problem_id": "225"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534743085",
                    "problem_id": "226"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534492012",
                    "problem_id": "227"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/527773734",
                    "problem_id": "232"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534509648",
                    "problem_id": "234"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534786739",
                    "problem_id": "235"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479697275",
                    "problem_id": "236"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525552624",
                    "problem_id": "238"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/528643079",
                    "problem_id": "239"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/527768962",
                    "problem_id": "240"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/521181232",
                    "problem_id": "241"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534374935",
                    "problem_id": "242"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/512081897",
                    "problem_id": "257"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526511823",
                    "problem_id": "260"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526486546",
                    "problem_id": "268"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513755298",
                    "problem_id": "279"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/529701830",
                    "problem_id": "287"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440143533",
                    "problem_id": "300"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/528689189",
                    "problem_id": "303"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/528701635",
                    "problem_id": "304"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534372318",
                    "problem_id": "307"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/516893224",
                    "problem_id": "309"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/476532590",
                    "problem_id": "310"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525370172",
                    "problem_id": "312"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457646526",
                    "problem_id": "313"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526336312",
                    "problem_id": "318"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513925891",
                    "problem_id": "322"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525422581",
                    "problem_id": "326"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534516767",
                    "problem_id": "328"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457793053",
                    "problem_id": "329"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/528686373",
                    "problem_id": "332"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457957754",
                    "problem_id": "337"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526382173",
                    "problem_id": "338"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526321295",
                    "problem_id": "342"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/516932039",
                    "problem_id": "343"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505186648",
                    "problem_id": "347"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/457986079",
                    "problem_id": "354"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458001624",
                    "problem_id": "363"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458071856",
                    "problem_id": "368"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/520962787",
                    "problem_id": "376"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458073554",
                    "problem_id": "377"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525461477",
                    "problem_id": "382"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525431073",
                    "problem_id": "384"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458076244",
                    "problem_id": "392"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458077863",
                    "problem_id": "396"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458088819",
                    "problem_id": "397"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458276855",
                    "problem_id": "403"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534776665",
                    "problem_id": "404"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479177229",
                    "problem_id": "406"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534495784",
                    "problem_id": "409"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/458414897",
                    "problem_id": "410"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513744698",
                    "problem_id": "413"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/480474718",
                    "problem_id": "415"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513887261",
                    "problem_id": "416"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505263359",
                    "problem_id": "417"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/467743139",
                    "problem_id": "435"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534542654",
                    "problem_id": "437"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526563886",
                    "problem_id": "448"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534963280",
                    "problem_id": "450"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505208222",
                    "problem_id": "451"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/468185164",
                    "problem_id": "452"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/466295411",
                    "problem_id": "455"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526306976",
                    "problem_id": "461"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525555086",
                    "problem_id": "462"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526300707",
                    "problem_id": "470"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513917463",
                    "problem_id": "474"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526502650",
                    "problem_id": "476"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/529648983",
                    "problem_id": "503"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525379356",
                    "problem_id": "504"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534779029",
                    "problem_id": "513"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/504019674",
                    "problem_id": "524"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/525447591",
                    "problem_id": "528"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534792424",
                    "problem_id": "530"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534783630",
                    "problem_id": "538"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/504942312",
                    "problem_id": "540"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440153052",
                    "problem_id": "542"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534531748",
                    "problem_id": "543"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505246706",
                    "problem_id": "547"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/528718350",
                    "problem_id": "560"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/528723543",
                    "problem_id": "566"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534773990",
                    "problem_id": "572"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/517019440",
                    "problem_id": "583"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/529696029",
                    "problem_id": "594"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/467751975",
                    "problem_id": "605"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534766041",
                    "problem_id": "617"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/485141064",
                    "problem_id": "633"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534723857",
                    "problem_id": "637"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/517022195",
                    "problem_id": "646"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534381378",
                    "problem_id": "647"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/516368556",
                    "problem_id": "650"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534941563",
                    "problem_id": "653"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/479216712",
                    "problem_id": "665"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534732112",
                    "problem_id": "669"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/485770833",
                    "problem_id": "680"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/526492222",
                    "problem_id": "693"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/505242889",
                    "problem_id": "695"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534399306",
                    "problem_id": "696"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/529686351",
                    "problem_id": "697"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/520971306",
                    "problem_id": "714"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/456651922",
                    "problem_id": "739"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/468237073",
                    "problem_id": "763"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/464319794",
                    "problem_id": "768"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/527771963",
                    "problem_id": "769"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/476500554",
                    "problem_id": "785"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537090001",
                    "problem_id": "833"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537189668",
                    "problem_id": "843"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/530522179",
                    "problem_id": "870"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534901942",
                    "problem_id": "889"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534937389",
                    "problem_id": "897"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/521328082",
                    "problem_id": "932"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440168205",
                    "problem_id": "934"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/534715434",
                    "problem_id": "1110"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/513860052",
                    "problem_id": "1143"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537015973",
                    "problem_id": "1146"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440197512",
                    "problem_id": "1287"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/536339235",
                    "problem_id": "1293"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440231036",
                    "problem_id": "1331"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/440580258",
                    "problem_id": "1475"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537240529",
                    "problem_id": "1610"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537050902",
                    "problem_id": "1937"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537064469",
                    "problem_id": "2007"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537212844",
                    "problem_id": "2013"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537096945",
                    "problem_id": "2034"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537055114",
                    "problem_id": "2096"
                },
                {
                    "url": "https://zhuanlan.zhihu.com/p/537264922",
                    "problem_id": "2115"
                }
            ];
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
        const solutionSchema = new mongoose.Schema({
            url: String,
            problem_id: Number
        });
    
        const Solution = await mongoose.model('Solution', solutionSchema);

        var solutions = await Solution.find();

        res.render('leetcode', {
            user: req.user,
            solutions: solutions
        });
    }

    
});

module.exports = router;