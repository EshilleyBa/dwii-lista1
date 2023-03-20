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
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;
    const Media = ((2 * nota1) + (5 * nota2)+(3 * nota3))/ (10)

    let Classificacao =''
    if (Media >=0 && Media <= 5){
        Classificacao= 'F';
    }else if  (Media >=5.1 && Media <= 6){
        Classificacao= 'E';
    }else if  (Media >=6.1 && Media <= 7){
        Classificacao= 'D';
    }else if  (Media >=7.1 && Media <= 8){
        Classificacao= 'C';
    }else if  (Media >=8.1 && Media <= 9){
        Classificacao= 'B';   
    }else if  (Media >=9.1 && Media <= 10){
        Classificacao= 'A';
    }






    res.render('media', {Media: Media, Classificacao: Classificacao});
});




app.listen (3000,()=>{console.log('Tá funcionando')})
