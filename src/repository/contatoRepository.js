import { conexao } from './connection.js';

export async function inserirTarefa(tarefa, ordem, finalizado, cadastro){
    const comando = `
                INSERT INTO tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, ds_cadastro) 
                    VALUES (?, ?, ?, ?);

    `

    const resp = await conexao.query(comando, [tarefa, ordem, finalizado, cadastro]);
    

    return resp;

}


export async function BuscarTarefas(){
    const comando = `
                select * from tb_tarefa

    `

    const [linhas] = await conexao.query(comando);
    return linhas;
    

}


export async function BuscarFinalizadas(){

    const comandofiltro = `
            select * from tb_tarefa
            where bt_finalizado = true
    

    `

    const [linfiltro] = await conexao.query(comandofiltro);
    return linfiltro


}


export async function alterarTarefas(id, tarefa){

    const comando = `
        UPDATE tb_tarefa
        set     ds_tarefa = ?,
                nr_ordem = ?,
                bt_finalizado = ?,
                ds_cadastro = ?
        WHERE id_tarefa = ?    

    
    `

    const [alterar] = await conexao.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro, id])
    return alterar.affectedRows

}


export async function excluirTarefa(id){
        const comando = `
                DELETE FROM tb_tarefa
                    WHERE   id_tarefa = ?

        
        `;

        const [resposta] = await conexao.query(comando, [id]);
        return resposta.affectedRows;


}