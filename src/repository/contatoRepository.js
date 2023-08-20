import { conexao } from './connection.js';

export async function inserirTarefa(tarefa, ordem, finalizado, cadastro){
    const comando = `
                INSERT INTO tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, ds_cadastro) 
                    VALUES (?, ?, ?, ?);

    `

    const resp = await conexao.query(comando, [tarefa, ordem, finalizado, cadastro]);
    

    return resp;

}