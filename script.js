var ChooseCountry="";
var ChoosePlan="";
var cost=0;
var plan=0;
var addvalue=1;
var flag=0;
var print_val="";

function Value()
{
    console.log("Comienza")
    choosecountry();
    chooseplan();
    cost_final=cost*addvalue;
    print_val="$ "+cost_final; 
    document.getElementById("change_value").style.color="white";
    document.getElementById("change_value").textContent=print_val;
    
    console.log(cost)
    console.log(print_val)
    console.log("Final")


    
}
function choosecountry()
{
    ChooseCountry=document.getElementById("Travel");
    switch (ChooseCountry.value)
    {
    case "Canada" : cost=2000;break;
    case "Colombia" : cost=2500;break;
    case "Vietnam" : cost=4000;break;
    case "Thailand" : cost=4500;break;
    default:cost=0;break;
    }
    
}
function chooseplan()
{
    ChoosePlan=document.querySelector('input[name="choose"]:checked').value;

    switch (ChoosePlan)
    {
        case "Medium": addvalue=1.2;break;
        case "Premium": addvalue=1.4;break;
        case "Deluxe": addvalue=1.8;break;
        default: addvalue=1.0;break;

    }
    
}
function agregarPersona() {
    // Obtener los valores ingresados en el formulario
    var nombre = document.getElementById('name').value;
    var telefono = document.getElementById('Phone').value;
    var direcc = document.getElementById('Adress').value;
    var emailc= document.getElementById('Emailc').value;
    var email_var=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email_var.test(emailc))
    {
        alert("wrong data Try Again format name@example.com");
       
       
    }
    
    if(direcc==""||telefono==""||nombre==""||emailc=="") alert("wrong inputs try again")
    else
    {

        var fila = "<tr><td>" + nombre + "</td><td>" + telefono + "</td><td>" + direcc + "</td><td>" +emailc + "</td><td>"+ ChooseCountry.value + "</td><td>"+ChoosePlan +"</td><td>"+print_val+"</td></tr>";

      
        document.getElementById('datos').innerHTML += fila;
        document.getElementById('datos').style.color="white"

        document.getElementById('formulario').reset();


    }


}