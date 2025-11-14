import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const obj = [
  { "id": 1, "nome": "Teclado Mecânico", "categoria": "periferico", "preco": 350.0 },
  { "id": 2, "nome": "Mouse Gamer", "categoria": "periferico", "preco": 220.0 },
  { "id": 3, "nome": "Monitor 24", "categoria": "video", "preco": 900.0 },
  { "id": 4, "nome": "Cadeira Gamer", "categoria": "mobilia", "preco": 1200.0 },
  { "id": 5, "nome": "Notebook", "categoria": "computador", "preco": 3500.0 },
  { "id": 6, "nome": "Headset", "categoria": "audio", "preco": 280.0 },
  { "id": 7, "nome": "Caixa de Som", "categoria": "audio", "preco": 150.0 },
  { "id": 8, "nome": "Webcam", "categoria": "video", "preco": 190.0 },
  { "id": 9, "nome": "HD Externo", "categoria": "armazenamento", "preco": 400.0 },
  { "id": 10, "nome": "SSD 1TB", "categoria": "armazenamento", "preco": 520.0 },
  { "id": 11, "nome": "Mousepad", "categoria": "periferico", "preco": 70.0 },
  { "id": 12, "nome": "Gabinete", "categoria": "computador", "preco": 430.0 }
];

app.get('/produtos/filtro', (req,res) => {

    const categoria = req.query.categoria;
    const preco_max = req.query.preco_max;
    const preco_min = req.query.preco_min;

    let ObjAux = obj;

    if(categoria){
        ObjAux = ObjAux.filter(produto => categoria.toLowerCase() == produto.categoria);
    }
    if(preco_max){
        ObjAux = ObjAux.filter(produto => produto.preco <= preco_max);
    }
    if(preco_min){
        ObjAux = ObjAux.filter(produto => produto.preco >= preco_max);
    }
    res.json(ObjAux);
});

app.listen(port, ()=>{
    console.log(`Rodando na porta: ${port}`);
});