var myPet = {
  species: "Dog",
  name: "Medo",
  legs: 4,
  friends: ["Me", "Božo"],
};

function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
