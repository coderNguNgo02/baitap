const connection = require('../../db.js');

class Account{
    constructor(id_acc, username, password, role) {
        this.id_acc = id_acc;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    async saveAccount(){
        const sql = "INSERT INTO account (id_acc, username, pass, role) VALUES (?,?,?,?)";
        await connection.query(sql, [this.id_acc, this.username, this.password,  this.role]);
    }

    async checkLogin(){
        const sql = "SELECT * FROM account WHERE username = ? AND pass = ? LIMIT 1";
        await connection.query(sql, [this.username, this.password]);
    }

}

module.exports = Account;