const app = "I don't do much."
function resetKittens() {
  var kittens = new Array("Milo", "Otis", "Garfield");
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  resetKittens();
}
