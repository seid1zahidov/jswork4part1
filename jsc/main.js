var monthvalidate=document.querySelector(".monthvalidate")

function Click(){
var mebleg = document.getElementById('ayliq').value
var faiz = document.getElementById('faiz').value
var mebleq = parseFloat(mebleg)
var faizz = parseFloat(faiz)
var option = document.getElementById('option').value
var options = parseInt(option)


var faizmebleg = faizz / (options * 100)
var kesrup = mebleq * faizmebleg

var kesrdown = (1 + faizmebleg)


var down = Math.pow(kesrdown,12)
var ayliqodenis = kesrup / down
var span = document.getElementById('ayliqh1')
span.innerHTML = ayliqodenis.toFixed(3) * 10

var umumimebleg
umumimebleg += ayliqodenis
var span1 = document.getElementById('umumih1')
span1.innerHTML = umumimebleg
if(option == " "){
    monthvalidate.style.display="block"
}else{
    monthvalidate.style.display="none"
 
}
}
