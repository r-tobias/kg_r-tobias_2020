function convertNumToPhonetic(arr) {
  let answer = "";
  let words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  let characters = arr.toString();
  for (let i = 0; i < characters.length; i++) {
    if (words[parseInt(characters[i])] != undefined) {
      // check if it's not a comma
      answer += words[parseInt(characters[i])];
      // the value of each element in the words array corresponds to its index number
    } else answer += ",";
  }

  return answer;
}
