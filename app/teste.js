console.log("teste");

var nme = "Eduardo";

$("#nome").append(nme);



fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(dados => {
        console.log(dados.data);
        const login = dados.data;
        console.log(login);
})