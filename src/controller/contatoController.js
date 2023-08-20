import { inserirTarefa } from "../repository/contatoRepository.js";
import { Router } from "express";

const server = Router();


server.post("/tarefa", async (req, resp) => {

    try {
        const { tarefa, ordem, finalizado, cadastro } = req.body;

       const resposta = await inserirTarefa(tarefa, ordem, finalizado, cadastro);

       resp.send(resposta);
    
    }

    catch (err) {
        resp.status(400).send({
            erro: 'ERRO AQUI'
        })
    
    }

})

export default server