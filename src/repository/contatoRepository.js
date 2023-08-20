import conexao from "./connection";

export async function inserirTarefa(){
    let sql = 'select * from tb_tarefa';

    let resp = await conexao.query(sql);
    let dados = resp(0);

    return dados;
}

export async function inserir(tarefa){
    let comando = `
    INSERT INTO tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, ds_cadastro) 
                  VALUES (?, ?, ?, ?, ?, ?);
  `

  let resp = await conexao.query(comando, [nome, chamada, turma, ano, genero, nascimento]);
  let info = resp[0];
  return info;


}

return inserirTarefa;
