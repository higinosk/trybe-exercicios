const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
} = require("./loginValidation.js");

describe("a funcao verifyCredentials()", () => {

    it ("verifyCredentials() calls the correct function depending on the user and password input", () => {

        const user = {
            userName: 'Bob',
            //expect: userName: 'Joana'
            password: 123456,
        };

        const { userName, password } = user;

            expect(verifyCredentials({userName, password })).toBe(
                "Hello, Joana! Que bom ter você de volta"
            );
    });

    it ("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta!`", () => {
        expect(greetingMessage("Lucas")).toBe(
            "Hello, Lucas! Que bom ter você de volta"
        );
    });

    it ("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' nao encontrada, tente novamente!`", () => {
        expect(loginErrorMessage("Bob")).toBe(
            "Pessoa usuária 'Bob' nao encontrada, tente novamente!"
        );
    });
});