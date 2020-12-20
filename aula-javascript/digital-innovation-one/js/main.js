function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>"
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
    }
function redirecionar (){
    window.open("https://www.facebook.com/");//abre o link em outra janela.
    window.location.href = "https://www.facebook.com/";//abre o link na mesma janela.
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
}

function load(){
    alert("pág. 100%");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}
*/

/*var nome ="Plínio Oliveira";
var idade = 41;
var idade2 = 10;
var n1 =5;
var n2 =2;
var frase = "Japão tem o melhor time do mundo.";
alert("meu promeiro js");
alert("Bom vindo "+nome);
alert(nome+ " tem "+ idade + " anos.");
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
alert(n1*n2);
var lista = ["maçã","pêra","leranja"];
lista.push ("uva"); //add a uva na lista.
//lista.pop (); //o pop remove o ultimo da lista.
console.log(lista.length);// como no JAVA, mostra o tamanho da lista
console.log(lista);//Mosta os ítens da lista.
console.log(lista.reverse());// deixa a lista ao contrário.
console.log(lista.toString());// Ele troca para String tirando a refência de array. Como se fosse uma variável só com esses ítens.
//no exemplo, ele mostra que quando converte para string, ele mas mostrar a primeira letra.
console.log(lista.toString()[0]);
console.log(lista.join(" - "));//O join transforma em string e coloca um marcador onde ele junta as arrays.
console.log(lista.join(" | "));
console.log(lista.join(" # "));
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"verde"}];
console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

var idade = prompt("Qual sua idade?");// O comando prompt, faz uma pergunta como o Scanner do Java.
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
console.log(idade);

var cont = 0;

while (cont < 5){
    console.log(cont);
    cont++;
}

var cont;

for (cont=0;cont<5;cont++) {
    console.log(cont);
}


function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);

}

alert(setReplace("Vai Japão","Japão","Brasil"));


var validar=0;
function validaIdade (idade){
    if (idade >= 18){
    return validar = true;
    }else{
        return validar = false;
    }
    
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);


*/