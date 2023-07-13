document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var tel = document.getElementById("tel").value;
    
    console.log(nome + " " + tel);
    
    var tabela = document.getElementById("contatos");
    var linha = tabela.insertRow(1);
    var tnome = linha.insertCell(0);
    var ttel = linha.insertCell(1);
    

    tnome.innerHTML = nome;
    ttel.innerHTML = tel; 
 
    document.getElementById("nome").value = "";
    document.getElementById("tel").value = "";
});