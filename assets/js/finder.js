var exports = module.exports = {};

// ** suspended ** 

(function finder() {
'use strict';

let color = 100;

function highlight(str, reg, word, color) {
  let newStr = str.replace(reg, `<span style="background: hsl(${color}, 90%, 80%)">${word}</span>`);
  return newStr;
}

exports.highlight = highlight;

const doc = document;
const textarea = doc.getElementById('finder-textarea');
console.log(textarea);
textarea.innerHTML = "abc";

const input = doc.getElementById('finder-input');

let words = [];
input.addEventListener('focus', _=> {
  words = textarea.innerText.split(/\s/);
  console.log(words);
});

console.log(words);
const separator = /\s+\/\/\s+/;

input.addEventListener('keydown', el => {
  let key = el.which || el.keyCode;
  if (key === 13) {

    let queries = input.value.split(separator);
    
    let i=0, j=0, k=0;
    let ql=queries.length;
    let wl=words.length;

    for (i=0; i<ql; i++) {
      color = color + 37;
      let subQueries = queries[i].split(/\s/);
      console.log(subQueries);
      let sl = subQueries.length;

      for (j=0; j<sl; j++) {

        for (k=0; k<wl; k++) {
          console.log(subQueries[j], words[k]);
          let reg = new RegExp(subQueries[j], 'i');
          let newWord = words[k].replace(/[\.\,\;]/, '');
          words[k] = highlight(words[k], reg, newWord, color);
        }
      }
    }
    textarea.innerHTML = words.join(' ');
  }

  
});

})();

