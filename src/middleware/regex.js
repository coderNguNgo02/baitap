const Regex = {
    regexPassword(password){
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        
        if(regex.test(password)){
            return true;
        }

        return false;
    }
}

module.exports = Regex;