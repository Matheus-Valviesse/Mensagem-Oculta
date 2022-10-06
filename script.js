const c = ((e) =>{ return document.querySelector(e)})


let textEntrada = c('.input-entrada');
let textSaida = c('.input-saida');

let tipoDCrip = 'base64';
let aSerExe = `criptografar`;






c('.btn-base64').addEventListener('click', ()=>{
    c('.btn-cdc').classList.remove('select-btn');
    tipoDCrip = 'base64';
    c('.btn-base64').classList.add('select-btn');

    console.log(tipoDCrip)

});

c('.btn-cdc').addEventListener('click', ()=>{
    c('.btn-base64').classList.remove('select-btn');
    tipoDCrip = 'cifraDeCesar';
    c('.btn-cdc').classList.add('select-btn');

    console.log(tipoDCrip)
})


c('.btn-crip').addEventListener('click', ()=>{
  c('.btn-descrip').classList.remove('select-btn');
  aSerExe = 'criptografar';
  c('.btn-crip').classList.add('select-btn');
  mudarBTN()
  console.log(aSerExe)
})
c('.btn-descrip').addEventListener('click', ()=>{
  c('.btn-crip').classList.remove('select-btn');
  aSerExe = 'descriptografar'
  c('.btn-descrip').classList.add('select-btn');
  mudarBTN()
  console.log(aSerExe)
})

const mudarBTN = (()=>{
  if( aSerExe === 'criptografar'){
    c('.btn-result').value = 'Criptografar';
  }
  else if( aSerExe === 'descriptografar'){
    c('.btn-result').value = 'Descriptografar';
  }
})
mudarBTN()




let rotacao = 18;
let regex = /([^0-9a-zA-Z])/g



class cript{

    tipo(palavra,tipo,fazer){
      if(fazer === 'criptografar'){

          if(tipo === 'base64'){
            return btoa(palavra);
          }

          else if(tipo === 'cifraDeCesar'){

                let cri = "";
              
                let resultado;
              
                for (let i = 0; i < palavra.length; i++) {
              
                  let tabelaASC = palavra.charCodeAt([i]);
              
                  let primeiraLetra;
              
                  if (/[A-Z]/.test(palavra[i])) {
              
                    primeiraLetra = 65;
              
                  } else {
              
                    primeiraLetra = 97;
              
                  }
              
                  if ((tabelaASC >= 65 && tabelaASC <= 91) || (tabelaASC >= 97 && tabelaASC <= 123)) {
              
                    resultado = ((tabelaASC - primeiraLetra + rotacao) % 26 + primeiraLetra)
                  
                  } else {
                  resultado = palavra.charCodeAt(i)
                    
                  }
              
                  cri += String.fromCharCode(resultado);
                  
              
                }
                return cri;
          }

      }else if(fazer === 'descriptografar'){

          if(tipo === 'base64' ){
            return atob(palavra);
          }
    
          else if(tipo === 'cifraDeCesar'){
    
                let cri = "";
    
                let resultado;
    
                for (let i = 0; i < palavra.length; i++) {
                  
                  let tabelaASC = palavra.charCodeAt([i]);
    
                  let primeiraLetra;
    
                  if (/[A-Z]/.test(palavra[i])) {
    
                    primeiraLetra = 65;
    
                  } else {
    
                    primeiraLetra = 97;
    
                  }
    
                  if ((tabelaASC >= 65 && tabelaASC <= 91) || (tabelaASC >= 97 && tabelaASC <= 123)) {
                    let num = tabelaASC - primeiraLetra - rotacao;
    
                    let i = 0;
              
                    while (num < 0){
                    num +=26;
                    i++;
                    }
              
                    resultado = (num % 26) + primeiraLetra 
    
                  } else {
                    resultado = palavra.charCodeAt(i)
                    
                  }
    
                  cri += String.fromCharCode(resultado);
    
                }
    
                return cri
          }
        } 
    }
  
}

c('.btn-result').addEventListener('click', ()=>{
  let texto01 = new cript('');
  textSaida.innerHTML=(texto01.tipo(`${textEntrada.value}`, `${tipoDCrip}`, `${aSerExe}`));
})









