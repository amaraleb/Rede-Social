console.log("cadastro");

var user;
var psw;
var fname;
var lname;
var cpsw

function Enviar() {
    user = $("#user").val();
    fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then((dados) => {
            const log = dados.data;
            console.log(log);  //está aqui apenas para saber o nome dos usuários

            i = log.findIndex(vlog);
            function vlog (usuario){
                return usuario.email == user;
            }
        if(i>=0){
            window.alert("Usuário já cadastrado");
        } else {
            fname = $("#fname").val();
            lname = $("#lname").val();
            psw = $("#psw").val();
            cpsw = $('#cpsw').val();
            if(psw == cpsw) {
                const novo = {first_name: fname, last_name: lname, email: user};
                log.push(novo);
                const option = {
                    method: 'post',
                    body: JSON.stringify(novo),
                    headers: {
                        'content-type':'application/json'
                    }
                };
                fetch('https://reqres.in/api/users', option)
                .then((resp)=> console.log({resp}));
                window.alert("Usuário cadastrado com sucesso!");
                window.location.href="index.html";
            } else {
                window.alert("A senha e a confirmação de senha devem ser iguais");
            }
        }
    })  
}