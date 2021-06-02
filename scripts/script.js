const valores = [2.30, 2.40, 2.50, 2.20];

function calcular(){

const trunfas = 'Acima de 10 Trufas 🍬';
const fretes = 'Frete grátis!👍';
const separador=' - ';

const BombomMorango = document.getElementById('valor');
const BombomCoco = document.getElementById('valor1');
const BombomChocolate = document.getElementById('valor2');
const BombomMaracuja = document.getElementById('valor3');


  const morango = BombomMorango.value;
  const coco = BombomCoco.value;
  const chocolate = BombomChocolate.value;
  const maracuja = BombomMaracuja.value;


  const TotalBBmorango = morango * valores[0] ; 
  const TotalBBcoco = coco * valores[1] ; 
  const TotalBBchocolate = chocolate * valores[2] ; 
  const TotalBBmaracuja = maracuja * valores[3] ; 


const total = TotalBBmorango + TotalBBcoco + TotalBBchocolate + TotalBBmaracuja
document.getElementById('total').innerHTML = `<p>R$${total.toFixed(2)}<p>`;


if(total >= 10){
  document.getElementById('parabens').innerHTML=' Parabéns, sua compra tem frete grátis !';
  document.getElementById('parabens').style.backgroundColor='#a2f083dd';

}else{
  return setTimeout(()=>{
          alert(trunfas + separador + fretes);
},2000) }

}

