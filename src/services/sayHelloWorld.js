exports.sayHello = (name = "") => {
  return `Hello ${name || "World"}`;
};
