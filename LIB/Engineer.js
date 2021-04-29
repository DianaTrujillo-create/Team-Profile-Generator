const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.github = gitHub;
    }

    getGitHub() {
        return this.github
    }
    getRole() {
        return "Engineer";
}

module.exports = Engineer;
