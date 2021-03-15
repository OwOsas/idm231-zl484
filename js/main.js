//fn()
function expand(){
  let class_detail = document.getElementById('class_detail');
  let b_day_ui = document.getElementById('birthday_ui_container');

  console.log("expanded");
  b_day_ui.setAttribute('class', 'birthday_ui_container_collapsed');
  class_detail.classList.remove('class_detail_collapsed');
  document.getElementById('what_is_ur_class').innerHTML = 'You are:'
  submit_text.innerHTML = 'Reset';
}

function collapse(){
  let class_detail = document.getElementById('class_detail');
  let b_day_ui = document.getElementById('birthday_ui_container');

  console.log("collapsed");
  class_detail.setAttribute('class', 'class_detail_collapsed');
  b_day_ui.classList.remove('birthday_ui_container_collapsed');
  document.getElementById('what_is_ur_class').innerHTML = 'What is your class';
  submit_text.innerHTML = 'Submit';
}


function whatClass(whichMonth, whichDayOfMonth, class_detail){
  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    class_detail.innerHTML = '<h1>12<h1>';
    } 
  else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth<= 21)) {
    class_detail.innerHTML = '<h1>11<h1>';
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth<= 21)) {
    class_detail.innerHTML = '<h1>10h1>';
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth<= 23)) {
    class_detail.innerHTML = '<h1>9<h1>';
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth<= 22)) {
    class_detail.innerHTML = '<h1>8<h1>';
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth<= 22)) {
    class_detail.innerHTML = '<h1>7<h1>';
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth<= 22)) {
    class_detail.innerHTML = '<h1>6<h1>';
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth<= 21)) {
    class_detail.innerHTML = '<h1>5<h1>';
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth<= 20)) {
    class_detail.innerHTML = '<h1>4<h1>';
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth<= 19)) {
    class_detail.innerHTML = '<h1>3<h1>';
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth<= 20)) {
    class_detail.innerHTML = '<h1>2<h1>';
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth<= 18)) {
    class_detail.innerHTML = '<h1>1<h1>';
  }
}

// run
var submit = document.getElementById('submit');
var is_submit = true;
const submit_text = document.getElementById('submit');

submit.addEventListener('click',function(){
  var b_date = new Date(document.getElementById('b_date').value);
  console.log('Birthday get: ' + b_date);

if (is_submit){
  if (b_date != 'Invalid Date'){
    let b_month = b_date.getUTCMonth()+1;
    let b_day = b_date.getUTCDate();
    console.log(b_month, b_day);
    let class_detail = document.getElementById('class_detail');
    expand();
    let class_detail_text = document.getElementById('class_detail_text');
    class_detail_text.hidden = false;
    whatClass(b_month, b_day, class_detail_text);
    is_submit = false;
    document.getElementById('invalid_date').hidden = true;
    
  }
  else{
    document.getElementById('invalid_date').hidden = false;
  }
}
else{
  collapse();
  is_submit = true;
}
},false);

