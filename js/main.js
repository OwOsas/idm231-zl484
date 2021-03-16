//fn()
function expand(){
  let class_detail = document.getElementById('class_detail');
  let b_day_ui = document.getElementById('birthday_ui_container');

  console.log("expanded");
  b_day_ui.setAttribute('class', 'birthday_ui_container_collapsed');
  class_detail.classList.remove('class_detail_collapsed');
  submit_text.innerHTML = 'Reset';
  class_detail_text.hidden = false;
  b_date.classList.remove('birthday_entry');
  document.getElementById('what_is_ur_class').setAttribute('class', 'what_is_ur_class');
  
  // document.querySelector('.birthday').style.justifyContent = 'flex-start';
}

function collapse(){
  let class_detail = document.getElementById('class_detail');
  let b_day_ui = document.getElementById('birthday_ui_container');

  console.log("collapsed");
  class_detail.setAttribute('class', 'class_detail_collapsed');
  b_day_ui.classList.remove('birthday_ui_container_collapsed');
  document.getElementById('what_is_ur_class').innerHTML = 'What is your class?';
  submit_text.innerHTML = 'Submit';
  class_detail_text.hidden = true;
  b_date.setAttribute('class', 'birthday_entry');
  document.getElementById('what_is_ur_class').classList.remove('what_is_ur_class');
  document.getElementById('class_range').innerHTML = '';
  // document.querySelector('.birthday').style.justifyContent = 'center';
}


function whatClass(whichMonth, whichDayOfMonth, class_detail){
  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    barbarian();
    return 'Barbarian';
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth<= 21)) {
    bard();
    return 'Bard';  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth<= 21)) {
    cleric();
    return 'Cleric';
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth<= 23)) {
    druid();
    return 'Druid';
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth<= 22)) {
    fighter();
    return 'Fighter';
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth<= 22)) {
    monk();
    return 'Monk';
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth<= 22)) {
    paladin();
    return 'Paladin';
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth<= 21)) {
    ranger();
    return 'Ranger';
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth<= 20)) {
    rogue();
    return 'Rogue';
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth<= 19)) {
    sorcerer();
    return 'Sorcerer';
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth<= 20)) {
    warlock();
    return 'Warlock';
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth<= 18)) {
    wizard();
    return 'Wizard';
  }
}

