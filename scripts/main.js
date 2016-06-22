var meuObjeto ={
  nome: "objeto1",
  valor: "vermelho"
}

function areaQuadrado(lado1,lado2){
  var area = lado1 * lado2;
  return area;
}

var meuVetor = [1,2,3];
console.log(meuObjeto);

Array.prototype.findByIndex = function (id) {
  return this[id];
};

const minhaConst = 5;

var mostraMensagemComLet = function functionName() {
    for (let i = 0; i < 5; i++) {
      setTimeout(function(){
        console.log(i);
      },500);
    }
}
var minhaStringES6 = `${mostraMensagemComLet}`
