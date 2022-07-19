console.log("olá mundo!");

const log = ["teste", "edu", "AlfGP"];
const key = ["teste", "1807", "1901"];
const cn = ["teste", "Eduardo Bernardi Amaral", "Alfredo Gutemberg"];
const bd = ["teste", "18071990","12081985" ];
const ct = ["teste", "Iraí","Fortaleza" ];


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
            window.alert("A senha e a confirmação de senha devem ser iguais");
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
