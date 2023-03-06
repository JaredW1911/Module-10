const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, id, officeNumber) {
        super(firstName, id);
        
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return `${this.officeNumber}`;
    };
};

module.exports = Manager;