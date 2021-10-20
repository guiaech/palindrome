function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var matriz = []
for (var i = 0; i < 10000; i++) {
    var item = makeid(4);
    matriz.push(item)
}
console.log(matriz)

const isPalindrome = (text) => {
    const palindrome = text.split('')
        .reverse()
        .join('');
    return palindrome == text ? 1 : 0;
}

var cont = 0
let contador = matriz.map(function (contado) {
    let is = isPalindrome(contado)
    is == 1 ? cont = cont + 1 : cont = cont
})
cont = cont - 1

console.log(cont,"pallidrome(s) were created")