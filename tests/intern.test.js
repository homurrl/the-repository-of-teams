const Intern = require('../lib/intern');

//get intern
describe('Intern', () => {
    it('renders a new Intern', () => {
        const intern = new Intern ();
        expect(typeof(intern)).toBe("object");
    });
});
//display school
describe("getSchool", () => {
    it("renders school", () => {
        const school = "University of Adelaide";
        const intern = new Intern("john", 1, "john@gmail.com", school);
        expect(intern.getSchool()).toBe(school);
    });
});
//display role
describe("getRole", () => {
    it("renders Intern Role", () => {
        const role = "Intern";
        const intern = new Intern("john", 1, "john@gmail.com", "University of Adelaide");
        expect(intern.getRole()).toBe(role);
    });
});