const accountService = require('../service/accountService.js');
const Regex = require('../middleware/regex.js');

const accountController = {
    async createAccount(req, res) {
        const data = req.body;
        if (data.username == "" || data.password == "" || data.role == "") {
            res.status(400).send("You need fill all infomation !!!");
        } else if (Regex.regexPassword(data.password) == false) {
            res.status(400).send("Password is not permit !!!");
        } else {
            try {

                await accountService.createAccount(data.username, data.password, data.role);
                res.status(200).send("Insert access !!!")

            } catch (error) {
                res.status(500).send(error);
            }
        }
    }


}

module.exports = accountController;