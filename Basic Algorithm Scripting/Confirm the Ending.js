function confirmEnding(str, target) {
  return (target==str.substring(str.length-target.length)) ? true:false;
}
confirmEnding("Bastian", "n");

