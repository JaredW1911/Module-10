const Employee = require('./Employee');

class Intern extends Employee {
    constructor(firstName,id, school) {
        super(firstName, id);
        this.school = school;
        this.role = 'Intern';
    };

    getSchool() {
        return `${this.school}`;
    };
};

module.exports = Intern;