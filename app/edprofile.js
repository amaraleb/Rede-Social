console.log("edprofile");


function Editprofile() {
    fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then((dados) => {
            const log = dados.data;
            console.log(log);  //está aqui apenas para saber o nome dos usuários
            if(localStorage.length>0) {
                let f = localStorage.getItem('x');
                document.getElementById('cname').value=(log[f].first_name);
                document.getElementById('bdate').value=(log[f].last_name);
                document.getElementById('city').value=(log[f].email);
                $("#avtr").attr("src", log[f].avatar)
            } else {
                window.location.href="index.html";
            }
        })
}

function Update() {
    user = $("#user").val();
    fname = $("#fname").val();
    lname = $("#lname").val();
    const novo = {first_name: fname, last_name: lname, email: user};
    
    const option = {
        method: "PUT",
        body: JSON.stringify(novo),
        headers: {
            'content-type':'application/json'
        }
    };
    let f = localStorage.getItem('x');
    
    fetch(`https://reqres.in/api/users/${f}`, option)
    .then((resp)=> console.log({resp}));
    window.alert("Usuário editado com sucesso!");
    window.location.href="profile.html";



}

function Clean() {
    localStorage.clear();
    window.location.href="index.html";
}