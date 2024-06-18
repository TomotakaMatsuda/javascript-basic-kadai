//1~100までをランダムに出力
let num = Math.floor(Math.random() * 100) + 1;

//3の倍数かどうか判定
if (num % 3 === 0 && num % 5 === 0) {
    console.log('%d'+'は3と5の倍数です', num);
}
else if (num % 3 === 0) {
    console.log('%d'+'は3の倍数です',num);
}
else if (num % 5 === 0) {
    console.log('%d'+'は5の倍数です', num);
}
else {
    console.log(num);
}
