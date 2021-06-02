// requête GET importation des données
const list = document.getElementById('list');

function add_data() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var res = this.response;
      console.log(this.response);
      //console.log(JSON.parse(this.responseText));
      afficher(res);
    }
  };
  xmlhttp.open("GET", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees');
  xmlhttp.responseType = 'json';
  xmlhttp.send();
}


function createBtns(className, text) {
  const btnElement = document.createElement('button');
  btnElement.innerHTML = text;
  btnElement.setAttribute('class', className);
  return btnElement;
}

add_data();

//lecture des données
function afficher(res) {
  for (i = 0; i < res.length; i++) {

    let li = document.createElement('li');
    let a = document.createTextNode(res[i].id);
    let b = document.createTextNode(res[i].name);
    let c = document.createTextNode(res[i].last_name);

    li.appendChild(a);
    li.appendChild(b);
    li.appendChild(c);
    list.appendChild(li);

    const btn = createBtns('edit btn btn-primary', 'ViewMore');
    btn.addEventListener('click', () => {
      display_modal(btn.id)
    });
    btn.id = res[i].id;
    li.appendChild(btn);
  }

  //requête GET (viewmore id) //
  function display_modal(id, dlte) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var modal = this.response;
        viewmore(modal);
      }
    };
    xmlhttp.open("GET", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/' + id);
    xmlhttp.responseType = 'json';
    xmlhttp.send()




  }



  let modal = document.querySelector(".modal");
  console.log(modal);

  //var name = document.getElementById("newName").value;
  //var lastName = document.getElementById("newLastName").value;
  //var jobTitle = document.getElementById("newJobTitle").value;
  //var email = document.getElementById("newEmail").value;

  function editemp() {
    console.log(editemp)
    const li = event.target.parentNode;
    const b = li.querySelector('.name');
    const name = b.innerText;
    const id = li.id;
    var x = prompt('Modifier le nom', b);
    if (x !== '') {
      const newData = {
        a: id,
        b: name,
        c: last_name,
        d: job_title,
        e: email,

      };
      const listItem = createMyLi(newData, null);

      li.replaceWith(editemp);
    }


  }
  //requête modifier PUT
  function modifier() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var res = this.response;
        console.log(this.response);
        //console.log(JSON.parse(this.responseText));
        afficher(res);
      }
    };
    xmlhttp.open("PUT", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees');
    xmlhttp.responseType = 'json';
    xmlhttp.send();
  }
}



function viewmore(res) {
  const btnDelete = createBtns('delete btn btn-danger', 'Supprimer');
  btnDelete.addEventListener('click', () => {
    dlte(btnDelete.id)
    const btnEdit = createBtns('edit btn btn-primary', 'Modifier');
    btnEdit.addEventListener('click', editemp)
  });

  let li = document.createElement('li');
  let a = document.createTextNode(res.id);
  let b = document.createTextNode(res.name);
  let c = document.createTextNode(res.last_name);
  let d = document.createTextNode(res.job_title);
  let e = document.createTextNode(res.email);


  li.appendChild(a);
  li.appendChild(b);
  li.appendChild(c);
  li.appendChild(d);
  li.appendChild(e);
  li.appendChild(btnDelete)
  list.appendChild(li);

  btnDelete.addEventListener('click', dlte)

  function btnDel(ID, e) {

    var confirmAsk = confirm("Êtes-vous sûr ?");

    if (confirmAsk) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                display(JSON.parse(this.responseText));
                e.parentElement.parentElement.remove();
                alert("l'employé a été supprimé")
            }  else if(this.status === 404 && this.readyState === 4)
            {
                alert("An error occur please refresh");
            }
            
        };
        xhr.open("DELETE", url + ID, true);
        xhr.send();
    }

}



const btn = createBtns('edit btn btn-primary', 'btn_mdfier');
btn_mdfier.addEventListener('click', () => {
  display_modal(btn.id)
});
btn.id = res[i].id;
li.appendChild(btn_mdfier);

function modifier_data(btn_mdfier) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var res = this.response;
      console.log(this.response);
      //console.log(JSON.parse(this.responseText));
      afficher(res);
    }
  };
  xmlhttp.open("POST", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees');
  xmlhttp.responseType = 'json';
  xmlhttp.send();
}
console.log(document.forms ["inscription"]['list']);
//document.getElementById("inscription").addEventListener("submit", function (e){

var inputs = document.getElementsByTagName("input");
console.log(inputs)

for (var i = 0; i < inputs.length; i++) {
  if (!inputs[i].value) {
    erreur = "Veuillez renseigner tous les champs";
  }
}
// var nom = document.getElementById("nom");
// var prénom = document.getElementById("prénom");
//var mail = document.getElementById("mail");



alert('Formulaire envoyé!');
}
