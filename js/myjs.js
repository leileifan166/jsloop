var numbers = prompt('クラスの人数を入力してくだい');
var totalscore = 0;
var average1 = 0;
for(i = 1; i <= numbers; i++){
    var score = prompt(`${i}人目の学生の成績を入力してくだい`);
    totalscore = totalscore + parseFloat(score);

}
console.log(totalscore);
average1 = totalscore / numbers;
console.log(average1);


console.log('🦋🦋🦋🦋🦋');

for(i = 1; i <= 5; i++){
    console.log('🦋');
}


var str ='';
for(var j = 1; j <= 5; j++){
    for(var i = 1; i <= 5; i++){
    str = str + '🦋';
    }
}
console.log(str);
