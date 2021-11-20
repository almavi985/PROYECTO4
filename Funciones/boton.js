
const llenar = document.getElementById('llenar');
//codigo para introducir datos y que se visualicen en el sources
llenar.addEventListener('submit', e => {
    
    e.preventDefault();

    const nom = llenar['name'].value;
    const correo = llenar['email'].value;
    const tel = llenar['tel'].value;
    const com = llenar['msj'].value;

//indica que se guardo
window.alert('Sus datos han sido almacenados exitosamente, espere nuestra llamada');
    console.log(nom, correo, tel, com);
    limpiar();
})
let name=document.getElementById('name');
let email=document.getElementById('email');
let tel=document.getElementById('tel');
let msj=document.getElementById('msj');
function limpiar() {//limpia los labels
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
    document.getElementById("msj").value="";
  }