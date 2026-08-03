function analyze() {

let views = Number(document.getElementById("views").value);
let likes = Number(document.getElementById("likes").value);
let comments = Number(document.getElementById("comments").value);
let shares = Number(document.getElementById("shares").value);

if (!views) {
    document.getElementById("result").innerHTML =
    "Please enter views";
    return;
}

let likeRate = (likes / views) * 100;
let commentRate = (comments / views) * 100;
let shareRate = (shares / views) * 100;


let score = 50;

if (likeRate > 5) {
    score += 20;
}

if (commentRate > 1) {
    score += 15;
}

if (shareRate > 0.5) {
    score += 15;
}

if(score > 100){
    score = 100;
}


let advice = "";

if(score >= 90){
    advice = "🔥 爆款潜力高，可以继续复制这个结构";
}
else if(score >= 70){
    advice = "👍 有潜力，加强前3秒Hook";
}
else{
    advice = "⚠️ 建议重新优化开头和卖点";
}


document.getElementById("result").innerHTML =
"Viral Score: " + score + "/100<br><br>" + advice;

      }
