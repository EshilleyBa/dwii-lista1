const express = require ('express');
const app = express ();
const bodyparser = require ('body-parser');
const ejs = require ('ejs');


app.set ('view engine', 'ejs')


app.use(bodyparser.urlencoded({extend: true}));

 req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    const pais = req.body.pais;
app.get('/', (req,res) =>{
    res.render('formulario');
});

app.post('/', (req, res)=> {

    res.render('usuario', {nome: nome, sobrenome: sobrenome, idade: idade, pais: pais});
});



app.listen (3000,()=>{console.log('Tá funcionando')})

