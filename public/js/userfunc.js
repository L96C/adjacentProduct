const fillForm = () => {
  let nb = document.getElementById("nbvalues").value
  let string = ''
  if(nb>500) {document.getElementById("formtofill").value = "Number of values should be under 500"}
  else {
    for(i=1;i<=nb;i++)
      string+=(Math.trunc(Math.random()*10)).toString()
      document.getElementById("formtofill").value = string
}}

// Enter key

window.onload = () => {
  document.getElementById('nbvalues').onkeydown = (e) => {
    if(e.keyCode == 13) fillForm()
  };
  document.getElementById('nbfactors').onkeydown = (e) => {
    if(e.keyCode == 13) {
      document.getElementById('mainform').submit()
    }
  };
}