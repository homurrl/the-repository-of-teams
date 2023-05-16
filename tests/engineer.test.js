const Engineer = require('../lib/engineer');

//get engineer
describe('Engineer', () => {
    it('renders a new Engineer', () => {
        const engineer = new Engineer ();
        expect(typeof(engineer)).toBe("object");
    });
});
//display github
describe("getGithub", () => {
    it("renders github", () => {
        const gitHub = "github.com/homurrl";
        const engineer = new Engineer("jane", 1, "jane@gmail.com", gitHub);
        expect(engineer.getGithub()).toBe(gitHub);
    });
});
//display role
describe("getRole", () => {
    it("renders Engineers Role", () => {
        const role = "Engineer";
        const engineer = new Engineer("jane", 1, "jane@gmail.com", "github.com/homurrl");
        expect(engineer.getRole()).toBe(role);
    });
});