class Employee {

    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role; 

    }
    getName() {
        return this.name; 
    } 

    getId(){
        return this.id;
    } 

    getEmail(){
        return this.email;
    }
    
    getRole(){
        return "Employee";
    
    }
}

module.exports = Employee; 
