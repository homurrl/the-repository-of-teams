const Employee = require("./employee")


class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
        console.log(`${this.name},${this.id} contact them here ${this.office}`);
    };
    getSchool()
}