function barbarian(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Barbarian';
  document.getElementById('class_range').innerHTML = '22 December –  20 January';
  class_detail_text.innerHTML = 
  `<h1>Barbarian</h1>
  <p>
      A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people’s elk herd.
      <br></br>
      A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.
      <br></br>
      Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.
      <br></br>
      These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.
      <br></br>
      For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength
  </p>

  <h2>Primal Instinct</h2>
  <p>
      People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.
      <br></br>
      Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.
  </p>

  <h2>A Life of Danger</h2>
  <p>
      Not every member of the tribes deemed “barbarians” by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don’t have to.
      <br></br>
      Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties.
  </p>
  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/barbarian">More Information >></a>
      </div>`;
}
function bard(){


  expand();
is_submit = false;
document.getElementById('what_is_ur_class').innerHTML = 'Bard';
document.getElementById('class_range').innerHTML = '20 January –  19 February';
  class_detail_text.innerHTML = 
  `<h1>Bard</h1>
  <p>Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song—knowledge of the people who constructed the monument and the mythic saga it depicts.
  <br></br>
  A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them.
  <br></br>
  Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companions’ words will be well received.
  <br></br>
  Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.
  </p>

  <h2>Music and Magic</h2>
  <p>
    In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.
    <br></br>
    The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge.
  </p>

  <h2>Learning from Experience</h2>
  <p>
    True bards are not common in the world. Not every minstrel singing in a tavern or jester cavorting in a royal court is a bard. Discovering the magic hidden in music requires hard study and some measure of natural talent that most troubadours and jongleurs lack. It can be hard to spot the difference between these performers and true bards, though. A bard’s life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows.
    <br></br>
    Only rarely do bards settle in one place for long, and their natural desire to travel—to find new tales to tell, new skills to learn, and new discoveries beyond the horizon—makes an adventuring career a natural calling. Every adventure is an opportunity to learn, practice a variety of skills, enter long-forgotten tombs, discover lost works of magic, decipher old tomes, travel to strange places, or encounter exotic creatures. Bards love to accompany heroes to witness their deeds firsthand. A bard who can tell an awe-inspiring story from personal experience earns renown among other bards. Indeed, after telling so many stories about heroes accomplishing mighty deeds, many bards take these themes to heart and assume heroic roles themselves.
  </p>
  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/bard">More Information >></a>
      </div>`;
  
}
function cleric(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Cleric';
  document.getElementById('class_range').innerHTML = '19 February –  21 March';
  class_detail_text.innerHTML = 
  `<h1>Cleric</h1>
    <p>Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions.
    <br></br>
    Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe’s fall.
    <br></br>
    Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions.
    <br></br>
    Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.
  </p>

  <h2>Healers and Warriors</h2>
  <p>
    Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don’t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.
    <br></br>
    Harnessing divine magic doesn’t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity’s wishes.
    <br></br>
    Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.
  </p>

  <h2>Divine Agents</h2>
  <p>
    Not every acolyte or officiant at a temple or shrine is a cleric. Some priests are called to a simple life of temple service, carrying out their gods’ will through prayer and sacrifice, not by magic and strength of arms. In some cities, priesthood amounts to a political office, viewed as a stepping stone to higher positions of authority and involving no communion with a god at all. True clerics are rare in most hierarchies.
    <br></br>
    When a cleric takes up an adventuring life, it is usually because his or her god demands it. Pursuing the goals of the gods often involves braving dangers beyond the walls of civilization, smiting evil or seeking holy relics in ancient tombs. Many clerics are also expected to protect their deities’ worshipers, which can mean fighting rampaging orcs, negotiating peace between warring nations, or sealing a portal that would allow a demon prince to enter the world.
    <br></br>
    Most adventuring clerics maintain some connection to established temples and orders of their faiths. A temple might ask for a cleric’s aid, or a high priest might be in a position to demand it.
  </p>
  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/cleric">More Information >></a>
      </div>`;
  
}
function druid(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Druid';
  document.getElementById('class_range').innerHTML = '21 March –  20 April';
  class_detail_text.innerHTML = 
  `<h1>Druid</h1>
    <p>Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.
    <br></br>
    Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists’ activities.
    <br></br>
    Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life.
    <br></br>
    Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature’s resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature’s indomitable will.
  </p>

  <h2>Power of Nature</h2>
  <p>
    Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.
    <br></br>
    Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form.
  </p>

  <h2>Preserve the Balance</h2>
  <p>
    For druids, nature exists in a precarious balance. The four elements that make up a world—air, earth, fire, and water—must remain in equilibrium. If one element were to gain power over the others, the world could be destroyed, drawn into one of the elemental planes and broken apart into its component elements. Thus, druids oppose cults of Elemental Evil and others who promote one element to the exclusion of others.
    <br></br>
    Druids are also concerned with the delicate ecological balance that sustains plant and animal life, and the need for civilized folk to live in harmony with nature, not in opposition to it. Druids accept that which is cruel in nature, and they hate that which is unnatural, including aberrations (such as beholders and mind flayers) and undead (such as zombies and vampires). Druids sometimes lead raids against such creatures, especially when the monsters encroach on the druids’ territory.
    <br></br>
    Druids are often found guarding sacred sites or watching over regions of unspoiled nature. But when a significant danger arises, threatening nature’s balance or the lands they protect, druids take on a more active role in combating the threat, as adventurers.
  </p>
  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/druid">More Information >></a>
      </div>`;
}
function fighter(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Fighter';
  document.getElementById('class_range').innerHTML = '20 April –  21 May';
  class_detail_text.innerHTML = 
  `<h1>Fighter</h1>
    <p>A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage.
    <br></br>
    A dwarf in chain mail interposes his shield between the ogre’s club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for a blind spot in its defenses.
    <br></br>
    A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd’s delight—and his own tactical advantage. His opponent’s sword flares with blue light an instant before she sends lightning flashing forth to smite him.
    <br></br>
    All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.
  </p>

  <h2>Well-Rounded Specialists</h2>
  <p>
    Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.
  </p>

  <h2>Trained for Danger</h2>
  <p>
  Not every member of the city watch, the village militia, or the queen’s army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards, dedicated knights, and similar figures are fighters.
  <br></br>
  Some fighters feel drawn to use their training as adventurers. The dungeon delving, monster slaying, and other dangerous work common among adventurers is second nature for a fighter, not all that different from the life he or she left behind. There are greater risks, perhaps, but also much greater rewards—few fighters in the city watch have the opportunity to discover a magic flame tongue sword, for example.
  </p>
  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/fighter">More Information >></a>
      </div>`;
}
function monk(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Monk';
  document.getElementById('class_range').innerHTML = '21 May –  21 June';
  class_detail_text.innerHTML = 
  `<h1>Monk</h1>
    <p>Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone.
    <br></br>
    Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes.
    <br></br>
    Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone’s throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep.
    <br></br>
    Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.
  </p>
  
  <h2>The Magic of Ki</h2>
  <p>
    Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.
  </p>

  <h2>Well-Rounded Specialists</h2>
  <p>
    Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of ordinary life, where time seems to stand still. The monks who live there seek personal perfection through contemplation and rigorous training. Many entered the monastery as children, sent to live there when their parents died, when food couldn’t be found to support them, or in return for some kindness that the monks had performed for their families.
    <br></br>
    Some monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader, a noble patron, or some other mortal or divine power.
    <br></br>
    The majority of monks don’t shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters or tyrants.
    <br></br>
    For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don’t undertake it lightly. Those who leave their cloisters take their work seriously, approaching their adventures as personal tests of their physical and spiritual growth. As a rule, monks care little for material wealth and are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering their treasure.
  </p>

  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/monk">More Information >></a>
      </div>`;
}
function paladin(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Paladin';
  document.getElementById('class_range').innerHTML = '21 June –  23 July';
  class_detail_text.innerHTML = 
  `<h1>Paladin</h1>
    <p>
      Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands, the man’s wounds knit closed, and his eyes open wide with amazement.
      <br></br>
      A dwarf crouches behind an outcrop, his black cloak making him nearly invisible in the night, and watches an orc war band celebrating its recent victory. Silently, he stalks into their midst and whispers an oath, and two orcs are dead before they even realize he is there.
      <br></br>
      Silver hair shining in a shaft of light that seems to illuminate only him, an elf laughs with exultation. His spear flashes like his eyes as he jabs again and again at a twisted giant, until at last his light overcomes its hideous darkness.
      <br></br>
      Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god’s altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin’s oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.
  </p>
  
  <h2>The Cause of Righteousness</h2>
  <p>
    A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin’s power comes as much from a commitment to justice itself as it does from a god.
    <br></br>
    Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice.
  </p>

  <h2>Beyond the Mundane Life</h2>
  <p>
    Almost by definition, the life of a paladin is an adventuring life. Unless a lasting injury has taken him or her away from adventuring for a time, every paladin lives on the front lines of the cosmic struggle against evil. Fighters are rare enough among the ranks of the militias and armies of the world, but even fewer people can claim the true calling of a paladin. When they do receive the call, these warriors turn from their former occupations and take up arms to fight evil. Sometimes their oaths lead them into the service of the crown as leaders of elite groups of knights, but even then their loyalty is first to the cause of righteousness, not to crown and country.
    <br></br>  
    Adventuring paladins take their work seriously. A delve into an ancient ruin or dusty crypt can be a quest driven by a higher purpose than the acquisition of treasure. Evil lurks in dungeons and primeval forests, and even the smallest victory against it can tilt the cosmic balance away from oblivion.
  </p>

  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/paladin">More Information >></a>
      </div>`;
}
function ranger(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Ranger';
  document.getElementById('class_range').innerHTML = '23 July –  23 August';
  class_detail_text.innerHTML = 
  `<h1>Ranger</h1>
    <p>
    Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.
    <br></br>
    After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon’s thick scales.
    <br></br>
    Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he’s been tracking and sends the hawk to distract the creature while he readies his bow.
    <br></br>
    Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.
  </p>
  
  <h2>Deadly Hunters</h2>
  <p>
    Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.
    <br></br>
    Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.
  </p>

  <h2>Independent Adventurers</h2>
  <p>
    Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger’s true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first—and possibly the last—line of defense.
    <br></br>
    This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization’s foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways.
  </p>

  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/ranger">More Information >></a>
      </div>`;
}
function rogue(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Rogue';
  document.getElementById('class_range').innerHTML = '23 August –  23 September';
  class_detail_text.innerHTML = 
  `<h1>Rogue</h1>
    <p>
    Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye. Then she disappears into the shadows as her fighter friend moves forward to kick the door open.
    <br></br>
    A human lurks in the shadows of an alley while his accomplice prepares for her part in the ambush. When their target — a notorious slaver — passes the alleyway, the accomplice cries out, the slaver comes to investigate, and the assassin’s blade cuts his throat before he can make a sound.
    <br></br>
    Suppressing a giggle, a gnome waggles her fingers and magically lifts the key ring from the guard’s belt. In a moment, the keys are in her hand, the cell door is open, and she and her companions are free to make their escape.
    <br></br>
    Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.
  </p>
  
  <h2>Skill and Precision</h2>
  <p>
    Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.
    <br></br>
    When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities.
  </p>

  <h2>A Shady Living</h2>
  <p>
    Every town and city has its share of rogues. Most of them live up to the worst stereotypes of the class, making a living as burglars, assassins, cutpurses, and con artists. Often, these scoundrels are organized into thieves’ guilds or crime families. Plenty of rogues operate independently, but even they sometimes recruit apprentices to help them in their scams and heists. A few rogues make an honest living as locksmiths, investigators, or exterminators, which can be a dangerous job in a world where dire rats—and wererats—haunt the sewers.
    <br></br>
    As adventurers, rogues fall on both sides of the law. Some are hardened criminals who decide to seek their fortune in treasure hoards, while others take up a life of adventure to escape from the law. Some have learned and perfected their skills with the explicit purpose of infiltrating ancient ruins and hidden crypts in search of treasure.
  </p>

  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/ranger">More Information >></a>
      </div>`;
}
function sorcerer(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Sorcerer';
  document.getElementById('class_range').innerHTML = '23 September –  23 October';
  class_detail_text.innerHTML = 
  `<h1>Sorcerer</h1>
    <p>
    Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air.
    <br></br>
    Long hair whipped by a conjured wind, a half-elf spreads his arms wide and throws his head back. Lifting him momentarily off the ground, a wave of magic surges up in him, through him, and out from him in a mighty blast of lightning.
    <br></br>
    Crouching behind a stalagmite, a halfling points a finger at a charging troglodyte. A blast of fire springs from her finger to strike the creature. She ducks back behind the rock formation with a grin, unaware that her wild magic has turned her skin bright blue.
    <br></br>
    Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can’t study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.
  </p>
  
  <h2>Raw Magic</h2>
  <p>
    Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.
    <br></br>
    The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can’t name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby’s birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.
    <br></br>
    Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.
  </p>

  <h2>Unexplained Powers</h2>
  <p>
    Sorcerers are rare in the world, and it’s unusual to find a sorcerer who is not involved in the adventuring life in some way. People with magical power seething in their veins soon discover that the power doesn’t like to stay quiet. A sorcerer’s magic wants to be wielded, and it has a tendency to spill out in unpredictable ways if it isn’t called on.
    <br></br>
    Sorcerers often have obscure or quixotic motivations driving them to adventure. Some seek a greater understanding of the magical force that infuses them, or the answer to the mystery of its origin. Others hope to find a way to get rid of it, or to unleash its full potential. Whatever their goals, sorcerers are every bit as useful to an adventuring party as wizards, making up for a comparative lack of breadth in their magical knowledge with enormous flexibility in using the spells they know.
  </p>

  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/sorcerer">More Information >></a>
      </div>`;
}
function warlock(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Warlock';
  document.getElementById('class_range').innerHTML = '23 October –  22 November';
  class_detail_text.innerHTML = 
  `<h1>Warlock</h1>
    <p>
    With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.
    <br></br>
    As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic.
    
    Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.
    
    Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.
  </p>
  
  <h2>Sworn and Beholden</h2>
  <p>
    A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf.
    <br></br>
    The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock’s being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple 
  </p>

  <h2>Delvers into Secrets</h2>
  <p>
    Warlocks are driven by an insatiable need for knowledge and power, which compels them into their pacts and shapes their lives. This thirst drives warlocks into their pacts and shapes their later careers as well.
    <br></br>
    Stories of warlocks binding themselves to fiends are widely known. But many warlocks serve patrons that are not fiendish. Sometimes a traveler in the wilds comes to a strangely beautiful tower, meets its fey lord or lady, and stumbles into a pact without being fully aware of it. And sometimes, while poring over tomes of forbidden lore, a brilliant but crazed student’s mind is opened to realities beyond the material world and to the alien beings that dwell in the outer void.
    <br></br>
    Once a pact is made, a warlock’s thirst for knowledge and power can’t be slaked with mere study and research. No one makes a pact with such a mighty patron if he or she doesn’t intend to use the power thus gained. Rather, the vast majority of warlocks spend their days in active pursuit of their goals, which typically means some kind of adventuring. Furthermore, the demands of their patrons drive warlocks toward adventure.
  </p>

  <div id="dnd_beyond_link">
      <a href="https://www.dndbeyond.com/classes/warlock">More Information >></a>
      </div>`;
}
function wizard(){
  expand();
  
  is_submit = false;
  document.getElementById('what_is_ur_class').innerHTML = 'Wizard';
  document.getElementById('class_range').innerHTML = '23 November –  22 December';
}




// run
var submit = document.getElementById('submit');
var is_submit = true;
const submit_text = document.getElementById('submit');
const class_UI = document.querySelectorAll('.class_UI');

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
    var dnd_class =whatClass(b_month, b_day, class_detail_text);
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

c_barbarian.addEventListener('click',function(){
  barbarian();
  
},false);
c_bard.addEventListener('click',function(){
  bard();
  
},false);
c_cleric.addEventListener('click',function(){
  cleric();
  
},false);
c_druid.addEventListener('click',function(){
  druid();
  
},false);
c_fighter.addEventListener('click',function(){
  fighter();
  
},false);
c_monk.addEventListener('click',function(){
  monk();
  
},false);
c_paladin.addEventListener('click',function(){
  paladin();
  
},false);
c_ranger.addEventListener('click',function(){
  ranger();
  
},false);
c_rogue.addEventListener('click',function(){
  rogue();
  
},false);
c_sorcerer.addEventListener('click',function(){
  sorcerer();
  
},false);
c_warlock.addEventListener('click',function(){
  warlock();
  
},false);
c_wizard.addEventListener('click',function(){
  wizard();
  
},false);