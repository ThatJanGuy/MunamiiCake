function mouseOverNav(){
    let input = this.textContent;
    this.textContent = '>' + input;
}

function mouseOutNav(){
    let input = this.textContent;
    this.textContent = input.slice(1);
}

function gdprCheck() {
    var checkBox = document.getElementById("gdprCheckbox");
    var text = document.getElementById("submitButton");
  
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
}
  