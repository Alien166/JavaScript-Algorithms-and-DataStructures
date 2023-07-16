function translatePigLatin(str) {

  const ragexCons = /(\w+?)([aeiou]\w+)/i; // find first consonant (consonant cluster)
  const ragexVow = /^[aeiou]/; // check if string begins with vowel
  const splitting = str.match(ragexCons); // make array of 0 - original word, 1 - only first consonant/s, 2- original word without first consonant/s

  // first check if splitting is array (if is not there are no vowels in orginal word). Then check if original word begins with vowel or consonant and return "translated" Pig latin word

  if (splitting) {
      if(!ragexVow.test(str)) {
      return splitting[2] + splitting[1] + 'ay';
    } else {
      return str + 'way';
    }

  } else {
    return str + 'ay';
  }
  

}
