const Employee = require('../lib/employee');

//employee test
describe('Employee', () => {
    it('renders a new Employee', () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
    });
});
//name test
describe("getName", () => {
    it("renders Employees name", () => {
        const name = "bob";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
});
//id test
describe('getId', () => {
    it('renders Employees ID', () => {
        const id = 1;
        const employee = new Employee("bob", id);
        expect(employee.getId()).toBe(id);
    });
});
//email test
describe('getEmail', () => {
    it('renders Employees email', () => {
        const email = "bob@email.com";
        const employee = new Employee("bob", 1, email);
        expect(employee.getEmail()).toBe(email);
    });
});
//role test
describe('getRole', () => {
    it('renders Employee as the Role', () => {
        const role = "Employee";
        const employee = new Employee("bob", 1, "bob@email.com");
        expect(employee.getRole()).toBe(role);
    });
});