const moment = require('moment');

const conexao = require('../infraestrutura/conexao')
class Atendimento{
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?';

        conexao.query(sql, atendimentoDatado, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(201).json(atendimentoDatado);
            }
        })

    }

    lista(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(201).json(resultados);
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos where id = ${id}`;

        conexao.query(sql, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                const atendimento = resultados[0];
                res.status(200).json(atendimento);
            }
        })
    }

    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id = ?'

        conexao.query(sql,  [valores, id], (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json(valores);
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id = ?'
        conexao.query(sql, id, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json({id});
            }
        })
    }
}

module.exports = new Atendimento;