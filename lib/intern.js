const Employee = require("./employee")


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        console.log(`${this.name},${this.id} contact them here ${this.school}`);
    };
    getSchool()
}