const express = require ('express');
const bodyparser = require ('Body-Parser');
const ejs = require ('ejs');
const app = express ();


app.set ('view engine', 'ejs')

app.use(bodyparser.urlencoded({extend: true}));

app.get('/', (req,res) =>{
    res.render('formulario');
});



app.post('/', (req, res)=> {
    const idade = req.body.idade;
let FaixaEtaria = '';
    if (idade >=0 && idade <= 15){
        FaixaEtaria= 'criança';
    } else if (idade >= 16 && idade <= 30) {
        FaixaEtaria = 'Jovem';
      } else if (idade >= 31 && idade <= 60) {
        FaixaEtaria = 'Adulto';
      } else if (idade >= 61) {
        FaixaEtaria = 'Idoso';
    }

    res.render('FaixaEtaria', {idade: idade, FaixaEtaria: FaixaEtaria});
});




app.listen (3000,()=>{console.log('Tá funcionando')})
