console.log("olá mundo!");

const log = ["mesmo", "teste", "outro", "edu"];
const key = ["mesmo", "teste", "outro", "1807"];
const cn = ["mesmo", "teste", "outro", "Eduardo Bernardi Amaral"];
const bd = ["mesmo", "teste", "outro", "18071990"];
const ct = ["mesmo", "teste", "outro", "Iraí"];


var user;
var psw;
var cname;
var bdate;
var city;
var cpsw


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
            localStorage.setItem('x', i)
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
        cpsw = $('#cpsw').val();
        if(psw == cpsw) {
            log.push(user);
            cn.push(cname);
            bd.push(bdate);
            ct.push(city);
            key.push(psw);
            window.alert("Usuário cadastrado com sucesso!");
            window.location.href="index.html";
        } else {
            window.alert("Confirmação da senha diferente da senha");
        }
    }  
}

function Perfil() {
    if(localStorage.length>0) {
        let f = localStorage.getItem('x');
        $("#cname").append(cn[f]);
        $("#bdate").append(bd[f]);
        $("#city").append(ct[f]);
    } else {
        window.location.href="index.html";
    }
}

function Clean() {
    localStorage.clear();
    window.location.href="index.html";
}

function Refresh(){
    window.location.reload();
  }