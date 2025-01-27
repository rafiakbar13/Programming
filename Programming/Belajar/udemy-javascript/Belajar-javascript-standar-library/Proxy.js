const target = {
  middleName: "Hokuya",
};

const handler = {
  get: function (target, property) {
    console.info(`Access property : ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.info(`Change Property : ${property} : ${value}`);
    if (value === null) {
      throw new Error("tidak boleh kosong");
      //   target[property] = "";
    } else {
      target[property] = value;
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Rafi";
proxy.lastName = "Akbar";

console.info(proxy.firstName);
console.info(proxy.middleName);
console.info(proxy.lastName);
console.info(target);
