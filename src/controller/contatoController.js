import { inserirTarefa, BuscarTarefas, BuscarFinalizadas, alterarTarefas, excluirTarefa } from "../repository/contatoRepository.js";

import { Router } from "express";

const server = Router();


server.delete('/tarefa/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await excluirTarefa(id);
        if (resposta != 1)
            throw new Error('Tarefa não pode ser removida')
        
        resp.status(204).send();

    }

    catch (err) {
            resp.status(400).send({
                erro: 'ERRO AQUI'
            })

        }

    })


server.put('/tarefa/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const tarefa = req.body;


        const resposta = await alterarTarefas(id, tarefa);
        if (resposta != 1)
            throw new Error('Tarefa não pode ser alterada')
        else
            resp.status(204).send();
    }

    catch (err) {
        resp.status(400).send({
            erro: 'ERRO AQUI'
        })

    }


})


server.get("/tarefa/finalizadas", async (req, resp) => {
    try {
        const respostafill = await BuscarFinalizadas();
        resp.send(respostafill);
    }

    catch (err) {
        resp.status(400).send({
            erro: 'ERRO AQUI'
        })

    }


})


server.get("/tarefa", async (req, resp) => {

    try {
        const resposta = await BuscarTarefas();
        resp.send(resposta)
    }

    catch (err) {
        resp.status(400).send({
            erro: 'ERRO AQUI'
        })

    }



})



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