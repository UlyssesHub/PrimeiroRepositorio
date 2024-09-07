import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Função para conectar ao banco e obter os dados
def obter_usuarios():
    # Conectar ao banco de dados SQLite3
    connect = sqlite3.connect("banco_de_dados.db")
    cursor = connect.cursor()

    # Executa a consulta
    cursor.execute("SELECT * FROM Usuarios")

    # Recupera todos os resultados da consulta
    resultados = cursor.fetchall()

    # Fecha a conexão com o banco de dados
    connect.close()

    # Transforma os resultados em uma lista de dicionários
    usuarios = [{"id": item[0], "nome": item[1]} for item in resultados]

    return usuarios

# Rota para fornecer os dados
@app.route('/dados', methods=['GET'])
def dados():
    return jsonify(obter_usuarios())

if __name__ == '__main__':
    print("")
    print("Ta on!!!")
    app.run(port=3001)
