const fillForm = () => {
  let nb = document.getElementById("nbvalues").value
  let string = ''
  for(i=1;i<=nb;i++)
    string+=(Math.trunc(Math.random()*10)).toString()
  document.getElementById("formtofill").value = string
}

if(serie) {
  document.getElementById("formtofill").value = serie
}