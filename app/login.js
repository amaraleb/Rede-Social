console.log("login");


var user;
var psw;


function Enter() {
    user = $("#user").val();
    psw = $("#psw").val();
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
                if(psw==log[i].first_name){
                    window.location="profile.html";
                    localStorage.setItem('x', i)
                } else{
                    window.alert("Usuário ou senha inválido");
                    
                }
            } else {
                window.alert("Usuário ou senha inválido");
            }
        })   
    }