const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(firstName, id, github) {
        super(firstName, id);
        
        this.github = github;
        this.role = 'Engineer';
    };

    getGithub() {
        return `${this.github}</a>`
    };
};

module.exports = Engineer;