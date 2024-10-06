const people = (function () {
  const name = "Kheang";

  function showName() {
    console.log(name);
  }

  return {
    showName,
  };
})();

people.name = "Makara";
console.log(people.name);
people.showName();
