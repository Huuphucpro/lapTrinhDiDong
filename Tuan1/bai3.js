let Dophins = [97, 101, 112];
let Koalas =  [109, 95, 106];

let totalDophins = Dophins.reduce((iniValue, score) => {
    return iniValue += score;
});
let avgScoreDophins = totalDophins/Dophins.length;
console.log(avgScoreDophins);

let totalKoalas = Koalas.reduce((iniValue, score) => {
    return iniValue += score;
});
let avgScoreKoalas = totalKoalas/Koalas.length;
console.log(avgScoreKoalas);

//2

if (avgScoreDophins > avgScoreKoalas && avgScoreDophins > 100) {
    console.log("avgScoreDophins win!!!");
} else if(avgScoreKoalas > avgScoreDophins && avgScoreKoalas > 100) {
    console.log("avgScoreKoalas win!!!");
} else if (avgScoreDophins == avgScoreKoalas && avgScoreDophins > 100 && avgScoreKoalas > 100){
    console.log("Equal!!");
}else{
    console.log("All score <100");
}