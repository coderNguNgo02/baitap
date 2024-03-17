const Account = require('../model/account.js');
const bcrypt = require('bcrypt');

const accountService = {
    async createAccount(username, password, role){
        const hash = await bcrypt.hash(password, 10);
        const account = new Account(null, username, hash, role);

        await account.saveAccount();
    }
}

module.exports = accountService;