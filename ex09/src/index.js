function myFunction(myObj, checkProp) {
  return myObj[checkProp];
}

console.log(
  myFunction(
    { title: "Titanic", song: "my Heart Will Go On", genre: "drama" },
    "title"
  )
);
module.exports = myFunction;
