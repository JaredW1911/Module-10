class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.id = id;
        this.email = `${firstName}.@company.com`;
        this.role = 'Employee';
    };

    getName() {
        return `${this.firstName}`;
    };

    getId() {
        return `${this.id}`;
    };

    getEmail() {
        return `${this.email}`;
    };

    getRole() {  
        return this.role;
    };
    
};

module.exports = Employee;