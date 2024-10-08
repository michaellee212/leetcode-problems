// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

var firstUniqChar = function (s) {
  const ht = {};

  // fill in our object hash table with the character counts
  for (let i = 0; i < s.length; i++) {
    let item = s[i];

    ht[item] = ht[item] + 1 || 1;
  }
  console.log(ht);

  // check if character count = 1 if so return that character
  for (let i = 0; i < s.length; i++) {
    let item = s[i];

    if (ht[item] === 1) {
      return i;
    }
  }

  return -1;
};
