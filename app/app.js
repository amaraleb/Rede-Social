console.log("olá mundo!");

const log = ["mesmo", "teste", "outro", "edu"];
const key = ["mesmo", "teste", "outro", "1807"];
const cn = ["mesmo", "teste", "outro", "Iraí"];
const bd = ["mesmo", "teste", "outro", "18071990"];
const ct = ["mesmo", "teste", "outro", "1807"];


var user;
var psw;
var cname;
var bdate;
var city;


function Entrar() {
    user = $("#user").val();
    psw = $("#psw").val();
    i = log.findIndex(vlog);
    function vlog (usuario){
        return usuario == user;
    }
    if(i>=0){
        if(psw==key[i]){
            window.location="profile.html";
            element.innerHTML = '<b>Hello World!</b>'
        } else{
            window.alert("Senha inválida");
        }
    } else {
        window.alert("Usuário inválido");
    }
}

function Enviar() {
    user = $("#user").val();
    i = log.findIndex(vlog);
    function vlog (usuario){
        return usuario == user;
    }
    if(i>=0){
        window.alert("Usuário já cadastrado");
    } else {
    cname = $("#cname").val();
    bdate = $("#bdate").val();
    city = $("#city").val();
    psw = $("#psw").val();
    log.push(user);
    cn.push(cname);
    bd.push(bdate);
    ct.push(city);
    key.push(psw);
    window.alert("Usuário cadastrado com sucesso!");
    window.location.href="index.html";
    }  
}
