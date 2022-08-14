console.log("perfil");

// fetch('https://reqres.in/api/users')
//         .then(resp => resp.json())
//         .then((dados) => {
//             const log = dados.data;
//             console.log(log);  //está aqui apenas para saber o nome dos usuários


function Profile() {
    if(localStorage.length>0) {
        fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then((dados) => {
            const log = dados.data;
            console.log(log);  //está aqui apenas para saber o nome dos usuários

                let f = localStorage.getItem('x');
                $("#avtr").attr("src", log[f].avatar)
                $("#nc").append(log[f].first_name," ", log[f].last_name);
        })
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