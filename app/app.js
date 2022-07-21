console.log("olá mundo!");

const log = [{log: "alfredo", key: "1234", cn: "Alfredo Gutemberg", bd: "12081985", ct: "Fortaleza"}, {log: "eduardo", key: "1807", cn: "Eduardo Bernardi Amaral", bd: "18071990", ct: "Iraí"}, {log: "teste", key: "teste", cn: "Teste da Silva", bd: "20072022", ct: "westeros"}];


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
        return usuario.log == user;
    }
    if(i>=0){
        if(psw==log[i].key){
            window.location="profile.html";
            localStorage.setItem('x', i)
        } else{
            window.alert("Usuário ou senha inválido");
        }
    } else {
        window.alert("Usuário ou senha inválido");
    }
}

function Enviar() {
    user = $("#user").val();
    i = log.findIndex(vlog);
    function vlog (usuario){
        return usuario.log == user;
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
            let novo = {log: user, key: psw, cn: cname, bd: bdate, ct: city};
            log.push(novo);
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
        $("#cname").append(log[f].cn);
        $("#bdate").append(log[f].bd);
        $("#city").append(log[f].ct);
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
