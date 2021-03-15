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
    barbarian();
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth<= 21)) {
    bard();
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth<= 21)) {
    cleric();
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth<= 23)) {
    druid();
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth<= 22)) {
    fighter();
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth<= 22)) {
    monk();
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth<= 22)) {
    paladin();
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth<= 21)) {
    ranger();
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth<= 20)) {
    rogue();
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth<= 19)) {
    sorcerer();
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth<= 20)) {
    warlock();
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth<= 18)) {
    wizard();
  }
}

function barbarian(){
  expand();
  is_submit = false;
  class_detail_text.innerHTML = 
  `<h1>Barbarian</h1>
  <p>A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people’s elk herd.

      A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.
      
      Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.
      
      These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.
      
      For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength
  </p>

  <h2>Primal Instinct</h2>
  <p>
      People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.
      <br><br>
      Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.
  </p>

  <h2>A Life of Danger</h2>
  <p>
      Not every member of the tribes deemed “barbarians” by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don’t have to.
      <br><br>
      Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties.
  </p>
  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/barbarian">More Information >></a>
      </div>`;
}
function bard(){
  expand();
is_submit = false;
  class_detail_text.innerHTML = 
  `<h1>Bard</h1>
  <p>A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people’s elk herd.

      A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.
      
      Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.
      
      These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.
      
      For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength
  </p>

  <h2>Primal Instinct</h2>
  <p>
      People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.
      <br><br>
      Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.
  </p>

  <h2>A Life of Danger</h2>
  <p>
      Not every member of the tribes deemed “barbarians” by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don’t have to.
      <br><br>
      Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties.
  </p>
  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/barbarian">More Information >></a>
      </div>`;
}
function cleric(){
  expand();
  is_submit = false;
}
function druid(){
  expand();
  is_submit = false;
}
function fighter(){
  expand();
  is_submit = false;
}
function monk(){
  expand();
  is_submit = false;
}
function paladin(){
  expand();
  is_submit = false;
}
function ranger(){
  expand();
  is_submit = false;
}
function rogue(){
  expand();
  is_submit = false;
}
function sorcerer(){
  expand();
  is_submit = false;
}
function warlock(){
  expand();
  is_submit = false;
}
function wizard(){
  expand();
  is_submit = false;
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
    let class_detail_text = document.getElementById('class_detail_text');
    console.log(b_month, b_day);
    let class_detail = document.getElementById('class_detail');
    expand();
    // class_detail_text.hidden = false;
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

const c_barbarian = document.getElementById('barbarian');
const c_bard = document.getElementById('bard');
const c_cleric = document.getElementById('cleric');
const c_druid = document.getElementById('druid');
const c_fighter = document.getElementById('fighter');
const c_monk = document.getElementById('monk');
const c_paladin = document.getElementById('paladin');
const c_ranger = document.getElementById('ranger');
const c_rogue = document.getElementById('rogue');
const c_sorcerer = document.getElementById('sorcerer');
const c_warlock = document.getElementById('warlock');
const c_wizard = document.getElementById('wizard');

c_barbarian.addEventListener('click',function(){barbarian();},false);
c_bard.addEventListener('click',function(){bard();},false);
c_cleric.addEventListener('click',function(){cleric();},false);
c_druid.addEventListener('click',function(){druid();},false);
c_fighter.addEventListener('click',function(){fighter();},false);
c_monk.addEventListener('click',function(){monk();},false);
c_paladin.addEventListener('click',function(){paladin();},false);
c_ranger.addEventListener('click',function(){ranger();},false);
c_rogue.addEventListener('click',function(){rogue();},false);
c_sorcerer.addEventListener('click',function(){sorcerer();},false);
c_warlock.addEventListener('click',function(){warlock();},false);
c_wizard.addEventListener('click',function(){wizard();},false);