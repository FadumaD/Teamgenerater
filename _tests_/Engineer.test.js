
const Engineer = require("../lib/Engineer");


test("Can create a github.", () => {
    const testGithub = "Dolly";
    const employeeInstance = new Engineer("Dolly", 2, "dolly@gmail.com", testGithub);
    expect(employeeInstance.github).toEqual(testGithub);
});


test("Testing getGithub will return github.", () => {
    const testGithub = "Dolly";
    const employeeInstance = new Engineer("Dollyl", 2, "dolly@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toEqual(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Dolly", 2, "dolly@gmail.com", "Dolly");
    expect(employeeInstance.getRole()).toEqual(returnValue);
});