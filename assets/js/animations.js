(function animations() {
'use strict';
let devMsg = true;
function log(msg) {
  if (devMsg === true) {
    console.log(msg);
  }
} 

const doc = document;
const playBtn = doc.getElementById('play-anim--form');
log("playBtn: " + playBtn);
const form = doc.getElementById('form--anim-demo1');
log("form: " + form);
const formBtn = doc.getElementById('btn--anim-demo1');
log("form btn: " + formBtn);
const successMsg = doc.getElementById('msg--anim-demo1');
log("form successMsg: " + successMsg);
const fieldset = doc.getElementById('fieldset--anim-demo1');
log("form fieldset: " + fieldset);
const pass = doc.getElementById('pass--anim-demo1');
log("password input: " + pass);


function btnPresses() {
  formBtn.classList.remove('btn--highlight');
  formBtn.classList.add('pressed');
}

function btnHighlight() {
  formBtn.classList.add('btn--highlight');
}

function passStr() {
  pass.classList.add('password-strength--3');
  pass.classList.remove('password-strength--2');
}

function formSuccess() {
  form.classList.add('form--success');
  window.setTimeout(_=> {fieldset.classList.add('hide');}, 500);
}

function animReset() {
  fieldset.classList.remove('hide');
  form.classList.remove('form--success');
  formBtn.classList.remove('pressed', 'btn--highlight');
  pass.classList.remove('password-strength--3');
  pass.classList.add('password-strength--2');
  successMsg.classList.remove('anim--show');
}

playBtn.addEventListener('click', _=> {
  setTimeout(_=> { passStr(); }, 150);
  setTimeout(_=> { btnHighlight(); }, 400);
  setTimeout(_=> { btnPresses(); }, 1250);
  setTimeout(_=> { formSuccess();}, 1800);
  setTimeout(_=> { animReset();  }, 3200);
});

})();