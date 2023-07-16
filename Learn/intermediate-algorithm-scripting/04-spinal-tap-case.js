function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); //adds a space between any lowercase and uppercase letters
  var re = /\W+|_+/g;//removes all non-word characters and specifically underscores(these are word characters??)
  return str.replace(re, '-').toLowerCase();
}

spinalCase('This Is*Spinal Tap');
