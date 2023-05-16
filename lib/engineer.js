const Employee = require("./employee")


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        console.log(`${this.name},${this.id} contact them here ${this.email}`);
    };
    getGithub()
}

// const myEmployee = new Engineer("bob", "abcde", "bob@gmail.com", "bobgithub")



// myEmployee.github