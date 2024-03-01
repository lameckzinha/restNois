function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
  }
  
  function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if (nome && nome.trim() !== "") {
      div.style.display = "block";
      document.getElementById("exampleFormControlInput1").style.background =
        "none";
    } else {
      document.getElementById("error").style.display = "flex";
    }
  }
  
  function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background =
      "lightpink";
  }
  
  function calcularTotal() {
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");
  
    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;
  
    switch (selectPratos.value) {
      case "Strogonoff de carne":
        total += 20.00;
        prato = 20.00;
        break;
      case "Frango a milanesa + Acompanhamentos":
        total += 17.00;
        prato = 17.00;
        break;
      case "Macarrão ao molho branco":
        total += 23.00;
        prato = 23.00;
        break;
    }
  
    switch (selectBebidas.value) {
      case "Sucos":
        total += 8.00;
        bebida = 8.00;
        break;
      case "Agua":
        total += 3.20;
        bebida = 3.20;
        break;
      case "Refrigerante":
        total += 7.00;
        bebida = 7.00;
        break;
    }
  
    switch (selectSobremesas.value) {
      case "Petit Gateau":
        total += 20.00;
        sobremesa = 20.00;
        break;
      case "Banana Split":
        total += 22.00;
        sobremesa = 22.00;
        break;
      case "Milkshake":
        total += 17.00;
        sobremesa = 17.00;
        break;
    }
  
    document.getElementById("total").style.display = "flex";
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
  
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
  }
  
  function limpar() {
    document.getElementById("total").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectPrato").value = "Selecione um prato";
    document.getElementById("selectBebida").value = "Selecione uma bebida";
    document.getElementById("selectSobremesa").value = "Selecione uma sobremesa";
  }
