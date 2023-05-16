class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    console.log(`${this.name},${this.id} contact them here ${this.email}`);
  };

  getName() {
    return this.name;

  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee"
  }

}

export default Employee