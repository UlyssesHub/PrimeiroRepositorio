from flask import Flask, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'usuario1'
app.config['MYSQL_PASSWORD'] = '123456'
app.config['MYSQL_DB'] = 'livros_db'

mysql = MySQL(app)

@app.route('/api/dados', methods=['GET']) #Definindo como será o caminho da rota no método "GET"
def get_dados():# Cria a variável "dados"
    cur = mysql.connection.cursor() #Criando um cursor que é algo como um executador de comandos SQL
    cur.execute("SELECT * FROM sua_tabela")
    dados = cur.fetchall() #Este "fetch all" significa que você esta buscando todos os dados já procurados no "SELECT *"
    cur.close() #Fechar o cursor é uma prática ideal de desenvolvimento pois ela ocupa menos mémoria entre outros beneficeos
    return jsonify(dados) #jsonify é uma função do Flask que cria uma resposta HTTP com dados em formato JSON

if __name__ == '__main__':# Condicional para executar o banco de dados
    app.run(debug=True)