const tagBody = document.querySelector("body")
const tagMain = document.createElement("main")
const tagUl = document.createElement("ul")
const tagBtnFinalizar = document.createElement("button")
const tagSection = document.createElement("section")

const tagH1 = document.createElement("h1")
const tagDiv = document.createElement("div")
const tagH2 = document.createElement("H2")
const tagh2 = document.createElement("h2")


tagBtnFinalizar.innerText = "Finalizar"
tagH1.innerText =  "Virtual Market"
tagH2.innerText  =  "Item"
tagh2.innerText = "Valor"



var products = [
    {
        nome:"agua", 
        preco: 5
    }, 
    {
        nome: "pão", 
        preco: 2
    },
    {
        nome:"café",
        preco: 10
    }
]
var soma = 0

//1) Obtendo dados dos produtos
function obterDadosProdutos(arr, node){
    for(let i = 0; i < arr.length; i++){
        const tagLI = document.createElement("li")
        const tagNome = document.createElement("p")
        const tagPreco = document.createElement("p")
        tagNome.innerText  = arr[i].nome
        tagPreco.innerText = arr[i].preco
        tagLI.append(tagNome, tagPreco)
        node.appendChild(tagLI)
        
        soma += arr[i].preco
    }
    return soma
}
console.log(obterDadosProdutos(products, tagUl))

tagSection.append(soma, tagBtnFinalizar)
tagDiv.append(tagH2, tagh2)
tagMain.append(tagDiv, tagUl, tagSection)
tagBody.append(tagH1, tagMain)