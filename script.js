1;
function s(a, b, ...rest) {
  let n = 1;
  for (i of rest) {
    n *= i;
  }
  return [a + b, n];
}
console.log(s(4, 5, 6, 7, 8));

// 2 ex.1.0
const user = {
  Bank: "Bog",
};

const { Bank, address: { city } = {} } = user;
console.log(Bank, city); // BOG undefined.

//2 ex.1.1
const user2 = {
  Bank2: "TBC",
  address: {},
};
const { Bank2, address: { city2 = "Batumi" } = { city2: "Tbilisi" } } = user2;
console.log(Bank2, city2); // TBC Batumi

// 2 ex.1.2
const user3 = {
  Bank3: "LIBERTY",
};
const { Bank3, address: { city3 } = { city3: "Tbilisi" } } = user3;
console.log(Bank3, city3); // LIBERTY Tbilisi

//3.
const someone = {
  name: "Temo",
  userName: "123",
  address: {
    county: "Georgia",
  },
  skills: ["Javascript", "React", "Java"],
};

const someone1 = {
  ...someone,
};

someone1.address.county = "Germany";
someone1.skills[2] = "C#";

console.log(someone.address.county, someone.skills); // Germany ["Javascript", "React", "C#"]
