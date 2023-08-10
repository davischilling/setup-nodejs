const sayHelloWorld = require("./sayHelloWorld");

describe("Say hello tests", () => {
  it("should say hello world", () => {
    const result = sayHelloWorld.sayHello();
    expect(result).toEqual("Hello World");
  });

  it("should say hello to a person", () => {
    const result = sayHelloWorld.sayHello("John");
    expect(result).toEqual("Hello John");
  });
});
