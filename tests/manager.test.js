const Intern = require('../lib/manager');

//get manager
describe('Manager', () => {
    it('renders a new Manager', () => {
        const manager = new Manager ();
        expect(typeof(manager)).toBe("object");
    });
});
//display office
describe("getOffice", () => {
    it("renders office", () => {
        const office = "99";
        const manager = new Manager("bob", 1, "bob@gmail.com", office);
        expect(manager.getGithub()).toBe(office);
    });
});
//display role
describe("getRole", () => {
    it("renders Manager Role", () => {
        const role = "Manager";
        const manager = new Manager("bob", 1, "bob@gmail.com", "office 99");
        expect(manager.getRole()).toBe(role);
    });
});