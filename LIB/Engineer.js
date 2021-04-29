const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.github = gitHub;
        this.role = "Engineer"
    }

    getGitHub() {
        return this.github
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
