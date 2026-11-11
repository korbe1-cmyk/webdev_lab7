function init() {
  const button = document.getElementById("entrybutton");

  button.addEventListener("click", function() {
    const message = document.getElementById("entryinput").value;

    alert("Kyle: " + message);

    document.getElementById("textoutput").textContent = message;
  });
}

window.addEventListener("load", init);