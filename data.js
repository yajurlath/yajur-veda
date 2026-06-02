/* ============================================================
   YAJUR VEDA — curriculum data
   Edited by the daily scheduled task: append new card objects
   immediately ABOVE the marker line near the bottom of YV_CARDS.
   Card spine: hook -> body -> (verse) -> (origin) -> (knot) -> apply -> reflect
   ============================================================ */

window.YV_MODULES = [
  { id:0, num:"0",  title:"Orientation",                 sub:"Why this, why you" },
  { id:1, num:"I",  title:"The Unbroken Thread",          sub:"How a 3,000-year-old text reached you intact" },
  { id:2, num:"II", title:"Two Rivers",                   sub:"The Black and the White Yajur Veda" },
  { id:3, num:"III",title:"The Engine of Sacrifice",      sub:"The Samhita and the great rituals" },
  { id:4, num:"IV", title:"The Meaning Behind the Act",   sub:"The Brahmanas" },
  { id:5, num:"V",  title:"From Doing to Knowing",        sub:"The forest texts and the great arc" },
  { id:6, num:"VI", title:"The Summit",                   sub:"The Upanishads" },
  { id:7, num:"VII",title:"The Knots",                    sub:"Honest confusions and live debates" },
  { id:8, num:"VIII",title:"Living It",                   sub:"The Yajur Veda as an operating system" },
  { id:9, num:"IX",  title:"The World of the Vedic Gods", sub:"The deities who fill the rituals" }
];

window.YV_CARDS = [

/* ---------- MODULE 0 — ORIENTATION ---------- */
{
  id:"0.1", m:0, read:3, title:"Your name is a library",
  hook:"You were named after a question humans have been asking for three thousand years.",
  body:[
    "The Yajur Veda is one of the four Vedas — the oldest layer of Indian thought. Its name comes from yajus, “sacrificial formula,” from the root yaj, “to offer.” Of the four, this is the Veda of doing: the priest’s handbook for acting in the world with intention.",
    "That’s a strange and good name to carry. This course is you reading your own namesake, end to end — not as a scholar memorizing dates, but as someone who wants to know what a hundred generations of careful minds actually worked out.",
    "Here’s the deal: one card a day, two or three minutes. Each tells you what a piece of the Veda says, where it came from, what it means, and how you might use it now. Stories first. No homework.",
    "The Veda is enormous, so you won’t “finish” it like a novel. You’ll build a complete map — and then your own questions decide where we dig."
  ],
  apply:"Treat it like a long campaign: small daily moves, compounding. You believe life is a game. This is the oldest rulebook in your library.",
  reflect:"What do you most want from the Yajur Veda — origins, philosophy, something to live by, or all three? Tell me; it steers the path."
},
{
  id:"0.2", m:0, read:3, title:"What is a ‘Veda’?",
  hook:"Before the Yajur Veda, one question: what is a Veda at all?",
  body:[
    "Veda means “knowledge” — from vid, “to know” (a cousin of the English wit and, distantly, video). The Vedas are the oldest scriptures of what we now call Hinduism, but “scripture” undersells them. They were a civilization’s entire operating knowledge: how to worship, how to live, how the cosmos works.",
    "There are four — Rig, Sama, Yajur, Atharva. They aren’t four chapters of one book; they’re four libraries, each with many layers and once over a thousand branches. “The Vedas” is a shelf, not a volume.",
    "They are shruti — “that which is heard.” Tradition says the sages didn’t compose them; they heard a knowledge that was always there, the way you discover a law of physics rather than invent it. Historians see centuries of human composition by priestly families. Both can be held at once: one is a claim about authority, the other about history."
  ],
  origin:"Composed in the northwest of the subcontinent and the Ganges plain, roughly 1500–800 BCE — older than the Buddha, older than the oldest books of the Bible.",
  apply:"When a tradition calls its core texts ‘heard, not authored,’ it’s shielding them from edits. Notice where you do the same — the ideas you treat as discovered truth versus the ones you’ll revise.",
  reflect:"Which of the other three Vedas do you want to understand after Yajur?"
},
{
  id:"0.3", m:0, read:3, title:"Say, sing, do, heal",
  hook:"The cleanest way to tell the four Vedas apart fits in four words.",
  body:[
    "Rig says. The Rigveda is hymns of praise — verses recited to invoke the gods. The poetry.",
    "Sama sings. The Samaveda sets Rig verses to melody — the chant, the music of the sacrifice.",
    "Yajur does. The Yajurveda is the working script — formulas, mostly in prose, muttered while performing the physical acts of the ritual.",
    "Atharva heals. The Atharvaveda is the householder’s Veda: charms, remedies, blessings, spells for daily life, love, and protection.",
    "Each Veda even had its own priest. The Yajur Veda belonged to the adhvaryu — the one who did the work: measuring the altar, kindling the fire, pressing the sacred plant, pouring the offering, whispering the formulas throughout. While others praised and sang, he was the hands of the ceremony."
  ],
  apply:"Most knowledge splits the same way: what to say, how to say it, what to actually do, and how to cope when life breaks. The Yajur Veda is the ‘do’ file. That’s your lane.",
  reflect:"In your own work, which Veda are you weakest at — saying, singing, doing, or healing?"
},
{
  id:"0.4", m:0, read:3, title:"What counts as Veda (and what doesn’t)",
  hook:"The Bhagavad Gita is not in the Vedas. Neither is most of what people call ‘Hindu scripture.’",
  body:[
    "Indian tradition splits its texts in two. Shruti — ‘heard’ — is the Vedas alone, held to be timeless and authorless. Smriti — ‘remembered’ — is everything composed by humans afterward: the epics (Mahabharata, Ramayana), the Bhagavad Gita (which sits inside the Mahabharata), the Puranas, the law books.",
    "Smriti is allowed to be brilliant, beloved, and wrong. If a remembered text contradicts a heard one, the heard one wins. It’s a hierarchy of authority, not of quality.",
    "This matters for a clean map. When someone says ‘the Vedas say…,’ check whether they mean actual Veda or popular Hinduism. Much of what’s practiced today — temple worship, most gods you can name, festivals, devotional song — comes from smriti and later tradition, not from the Vedas."
  ],
  knot:"So ‘Hinduism = the Vedas’ is false. The relationship is ancestral, not identical — and we’ll keep pulling the two apart as we go.",
  apply:"A useful habit anywhere: separate your own ‘shruti’ (founding principles you won’t edit) from your ‘smriti’ (interpretations you’ll happily revise). Confusing the two is how people get dogmatic about mere opinions.",
  reflect:"Name one thing you treat as shruti that’s actually smriti."
},

/* ---------- MODULE 1 — THE UNBROKEN THREAD ---------- */
{
  id:"1.1", m:1, read:3, title:"Not a book, a sound",
  hook:"For most of its life the Yajur Veda had no pages. Writing it down was considered a kind of failure.",
  body:[
    "The Vedas were not read; they were recited — mouth to ear, teacher to student, for roughly 3,000 years, with no master copy. The oldest surviving manuscripts of the Shukla Yajur Veda are from around the 12th century CE, meaning the text travelled, intact, for over two thousand years before anyone trusted it to paper.",
    "The scholar Wayne Howard put it sharply: the Vedas ‘are robbed of their essence when transferred to paper, for without the human element the innumerable nuances and fine intonations are lost completely.’",
    "The Yajur Veda was especially operational. Many of its formulas weren’t declaimed for an audience but muttered, under the breath, in sync with the priest’s hands. Less a poem to perform than code to run."
  ],
  apply:"Some knowledge only lives when embodied — a chant, a craft, a sport. You can’t PDF a golf swing. Ask what in your work is transmissible only by doing it next to someone.",
  reflect:"What have you only ever learned by repetition and presence, never from a text?"
},
{
  id:"1.2", m:1, read:3, title:"The memory machine",
  hook:"How do you copy a sacred text for 3,000 years with zero errors and no copies? You turn memory into a machine.",
  body:[
    "Students didn’t just memorize the words in order. They learned to recite the same passage in interlocking patterns. In krama-patha you chant word-pairs: 1-2, 2-3, 3-4. In jata (‘braid’) you weave forward and back: 1-2, 2-1, 1-2-3. In ghana (‘bell’) it gets dense: 1-2, 2-1, 1-2-3, 3-2-1, 1-2-3, then shift and repeat.",
    "The genius is error-detection. Because every word appears in many positions and directions, a single slipped or altered syllable breaks several patterns at once — it’s audibly wrong. The system is a biological checksum.",
    "A scholar who masters the hardest pattern earns the title ghanapathin — among the highest honors in the tradition."
  ],
  origin:"These methods are ancient — krama is referenced by the grammarian Panini, before the Buddha. UNESCO named the tradition of Vedic chanting a masterpiece of humanity’s intangible heritage.",
  apply:"Redundancy is how you make anything error-proof — backups, double-entry books, code review. The Vedic priests built the same idea out of breath and discipline, 2,500 years early.",
  reflect:"Where could a little redundancy save you from a costly single point of failure?"
},
{
  id:"1.3", m:1, read:3, title:"How old is it, really?",
  hook:"You’ll see claims the Vedas are 5,000, 7,000, even 10,000 years old. Here’s what the evidence actually supports.",
  body:[
    "Mainstream scholarship dates the Yajur Veda to roughly 1200–800 BCE — younger than the Rigveda (~1500–1200 BCE), older than the Buddha. The date isn’t a guess; it rests on converging clues.",
    "Language: Vedic Sanskrit evolved in visible layers, and the Yajur Veda’s grammar is demonstrably ‘later Vedic’ — past the archaic Rigveda, short of classical Sanskrit. Geography: the world of the text has shifted east, from the Punjab rivers of the Rigveda to the Kuru-Panchala heartland (today’s Haryana and UP). Iron: references and the matching Painted Grey Ware archaeology line up with the early Iron Age, after ~1200 BCE."
  ],
  knot:"The much-older claims usually rest on astronomy — a star position dated to 4500 BCE, say. The catch: the sky’s precession repeats over ~26,000 years, so one star-clue fits many eras. Real, but far too loose to outweigh language and archaeology.",
  apply:"A model for any bold claim: ask what independent lines of evidence converge. One dramatic data point is a hypothesis; three boring ones that agree is a fact.",
  reflect:"Want me to go deeper on the dating debate, or on the Aryan-migration question tangled up with it?"
},

/* ---------- MODULE 2 — TWO RIVERS ---------- */
{
  id:"2.1", m:2, read:3, title:"The sage who vomited the Veda",
  hook:"The Yajur Veda split in two because of a fight between a teacher and his most gifted student. The story is wild.",
  body:[
    "The teacher was Vaishampayana; the student, Yajnavalkya — brilliant and proud. They quarreled. (One version: the guru owed a penance and asked his disciples to share the burden; Yajnavalkya, sure of his own power, offered to do it all alone — and his teacher heard arrogance.)",
    "Furious, Vaishampayana commanded: ‘Give back everything I taught you.’ So Yajnavalkya literally vomited the Yajus he had absorbed; it fell as a dark mass. The other students, told to gather it, took the form of partridge birds (tittiri) and ate it. That body of teaching became the Taittiriya — the ‘partridge’ branch — and the Black (krishna) Yajur Veda.",
    "Stripped of knowledge and refusing to return, Yajnavalkya prayed instead to the Sun. Pleased, the Sun appeared as a horse and poured out a fresh Yajur Veda — new formulas no one else had. That became the White (shukla) Yajur Veda, its collection named Vajasaneyi, ‘from the horse’s mane.’"
  ],
  origin:"Told in the Puranas. Scholars treat it as a dramatic folk-explanation for a real textual split — and ‘Taittiriya’ more likely comes from a teacher named Tittiri than from actual birds.",
  reflect:"Want the real, unmythologized version of why the text split?"
},
{
  id:"2.2", m:2, read:3, title:"Black and white, demystified",
  hook:"So is one Yajur Veda ‘dark’ and the other ‘pure’? The plain answer is almost boringly practical.",
  body:[
    "A Veda holds two kinds of material: mantra (the formulas you recite) and brahmana (the prose explaining what each act means). The two branches simply organize them differently.",
    "The Black Yajur Veda mixes them — formula, then commentary, then formula — all tangled in one stream. ‘Black’ likely means exactly that: unsorted, murky, hard to see through. Its main surviving form is the Taittiriya Samhita.",
    "The White Yajur Veda separates them — the formulas stand clean in the Samhita (the Vajasaneyi), the commentary lives in its own giant text (the Shatapatha Brahmana). ‘White’ means clear, sorted, well-lit.",
    "That’s the whole mystery: mixed versus separated. The vivid myth of vomit and sunlight is just the memorable wrapper around a librarian’s distinction."
  ],
  apply:"Two ways to keep knowledge: inline (notes and meaning woven together) or normalized (clean data in one place, commentary in another). Every note-taking system you’ve tried is a choice between Black and White.",
  reflect:"Which are you by temperament — mix meaning into the raw material, or keep them strictly apart?"
},
{
  id:"2.3", m:2, read:3, title:"What we lost",
  hook:"The grammarian Patanjali counted 101 branches of the Yajur Veda. Today, six survive.",
  body:[
    "A branch — shakha — was a living lineage: a community that memorized one complete version of the Veda, with its own arrangement, emphasis, and ritual detail. The Yajur Veda alone had as many as 101. Across all four Vedas, tradition counts over a thousand.",
    "Today about six Yajur branches remain (four Black, two White); roughly twenty survive across all four Vedas. Something like 94% of the Yajur Veda’s branches are simply gone.",
    "Oral tradition has a brutal failure mode. It preserves perfectly — until a lineage ends. A plague, a famine, a migration, one generation that doesn’t pass it on, and an entire branch vanishes with no backup. It preserved flawlessly right up to the moment it preserved nothing."
  ],
  knot:"What we call ‘the Yajur Veda’ is a survivor’s sample — about six of a hundred versions. Our picture of the whole is built from the fraction that made it through.",
  apply:"Anything kept alive only by transmission — a recipe, a method, a family story — is one skipped generation from extinction. If it matters, give it redundancy now.",
  reflect:"What knowledge in your family or field is one lineage away from being lost?"
},

/* ---------- MODULE 3 — THE ENGINE OF SACRIFICE ---------- */
{
  id:"3.1", m:3, read:3, ch:"The fire and the daily offering", title:"What is a yajna?",
  hook:"The whole Yajur Veda orbits one act: pouring something into fire and trusting it comes back changed.",
  body:[
    "Yajna — sacrifice, offering — was the Vedic engine of the world. The picture: humans offer into the fire; Agni, the fire, carries the offering to the gods; the gods return rain, harvest, life; humans offer again. A cosmos kept turning by exchange.",
    "The Yajur Veda is the operating manual for this engine. Its main collection, the Vajasaneyi Samhita, runs 40 chapters that climb from the simple to the staggering: daily fire offerings, new- and full-moon rites, the soma-pressing, the year-long fire altar, royal consecrations, the horse sacrifice — and, at the very end, philosophy.",
    "Crucially, a yajna isn’t a bribe to the gods. It’s participation in how things work — doing your part to keep the wheel of giving and receiving in motion."
  ],
  apply:"The deepest version of the idea: value flows to those who put value in. Pour into the fire — ship, teach, help — without standing there waiting for the receipt. The return is real, delayed, and transformed.",
  reflect:"Where are you waiting for a return before you’ve made the offering?"
},
{
  id:"3.2", m:3, read:3, ch:"The fire and the daily offering", title:"The fire you never let die",
  hook:"The most basic Vedic ritual is also the most demanding: a small offering of milk into fire, at sunrise and sunset, every day, for the rest of your life.",
  body:[
    "The Agnihotra is the first rung of the whole ladder. A householder establishes a sacred fire — often at marriage — and from then on it must never go out. Twice a day, at the hinges of light, he offers milk into it. No vacations, no skipping.",
    "It sounds small. But it was the keystone: you couldn’t perform any of the grander rites without first being the kind of person who keeps the daily fire. The habit qualified you for everything above it."
  ],
  origin:"Described across the Yajur Veda’s prose texts (the Shatapatha and Taittiriya Brahmanas). Some families in India keep it to this day.",
  apply:"This is identity-based habit, 3,000 years before the self-help books. The practitioner wasn’t ‘finding motivation to light the fire’ — he was the one who keeps the fire. Pick one keystone act, tie it to a natural cue, and never break the chain. Who you are does the work willpower can’t.",
  reflect:"What’s your Agnihotra — the one daily act that, if you never missed it, would carry everything else?"
},
{
  id:"3.3", m:3, read:3, ch:"Building the cosmos: the fire-altar", title:"The altar that is the year",
  hook:"Imagine spending twelve days building a giant brick falcon on the ground — and being told you are rebuilding God, and time itself.",
  body:[
    "The Agnicayana is the most elaborate Vedic ritual: over twelve days, priests lay a great altar in the shape of a falcon, wings spread, facing east, from roughly a thousand specially shaped bricks across five layers.",
    "The meaning runs as deep as the bricks. The creator, Prajapati, exhausted himself making the universe and fell apart; the altar reassembles his body — so to build it is to re-create the cosmos. The five layers are the five seasons. By one famous reckoning the bricks total 10,800 — the number of muhurtas (48-minute units) in a 360-day year. Each brick is a unit of time. The altar is the year, made solid."
  ],
  origin:"Liturgy in chapters 11–18 of the White Yajur Veda; its theology fills books 6–9 of the Shatapatha Brahmana. Thought nearly extinct, it was performed and filmed in Kerala in 1975 by the scholar Frits Staal — possibly the oldest ritual still performed on Earth.",
  apply:"These priests encoded the calendar into an object you build with your hands — turning abstract time into something you can stack, brick by brick. The move is timeless: make the invisible thing (a year, a goal, a habit) physical and countable, and it becomes buildable.",
  reflect:"Want the full story of the 1975 revival, or the symbolism of the falcon?"
},
{
  id:"3.4", m:3, read:3, ch:"Rites of kings and limits", title:"The wandering horse",
  hook:"To prove he ruled the world, a king set a horse loose for a year and dared anyone to stop it.",
  body:[
    "The Ashvamedha, the horse sacrifice, was the supreme rite of imperial power. A consecrated stallion was released to roam free for a year, trailed by hundreds of armed warriors. Wherever it wandered, that land was claimed; any rival had to fight the escort or submit. The horse’s path was a year-long territorial dare.",
    "When it returned, days of ceremony built to the sacrifice itself, wrapped in cosmic symbolism — the horse identified with the sun and the universe. Only a king who believed himself a universal sovereign would attempt it; the ruinous cost and ambition were the point."
  ],
  knot:"Did it involve a real animal killing? Scholars say yes — in its Vedic form the Ashvamedha was a literal sacrifice, dense with symbolism. It was last performed (by Jai Singh II of Jaipur) as recently as 1741. Strikingly, Celtic Ireland and ancient Rome had near-identical royal horse rites — the cluster may be 4,000+ years old.",
  apply:"Notice the mechanism: power was made legitimate by a public, expensive, hard-to-fake demonstration. ‘Costly signaling’ is still how credibility works — the year-long horse is just a startup burning real capital to prove it’s for real.",
  reflect:"What’s the modern ‘wandering horse’ in your field — the costly signal everyone reads as proof?"
},
{
  id:"3.5", m:3, read:3, ch:"Rites of kings and limits", title:"Making a king",
  hook:"How do you turn an ordinary man into a god-king? The Yajur Veda has a script for that.",
  body:[
    "The Rajasuya was the royal consecration — a year-long sequence ending in the anointing (abhisheka) that transformed a mortal into a sovereign. Along the way: soma offerings, a rigged dice game the king wins (cosmic dominance), a ritual cattle raid, a chariot race, and formulas by which the king ritually becomes the gods Indra, Varuna, Mitra. For the duration, he was treated as divine.",
    "The Vajapeya (‘drink of vigor’) was its flashier cousin, centered on a chariot race of seventeen — arranged so the sponsor wins — after which he climbs a post to ‘touch the sky.’ Unusually, even a Brahmin could perform it, to reach the highest rank."
  ],
  origin:"Vajasaneyi Samhita chapters 9–10. Yudhishthira’s Rajasuya in the Mahabharata is the most famous literary performance — it’s where Krishna kills Shishupala.",
  apply:"Status isn’t only seized; it’s conferred by ritual everyone witnesses — coronations, graduations, oaths of office, demo days. The ceremony is what makes the new status real to the group. Don’t skip your own thresholds; mark them.",
  reflect:"What transition in your life did you never properly mark — and might still?"
},
{
  id:"3.6", m:3, read:3, ch:"Rites of kings and limits", title:"The sacrifice of everything (and the human question)",
  hook:"Two of the Yajur Veda’s rites push sacrifice to its absolute limit — including one that names humans as offerings.",
  body:[
    "The Purushamedha is modeled on the horse sacrifice, but its listed ‘victim’ is a human being. Chapter 30 of the White Yajur Veda gives a long catalogue of human types mapped to cosmic categories.",
    "The Sarvamedha, the ‘sacrifice of all,’ goes further still: the performer symbolically offers everything he owns, including himself, then walks away from worldly life to become a wandering renouncer. It’s the ladder’s top rung — and its self-erasing end."
  ],
  knot:"Was the Purushamedha ever a real human killing? Mainstream scholarship says no: from the earliest texts it reads as symbolic — the human is bound, the formulas spoken, then released; the Brahmana says so. There’s no archaeological evidence of performance, and the long list of ‘victim’ types looks like a cosmic taxonomy, not a kill list. A minority of scholars wonder about a much older real antecedent. Honest answer: most likely always symbolic, historically uncertain.",
  apply:"The Sarvamedha holds a real idea: sometimes the highest move is to give it all away and start clean. Founders feel this — the strange freedom on the far side of being willing to lose everything you built.",
  reflect:"Is there something you’re gripping so hard that giving it up would actually free you?"
},
{
  id:"3.7", m:3, read:3, ch:"Heat, hymns, and the cosmic body", title:"The pot that glows like the sun",
  hook:"Before the main rite could begin, priests heated a clay pot until it glowed red, then poured milk into it as an offering to the sun.",
  body:[
    "The Pravargya is a fierce little preliminary. A special pot — the Mahavira, ‘great hero’ — is heated to incandescence. Fresh milk poured into the glowing vessel boils up in a violent rush of steam, offered to the Ashvins, the twin gods of dawn.",
    "The symbolism is direct and physical: the red-hot pot is the sun’s orb; the milk is the light pouring out of it; the rising steam is the meeting of earth and sky. It was held so potent and dangerous that it shaped where parts of the tradition could even be taught."
  ],
  origin:"Vajasaneyi Samhita chapters 36–39. Its purpose was to fortify the sacrificer — long life, unbroken faculties — before the ordeal of the soma sacrifice.",
  apply:"A warm-up that’s an ordeal in miniature. Athletes and performers know this: the ritual intensity before the main event is what tunes you for it. Design a real pre-game, not a casual one.",
  reflect:"What’s your pre-performance ritual — and is it serious enough to actually prime you?"
},
{
  id:"3.8", m:3, read:3, ch:"Heat, hymns, and the cosmic body", title:"‘Om Namah Shivaya’ is 3,000 years old",
  hook:"The most chanted mantra in all of Shaivism is a direct quotation from the Yajur Veda — written for a storm god most people have never heard of.",
  body:[
    "Chapter 16 of the White Yajur Veda is the Shatarudriya, the ‘hymn of a hundred Rudras,’ better known as the Shri Rudram. It bows to Rudra — the wild, howling deity of storms and the untamed — in all his hundred forms: Rudra in forests and crossroads, in armies and marketplaces, even, astonishingly, among thieves and outcasts. Nothing is outside him.",
    "Buried in it is the phrase namah shivaya — ‘homage to Shiva,’ to ‘the auspicious one.’ That is the seed of the five-syllable mantra Na-mah-Shi-va-ya, the heartbeat of later Shiva worship. Rudra the terror slowly became Shiva the auspicious; the mantra rode along."
  ],
  origin:"Vajasaneyi Samhita chapter 16 (and Taittiriya Samhita 4.5 in the Black branch). Still chanted daily in Shaiva temples; in full it takes about 45 minutes.",
  apply:"Watch how a name softens over millennia: the storm you once only feared becomes the auspicious thing you invoke for protection. We do this with our own fears — the threat we make peace with becomes a source of strength.",
  reflect:"Which ‘Rudra’ in your life — a fear, a force you resist — might be a ‘Shiva’ if you turned toward it?"
},
{
  id:"3.9", m:3, read:3, ch:"Heat, hymns, and the cosmic body", title:"The cosmic body, and a verse that still divides India",
  hook:"One Vedic hymn says the universe was made from the body of a sacrificed cosmic being. One of its verses became the most fought-over lines in Indian history.",
  body:[
    "The Purusha Sukta imagines a primordial Person (Purusha) sacrificed by the gods to make the world: his mind became the moon, his eye the sun, his breath the wind, his feet the earth. Creation as self-dismemberment — the universe literally made of the sacrifice. It recurs in the Yajur Veda as the cosmic frame for every rite.",
    "Then verses 11–12 map the four social classes onto the body: priests from the mouth, warriors from the arms, producers from the thighs, laborers from the feet. Those lines have been read for centuries as divine sanction for caste."
  ],
  knot:"Genuinely contested, and worth holding honestly. Many scholars argue the class-verse is a later addition — its language and totalizing style don’t match the older hymns. Traditional readers counter that the order is functional (roles), not hereditary, and that later caste rigidity is a corruption. And critics in the lineage of B. R. Ambedkar argue that, whatever its origin, the verse became the textual scaffolding for real, lasting harm. All three can be true at once: uncertain origin, coherent traditional reading, undeniable downstream damage.",
  apply:"A live lesson in textual power: a few lines, possibly inserted, shaped a billion lives. Founding documents get edited, and the edits can outweigh the original. Read origins carefully — and watch who benefits from a given reading.",
  reflect:"Want a full card on the caste debate and how scholars actually weigh it?"
},

{
  id:"3.10", m:3, read:3, ch:"Building the cosmos: the fire-altar", title:"The eagle over Panjal",
  hook:"In 1975, scholars rushed to a field in Kerala to film a ritual they feared was about to vanish forever. What happened as it ended stunned them.",
  body:[
    "For most of the 20th century the Agnicayana — the twelve-day falcon-altar rite — was thought all but extinct. Then word reached the Dutch scholar Frits Staal that a lineage of Nambudiri Brahmins in Kerala still held it. In April 1975, in the village of Panjal, seventeen priests performed the full rite while Staal’s team filmed every hour — the first complete documentation of a ritual roughly three thousand years old.",
    "They built the bird-shaped altar from over a thousand bricks, made fire by friction, pressed soma, and chanted liturgy carried across a hundred unbroken generations. (Out of care, animal offerings were made with rice-paste effigies, not live animals — a choice some other Vedic lineages criticised.)",
    "Then the coda. As the rite closed, a large bird of prey circled the enclosure. Within the hour, the first monsoon rains broke. In the ritual’s own logic, the offering had been accepted."
  ],
  knot:"Read it how you like — coincidence or confirmation. What isn’t in doubt: a community had carried an extraordinarily complex technical tradition, by memory alone, for ~3,000 years. The rite promises an ‘immortal body’; the transmission itself is that body.",
  apply:"Some things survive only because one unbroken chain of people refused to let them drop. If you hold rare knowledge or a craft, you are the lineage — document it, teach it, before the chain thins to nothing.",
  reflect:"What do you carry that would simply vanish if you didn’t pass it on?"
},

/* ---------- MODULE 4 — THE MEANING BEHIND THE ACT ---------- */
{
  id:"4.1", m:4, read:3, title:"When ritual started asking ‘why?’",
  hook:"After the formulas came something new in human thought: prose that asked what the ritual actually means.",
  body:[
    "The Brahmanas are the second layer of each Veda — prose manuals explaining the rites: how to perform them, and why they work. With them, India invents systematic interpretation.",
    "Their key idea is bandhu — ‘bond, connection.’ Every ritual element secretly corresponds to something cosmic and something in you. The ritual fire is the sun is the spark of life in the body. Knowing the bandhu is what makes the act effective — not blind performance, but seeing the hidden wiring between the small act and the vast world.",
    "This is the seed of everything that follows. Once you believe the outer act mirrors the inner self mirrors the cosmos, you’re one step from the Upanishads’ bombshell: that the self and ultimate reality are, in fact, the same."
  ],
  apply:"Bandhu is just the discipline of asking, for any practice: what does this actually correspond to, and why does it work? The person who knows the why behind the ritual beats the one running it on autopilot — in code, in craft, in business.",
  reflect:"Name a routine you perform whose real ‘why’ you’ve never examined."
},
{
  id:"4.2", m:4, read:3, title:"The book of a hundred paths",
  hook:"The Yajur Veda’s great prose companion is one of the largest and richest works in all of ancient Sanskrit — and it reads like an encyclopedia by a brilliant, digressive mind.",
  body:[
    "The Shatapatha Brahmana — the ‘Brahmana of a hundred paths’ — belongs to the White Yajur Veda. It’s enormous: a hundred chapters of ritual instruction braided with myth, etymology, cosmology, and argument. Frits Staal called it ‘a veritable encyclopedia of meandering opinions.’",
    "It’s traditionally linked to Yajnavalkya (the same sage from the split, and the towering philosopher we’ll meet at the summit). Modern scholars see it as the work of his school over generations, not one hand.",
    "Its greatest gift: it doesn’t just tell you what to do — it thinks out loud, preserving how these minds reasoned, what they found puzzling, the stories they told to explain the world. And its final book turns into one of the deepest philosophical texts ever written."
  ],
  origin:"Composed roughly 900–600 BCE; survives in two recensions (Madhyandina and Kanva). Translated into English by Julius Eggeling in five volumes.",
  reflect:"Want me to pull a specific story or passage from it for you?"
},
{
  id:"4.3", m:4, read:3, title:"The fish that warned Manu",
  hook:"Long before Noah reached most of the world’s ears, the Yajur Veda’s prose told of a flood, an ark, and a sole survivor — saved by a fish.",
  body:[
    "Manu, the first man, is washing his hands when a tiny fish in his palms speaks: ‘Raise me, and I will save you.’ He keeps it; it outgrows a jar, then a pit, until he carries it to the sea. Grown vast, it warns him: a flood is coming. Build a ship. When the waters rise, board it, and tie it to my horn.",
    "The flood comes. The fish — now horned and enormous — tows Manu’s ship through the rising waters to the highest northern mountain, where he waits out the deluge. Afterward, alone, he makes offerings; a year later a woman rises from the waters, and together they begin humanity again.",
    "It’s the oldest flood story in Indian literature, from the Shatapatha Brahmana — at least 2,700 years old."
  ],
  knot:"Borrowed from the Mesopotamian flood (Gilgamesh, then Noah)? Most Indologists say no — it grows independently within the Indian tradition. The fish is uniquely Indian, and the logic is ritual, not moral: Manu is saved not for being righteous but for caring for the creature. Flood myths recur worldwide; shared skeleton, separate growth.",
  apply:"The fish asks to be protected before it can protect. Tend the small thing that warns you — the early signal, the inconvenient data point — and it may grow into the thing that saves you.",
  reflect:"What small warning are you keeping in a jar instead of taking to the sea?"
},
{
  id:"4.4", m:4, read:3, title:"The god who fell apart",
  hook:"In the Yajur Veda’s cosmology, the creator doesn’t sit enthroned above the world. He pours himself out making it — and collapses, exhausted, in pieces.",
  body:[
    "Prajapati, ‘Lord of Creatures,’ is the creator of the Brahmana age. He desires to create, and does it through heat (tapas) and self-emission — seasons, creatures, fire, gods, all streaming out of him. But creation is self-spending. His limbs loosen, his joints come undone; he lies scattered and depleted while the world he made stands without him.",
    "This is why the great fire altar exists. Its thousand bricks are Prajapati’s scattered body; to build it is to put the creator back together. Sacrifice isn’t begging a powerful god for favors — it’s the work of restoring a god who emptied himself to make you."
  ],
  origin:"Developed across the Shatapatha Brahmana, especially the fire-altar books (6–10).",
  apply:"A startling, useful inversion: creation costs the creator everything, and the work doesn’t end at ‘made’ — it needs constant reassembly. Anything you build (a company, a body of work, a self) is held together by ongoing repair, not a one-time act.",
  reflect:"What that you’ve built are you assuming will hold itself together — and quietly needs reassembling?"
},
{
  id:"4.5", m:4, read:3, title:"The fire that ran east",
  hook:"One story in the Yajur Veda’s prose is secretly a map — of how a whole civilization moved across a subcontinent.",
  body:[
    "A king, Videgha Mathava, carries the sacred fire Agni in his mouth. The fire leaps out and races eastward, burning across the land, drying the wet ground as it goes. The king and his priest chase it river by river — until it reaches the Sadanira (today’s Gandak, in Bihar) and stops. East of that river, the text says, the land was not yet ‘burned’ — not yet settled by the Vedic people. Later they cross, and ‘conquer’ it for the sacrifice.",
    "Scholars read this as cultural memory in mythic form: a record of the eastward spread of Vedic culture from the northwest into the Ganges plain — the very region where, soon after, the great Upanishadic debates would happen."
  ],
  origin:"Shatapatha Brahmana 1.4.1. The kingdom of Videha here is the same Janaka’s-court world we reach at the summit.",
  apply:"Myth often stores history we’d otherwise lose — a migration encoded as a moving fire. Your own founding stories (‘how we started,’ ‘why we do it this way’) do the same job: carrying real history inside a memorable shape. Worth decoding.",
  reflect:"What origin story in your work might be encoding a fact worth recovering?"
},
{
  id:"4.6", m:4, read:3, title:"Speech as a force of nature",
  hook:"This tradition was so obsessed with getting words exactly right that it treated speech itself as a goddess who helped make the world.",
  body:[
    "In the Shatapatha’s cosmology, creation begins when Prajapati joins mind (manas) with speech (vac). Vac is a goddess; through her the Vedas — and the worlds — take shape. Speech doesn’t describe reality after the fact; it helps structure it.",
    "This is why the priests were fanatical about precision. A mispronounced syllable, a wrong pitch, could invert a ritual’s effect. Their concern for exact sound produced the world’s first real science of language — phonetics and grammar, centuries before anyone else."
  ],
  origin:"Across the Shatapatha Brahmana; this obsession with sound is what powered the memory machine and the work of grammarians like Panini.",
  apply:"If you build anything with words — a brand, a story, a pitch — this is your tradition. Imprecise speech doesn’t just mislead an audience; it creates drift between what you believe and what you’ve said. Tighten the words and you tighten the thinking.",
  reflect:"Where is your language imprecise in a way that’s quietly costing you?"
},

{
  id:"4.7", m:4, read:3, title:"The four levels of speech",
  hook:"An old verse says speech has four levels — and you only ever hear the fourth. The other three happen before a word is spoken.",
  body:[
    "A famously dense Rigvedic line runs: ‘Speech has four measured forms; the wise know them. Three are hidden; mortals speak only the fourth.’ Later thinkers — above all the grammarian-philosopher Bhartrihari — drew out the model.",
    "Para, the deepest: pure and unmanifest, meaning and awareness still undivided, before any stirring. Pashyanti, ‘the seeing’: the flash where you grasp the whole meaning at once, before it breaks into words or sequence. Madhyama, ‘the middle’: the fully-formed thought in your head — worded, structured, still silent. Vaikhari, ‘the deployed’: the actual sound in the air, the only level anyone else can hear.",
    "So ordinary speech is the tip of an iceberg. Most of what a word carries was decided three levels down, where you ‘saw’ it whole."
  ],
  origin:"The seed verse is Rigveda 1.164.45; the four-level system is elaborated later, most fully in Bhartrihari’s Vakyapadiya (around the 5th century CE).",
  apply:"Gold for anyone who works with words. ‘It sounded better in my head’ is real loss at each translation — pashyanti to madhyama to vaikhari. Spend more time at the deeper levels, until the whole thing is clear and felt, and the spoken version carries that weight. Speak from the seeing, not just the wording.",
  reflect:"When did you last say something that landed exactly right? You were probably speaking from pashyanti — the whole idea seen at once."
},

/* ---------- MODULE 5 — FROM DOING TO KNOWING ---------- */
{
  id:"5.1", m:5, read:3, title:"Into the forest",
  hook:"Between the ritual manuals and the philosophy lies a stranger, quieter layer — texts meant to be studied alone, in the forest.",
  body:[
    "The Aranyakas — ‘forest texts’ — are the third layer of each Veda. They were taught away from the village, partly because some rites were considered too dangerous for ordinary settings, and partly because they suited a later stage of life: the householder who has done his duties and withdraws to go deeper.",
    "Their great move is internalization. The Brahmana says: perform the fire offering; it corresponds to the breath. The Aranyaka asks: then could I perform it as breath, with no fire at all? And the answer begins to be yes. The ‘inner agnihotra’ makes your in-breath and out-breath the morning and evening offering. The ritual turns inward and becomes meditation."
  ],
  apply:"The whole arc of mastery in miniature: first you do the thing externally, with props and rules; eventually you can do it internally, with nothing. The scaffolding comes down. Notice where you still need the props — and where you’re ready to drop them.",
  reflect:"What practice are you ready to take from ‘external ritual’ to ‘internal’?"
},
{
  id:"5.2", m:5, read:3, title:"The four floors of every Veda",
  hook:"Here’s the single most useful map in this whole course. Each Veda is built in four ascending floors.",
  body:[
    "Doing — the Samhita: the hymns and formulas. What do I say and do?",
    "Explaining — the Brahmana: the prose on why the ritual works. Why does this work?",
    "Internalizing — the Aranyaka: the rite becomes meditation. What is this act inside me?",
    "Knowing — the Upanishad: the self is found to be the cosmos. Who am I, really?",
    "It maps onto a human life — student, householder, forest-dweller, renouncer — and onto how anyone goes deep into anything: rote practice, then understanding, then internal mastery, then a quiet identity-level knowing. Tradition’s own image: the Samhita is the tree, the Brahmanas its flowers, the Aranyakas the unripe fruit, the Upanishads the ripe fruit."
  ],
  apply:"Use it as a self-diagnostic for any skill: which floor am I on? Most people get stuck on floor one (doing) and mistake it for the whole building. The view is from the top.",
  reflect:"Pick a skill you care about. Which of the four floors are you actually on?"
},

/* ---------- MODULE 6 — THE SUMMIT (UPANISHADS) ---------- */
{
  id:"6.1", m:6, read:3, ch:"Isha — philosophy inside the ritual book", title:"Philosophy hidden in a ritual manual",
  hook:"The shortest of the great Upanishads is also the most surprisingly placed: it’s the final chapter of a book of ritual formulas.",
  body:[
    "The Isha Upanishad is just 18 verses — and it sits as chapter 40, the last chapter, of the White Yajur Veda’s Samhita. Every other major Upanishad is appended later, in the philosophical layers. This one closes the ritual book itself. After 39 chapters of how to do, the text turns and asks what it all means.",
    "Its first line sets everything: the divine isn’t somewhere else, at the end of a ritual. It already pervades everything — the moving world, and you."
  ],
  verse:{ iast:"ishavasyam idam sarvam yat kincha jagatyam jagat", en:"All this — whatever moves in this moving world — is enveloped by the Lord.", ref:"Isha Upanishad 1" },
  origin:"Shukla Yajur Veda, Vajasaneyi Samhita, ch. 40. Gandhi said that if every scripture were lost but this one verse survived, his whole tradition would live on.",
  reflect:"Want the next layer on Isha — its teaching on how to act, or its closing prayer to the sun?"
},
{
  id:"6.2", m:6, read:3, ch:"Isha — philosophy inside the ritual book", title:"Renounce, and enjoy",
  hook:"In one breath the Isha Upanishad tells you to renounce everything — and to enjoy fully. It means it.",
  body:[
    "The full first verse: ‘All this is enveloped by the Lord. By that renounced, enjoy. Do not covet the wealth of any other.’ Renounce and enjoy — not a contradiction but the instruction. Give up ownership and grasping; then you’re free to actually enjoy what passes through your hands.",
    "The next verse refuses world-denial too: ‘Doing works here, one should wish to live a hundred years.’ Don’t flee life into a cave. Act fully, live long, work hard — but without the clinging that makes action bind you. This is the seed of the Bhagavad Gita’s teaching: your right is to the action, never to its fruits."
  ],
  verse:{ iast:"tena tyaktena bhunjitha ma gridhah kasya svid dhanam", en:"By that renounced, enjoy; do not covet the wealth of anyone.", ref:"Isha Upanishad 1" },
  knot:"That phrase, tena tyaktena, splits great commentators: ‘enjoy through renunciation’ (Shankara — inner detachment) versus ‘enjoy what God has allotted you’ (Madhva — theistic). The ambiguity is real and old.",
  apply:"This is the cure for founder anxiety. You perform worse when you need the outcome — the pitch you can’t lose, the launch that has to land. Pour everything into the work, then genuinely release the result. Caring about quality and being controlled by outcome are different; Isha says you can have the first without the second.",
  reflect:"Which current outcome are you gripping so hard it’s degrading the work itself?"
},
{
  id:"6.3", m:6, read:3, ch:"Isha — philosophy inside the ritual book", title:"Fullness from fullness",
  hook:"The Isha opens with a riddle about infinity that mathematics wouldn’t formalize for another 3,000 years.",
  body:[
    "Its peace invocation: ‘That is whole; this is whole. From the whole, the whole arises. Take the whole from the whole, and the whole still remains.’ Infinity minus infinity is still infinity. The ultimate reality gives rise to the entire world without being diminished at all — like a flame lighting another flame, losing nothing.",
    "The Upanishad closes with a startling prayer to the sun: ‘The face of truth is hidden by a golden disc. O Sun, remove it, that I may see.’ Then the turn — the seeker realizes the light he was praying to is what he is: so’ham asmi, ‘I am that.’"
  ],
  verse:{ iast:"purnam adah purnam idam purnat purnam udachyate", en:"That is whole; this is whole; from the whole the whole arises.", ref:"Isha Upanishad, invocation" },
  apply:"A model for generosity that scares people: giving from a true source doesn’t deplete it. Knowledge, attention, teaching, love — pour them out and the source remains whole. Scarcity thinking is the golden disc over that truth.",
  reflect:"Where are you treating something abundant in you as if it were scarce?"
},
{
  id:"6.4", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"The man who silenced a room of sages",
  hook:"Picture a king, a thousand cows with gold tied to their horns, and a hall full of the realm’s greatest philosophers — daring anyone to claim he’s the wisest.",
  body:[
    "King Janaka of Videha staged the ultimate contest: a thousand cows, gold on each horn, for whoever among the assembled sages was the greatest knower of Brahman. No one moved. Then Yajnavalkya simply told his student, ‘Drive them home.’ The hall erupted — the arrogance — and one by one the great sages rose to interrogate him.",
    "He answered them all. This is the heart of the Brihadaranyaka Upanishad, the largest and one of the oldest Upanishads, attached to the White Yajur Veda’s Shatapatha Brahmana. Its hero is the first great personality of philosophy: brilliant, blunt, occasionally ruthless, utterly unafraid."
  ],
  origin:"Brihadaranyaka Upanishad, books 3–4. ‘Brihad-aranyaka’ means ‘the great forest text’ — philosophy that outgrew the ritual book it was born in.",
  reflect:"Want to meet the two who pushed him hardest — his wife Maitreyi, and the philosopher Gargi?"
},
{
  id:"6.5", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"‘For the love of the Self’",
  hook:"About to leave home forever, a sage offers his wife half his wealth. She asks instead: will it make me immortal?",
  body:[
    "Yajnavalkya is renouncing the world and dividing his property between his two wives. Maitreyi stops him with a question: ‘If I had the whole earth full of wealth, would I become immortal through it?’ No, he says — you’d live like the rich, but wealth buys no immortality. ‘Then what would I do with that,’ she answers, ‘which will not make me immortal?’ She refuses the estate and demands the teaching instead.",
    "His answer is one of the quietly devastating lines in philosophy: we don’t love things for themselves. ‘Not for the love of the husband is the husband dear, but for the love of the Self. Not for the love of the wife is the wife dear, but for the love of the Self.’ Every love, traced to its root, is the Self loving itself through what it loves."
  ],
  verse:{ iast:"na va are patyuh kamaya patih priyo bhavati, atmanas tu kamaya patih priyo bhavati", en:"Not for the love of the husband is the husband dear, but for the love of the Self.", ref:"Brihadaranyaka 2.4.5" },
  apply:"Not cold — clarifying. The thing you love is a window; what moves you is the life on both sides of it. It reframes attachment: love people fully, and know that what you’re touching through them is something larger and unkillable.",
  reflect:"Read honestly: what are you loving ‘for the love of the Self’ without admitting it?"
},
{
  id:"6.6", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"The woman who made the sage flinch",
  hook:"India’s first recorded woman philosopher backed the greatest sage of the age into a corner — twice.",
  body:[
    "Gargi Vachaknavi rose at Janaka’s court and asked a relentless question: this world is woven on water — and water on what? On air. And air? She climbed the ladder of reality rung by rung — worlds upon worlds, sun, moon, stars, the realm of Brahman — ‘and that is woven on what?’ At that, Yajnavalkya warned her: ask no further, ‘lest your head fall off.’ Some questions dissolve the questioner. She sat.",
    "But she came back. Her second round pushed him to name the Imperishable (akshara) — and he could only describe it by what it is not: not coarse, not fine, not short, not long, without shadow, without darkness, eyeless, earless, nameless. She accepted, and told the hall: none of you will beat this man."
  ],
  origin:"Brihadaranyaka 3.6 and 3.8. Gargi is celebrated as one of the earliest women philosophers anywhere.",
  apply:"Her method is the engine of all inquiry: keep asking ‘and that rests on what?’ until you hit bedrock or the question breaks. The discipline isn’t having answers — it’s refusing to stop one rung early.",
  reflect:"What belief have you never pushed past its first ‘why’? Ask it down a few rungs."
},
{
  id:"6.7", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"Not this, not this",
  hook:"Asked to define ultimate reality, the sharpest mind of the age refused to say a single positive thing about it.",
  body:[
    "Yajnavalkya’s signature method is neti neti — ‘not this, not this.’ How do you describe Brahman, the ground of everything? You can’t, positively — because any quality you name makes it finite, one thing among others. So you describe it only by stripping away what it is not. Not this. Not that. What remains, undeniable after every subtraction, is it.",
    "This is apophatic thinking — definition by negation — and he’s doing it a thousand years before European mystics gave it a name. Humility and precision at once: the honest admission that the most important thing can’t be boxed, only approached by clearing away the false."
  ],
  verse:{ iast:"sa esha neti neti atma", en:"That Self is ‘not this, not this.’", ref:"Brihadaranyaka 3.9.26" },
  apply:"A real thinking tool. To find what something is, aggressively rule out what it’s not: who is not our customer, what is not the problem, what am I not. Munger’s inversion, Taleb’s via negativa, product focus — all neti neti. Clarity by subtraction is faster and more honest than clarity by addition.",
  reflect:"Run it once: name five things your current main goal is definitely NOT."
},
{
  id:"6.8", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"‘I am Brahman’",
  hook:"Four words at the summit of the Yajur Veda’s philosophy — and one of the most radical claims any human has made.",
  body:[
    "Aham brahmasmi: ‘I am Brahman.’ Not ‘I am part of God,’ not ‘God is in me’ — the identity is total. The innermost self (atman) and the ground of all reality (brahman) are, when truly known, the same. The whole four-floor climb — doing, explaining, internalizing, knowing — ends here, with the wall between self and cosmos simply dissolving.",
    "It’s one of the four ‘great sayings’ (mahavakyas) the tradition treasures. In context it’s almost matter-of-fact: in the beginning all this was Brahman; it knew itself as ‘I am Brahman,’ and so became everything. To realize it isn’t arrogance — it’s waking up to what was always the case."
  ],
  verse:{ iast:"aham brahmasmi", en:"I am Brahman.", ref:"Brihadaranyaka 1.4.10" },
  knot:"Schools split on how to take it: total non-duality (Advaita — you literally are the absolute) versus more qualified readings where the self is of God’s nature but not simply identical. Centuries of philosophy hang on this fork.",
  apply:"Even held lightly, it’s a stance against smallness: the part of you that watches your thoughts isn’t your job title, your mood, or your reputation. Identity built that deep is hard to threaten.",
  reflect:"What would change today if you took your identity from the deepest layer, not the surface one?"
},
{
  id:"6.9", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"You become what you do",
  hook:"The first clear statement of karma and rebirth in human literature is a single, almost physical, line about desire.",
  body:[
    "The Brihadaranyaka gives the earliest explicit account of the karma cycle: ‘As is your desire, so is your will; as is your will, so is the deed you do; as is the deed, so is the destiny you reach.’ Desire shapes intention, intention shapes action, action shapes what you become. You are, over time, the output of what you repeatedly want and do.",
    "And it doesn’t stop at death: clinging to its works, the self carries on to a new life to continue the unfinished pattern. Whatever you make of rebirth, the mechanism is sobering — you are being authored, daily, by your desires."
  ],
  verse:{ iast:"yathakamo bhavati tatkratur bhavati", en:"As is one’s desire, so is one’s will — and so one becomes.", ref:"Brihadaranyaka 4.4.5" },
  apply:"Strip the metaphysics and it’s brutally practical: curate your desires, because they’re quietly compiling into your character. You don’t rise to your goals; you fall to what you habitually want. Audit the wants.",
  reflect:"What recurring desire is authoring a version of you that you don’t actually want to become?"
},
{
  id:"6.10", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"From the unreal to the real",
  hook:"One of the most beautiful prayers ever written is three steps long — and you may already half-know it.",
  body:[
    "From the Brihadaranyaka: ‘Lead me from the unreal to the real; from darkness to light; from death to immortality.’ Three movements, each the same shape: from the lesser to the fuller. From illusion to truth, from ignorance to understanding, from the perishable to the deathless.",
    "It isn’t asking to be rescued out of the world but to be turned toward what’s real within it. A daily orientation — more compass than escape."
  ],
  verse:{ iast:"asato ma sad gamaya, tamaso ma jyotir gamaya, mrityor ma amritam gamaya", en:"Lead me from the unreal to the real, from darkness to light, from death to immortality.", ref:"Brihadaranyaka 1.3.28" },
  apply:"Read it as a filter for your day: is this move toward the real or the fake, the clear or the murky, the living or the deadening? Three questions that quietly sort most decisions.",
  reflect:"Name one current choice. Which direction does each of the three steps point you?"
},
{
  id:"6.21", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"How many gods are there?",
  hook:"Pressed by his fiercest challenger, the great sage was asked the oldest question of all: how many gods are there? His answer is a staircase down to one.",
  body:[
    "At King Janaka’s contest, the philosopher Vidagdha Shakalya pushed Yajnavalkya harder than anyone. ‘How many gods are there?’ Yajnavalkya began with the ritual count: ‘Three thousand three hundred and three.’ ‘Yes — but how many really?’ And the numbers fell: thirty-three. Then six. Then three. Then two. Then one and a half. Then, finally, one.",
    "The thirty-three, he explained, are the great forces — the elements we live in, the powers that leave the body at death, the months of the sun, with Indra and Prajapati among them. All the thousands are merely their glories. Reduce and reduce, and behind every god stands a single reality: breath, life, Brahman. The crowded sky collapses into one.",
    "(For Shakalya it ended badly: when Yajnavalkya turned a question back on him that he could not answer, the text says his head fell off — and his bones were carried away in the dark.)"
  ],
  verse:{ iast:"katy eva devah", en:"“How many gods are there?” — and the count descends, at last, to one.", ref:"Brihadaranyaka 3.9" },
  apply:"Occam’s razor run as a live duel: many gods, fewer forces, fewer principles, one ground. You don’t have to deny the many to see the one beneath them — just keep asking ‘and what is that, really?’ until the list collapses.",
  reflect:"Where in your thinking are you holding ‘thirty-three gods’ that are really one thing?"
},
{
  id:"6.22", m:6, read:3, ch:"Brihadaranyaka — Yajnavalkya’s forest", title:"Everything is the honey of everything",
  hook:"One of the oldest images of interdependence: the earth is the honey of all beings, and all beings are the honey of the earth.",
  body:[
    "The Brihadaranyaka’s ‘honey doctrine’ (madhu-vidya) moves through a long, hypnotic list. The earth is the honey — the essence, the sweetness — of all beings; and all beings are the honey of the earth. The waters are the honey of all beings; all beings, of the waters. Fire, wind, sun, speech, mind, the self — each is the honey of all the others, and all the others its honey.",
    "It isn’t poetry for its own sake. It’s a claim about reality: nothing merely ‘uses’ anything else. Everything is at once nourished by and nourishing to everything else, and the same single luminous self shines in the sun, in the eye, in fire, in you. Know that, the text says, and ‘you become the honey of all, and all becomes honey for you.’"
  ],
  origin:"Brihadaranyaka Upanishad 2.5 — the ‘honey chapter,’ linked to the sage Dadhyanch, who guarded this very knowledge (it nearly cost him his head — a story waiting among the gods).",
  apply:"Every model of mutual dependence — ecosystems, networks, supply chains, real relationships — rediscovers this. You can’t be the honey of your customers, your audience, your people without them being yours. Extraction misreads the structure; mutual nourishment is the structure.",
  reflect:"Name a relationship you’ve been treating as one-directional. Which way is the honey actually flowing?"
},
{
  id:"6.11", m:6, read:3, ch:"Taittiriya — the ladder of the self", title:"Speak the truth, walk the path",
  hook:"The oldest graduation speech we have is 2,500 years old, and it still lands harder than most given this year.",
  body:[
    "The Taittiriya Upanishad (from the Black Yajur Veda) preserves the charge a teacher gives students as they leave the school. It opens: ‘Speak the truth. Walk in dharma. Do not neglect your study.’ Then, unforgettably: ‘Let your mother be a god to you. Let your father be a god. Let your teacher be a god. Let your guest be a god.’",
    "It’s startlingly concrete — no metaphysics, just how to live. Keep your word. Do your duty. Honor the people who made and taught you. Don’t let the thread of learning break. It was still recited at Indian university convocations in the 20th century, and reads like it was written for one."
  ],
  verse:{ iast:"satyam vada, dharmam chara", en:"Speak the truth; walk in the right.", ref:"Taittiriya Upanishad 1.11" },
  apply:"For anyone building an audience or a brand: ‘speak the truth’ is also strategy. Every gap between what you believe and what you publish is a slow leak — in trust with others, and in clarity with yourself. Close the gap.",
  reflect:"Where is there a gap right now between what you say publicly and what you actually believe?"
},
{
  id:"6.12", m:6, read:3, ch:"Taittiriya — the ladder of the self", title:"The five sheaths",
  hook:"Long before psychology, the Yajur Veda mapped a human being as five nested layers — and it’s still one of the best diagnostics going.",
  body:[
    "The Taittiriya describes the self as five sheaths (koshas), each subtler than the last: the body made of food (annamaya), the layer of breath and vital energy (pranamaya), the mind of thoughts and emotions (manomaya), the intellect that discerns and decides (vijnanamaya), and the innermost sheath of bliss (anandamaya). We habitually mistake the outermost — ‘I am this body’ — for the whole.",
    "The model says: go inward, layer by layer, and you find you are more than any single one. Even bliss is a sheath, not the final thing — the true Self is what’s wrapped inside them all."
  ],
  apply:"Use it as a burnout locator. When something’s off, ask which layer. Exhausted but thinking clearly? That’s energy (prana) — sleep, breath, movement — not a strategy problem. Body fine but mind foggy? That’s the mental layer — noise, overload. Most people try to fix a sleep problem with more information. Diagnose the right floor before adding inputs.",
  reflect:"Right now, which of the five layers most needs attention — and which have you been over-feeding instead?"
},
{
  id:"6.13", m:6, read:3, ch:"Taittiriya — the ladder of the self", title:"Sent back, and back, and back",
  hook:"A student asks his father, ‘What is Brahman?’ The father won’t tell him. He makes him find it himself — five times.",
  body:[
    "Bhrigu asks his father Varuna to teach him the ultimate. Varuna won’t hand it over; he sends him off to discover it through tapas — focused contemplative effort. Bhrigu returns: ‘Brahman is food’ (matter, the body). Not wrong — but go back. He returns: ‘Brahman is breath’ (life). Back again. ‘Mind.’ Back. ‘Knowledge.’ Back once more. Finally: ‘Brahman is bliss — ananda. From bliss all beings are born, by bliss they live, into bliss they return.’ This time, Varuna is silent. He has it.",
    "Each answer was true as far as it went; you really can reduce the world to matter, then life, then mind, then intelligence. But the deepest layer is joy — and Bhrigu had to climb there himself, because that kind of knowing can’t be told."
  ],
  verse:{ iast:"anando brahmeti vyajanat", en:"He knew Bliss to be Brahman.", ref:"Taittiriya Upanishad 3.6" },
  apply:"The best teachers withhold the answer on purpose. What you derive yourself, you own; what you’re told, you forget. When you actually want someone to get something — a teammate, a kid, yourself — resist handing over the answer.",
  reflect:"What are you waiting to be told that you should be sending yourself back to discover?"
},
{
  id:"6.14", m:6, read:3, ch:"Katha — Nachiketa and Death", title:"The boy who out-argued Death",
  hook:"A father, in anger, says ‘I give you to Death.’ His young son takes him literally — and goes.",
  body:[
    "Nachiketa’s father is performing a sacrifice, giving away his worn-out cows — a hollow generosity the boy sees through. ‘Father, to whom will you give me?’ he presses, until his father snaps: ‘To Death I give you!’ So Nachiketa walks to the house of Yama, the god of death, and finds him out. He waits three days at the door without food.",
    "Yama returns, ashamed to have left a young guest unwelcomed, and grants three boons. First: that his father be at peace and welcome him home. Granted. Second: the secret of the sacred fire that leads to heaven. Granted — and Yama names the fire after the boy. Third: ‘When a person dies — some say he still exists, some say he doesn’t. Teach me the truth of it.’ And Death tries to wriggle out of answering."
  ],
  origin:"Katha Upanishad, Black Yajur Veda. The seed of the story is older still, in the Yajur Veda’s prose.",
  reflect:"Want what happens next — how Yama tries to bribe him out of the question?"
},
{
  id:"6.15", m:6, read:3, ch:"Katha — Nachiketa and Death", title:"The pleasant and the good",
  hook:"Death offers the boy everything a human could want — to make him drop the hard question. Watch how he refuses.",
  body:[
    "Yama tries to deflect Nachiketa’s question about death. Ask for something else, he says — sons and grandsons, herds, gold, vast land, long life. Beautiful women, chariots, music — ‘delights not to be had by mortals; I’ll give them all.’ Just don’t ask about death.",
    "Nachiketa doesn’t flinch: ‘These last only till tomorrow, and they wear out the senses. Even a long life is short. Keep your horses and your dancing girls.’ He names exactly what’s happening and rejects it. Yama, impressed, gives the teaching — and lays out the law beneath the test: there are two paths, the pleasant (preyas) and the good (shreyas). Both come to everyone. The wise discern between them and choose the good; the foolish, chasing comfort, choose the pleasant and miss the goal."
  ],
  verse:{ iast:"shreyash cha preyash cha manushyam etah", en:"The good and the pleasant both approach a person; the wise discern between them.", ref:"Katha Upanishad 1.2.2" },
  apply:"The sharpest decision filter in the corpus — and not about grim self-denial, but intelligence. Most drift happens through a hundred small preyas choices that each look harmless. Tag your real decisions: pleasant-driven or good-driven? Not to moralize — to see the pattern before it sets.",
  reflect:"Name a recent choice. Was it preyas or shreyas — and did you even notice at the time?"
},
{
  id:"6.16", m:6, read:3, ch:"Katha — Nachiketa and Death", title:"The chariot of the self",
  hook:"The Yajur Veda’s image for self-mastery is a chariot — and it explains exactly why willpower keeps failing you.",
  body:[
    "Yama gives Nachiketa a map of the person: the Self is the rider in the chariot; the body is the chariot; the intellect (buddhi) is the charioteer; the mind (manas) is the reins; the senses are the horses; and the objects of the senses are the roads they run toward. When the charioteer is alert and the reins are firm, the horses are guided. When the charioteer is asleep, the horses bolt — and the chariot goes wherever the road pulls.",
    "The point: control doesn’t come from fighting the horses. It comes from a sharp, awake charioteer — clear discernment holding steady reins."
  ],
  verse:{ iast:"atmanam rathinam viddhi, shariram ratham eva tu", en:"Know the Self as the rider, the body as the chariot.", ref:"Katha Upanishad 1.3.3" },
  apply:"This is the fix for the attention economy. Your senses (horses) are yanked all day toward notifications and comparisons (the roads). Whipping them — brute willpower — is exhausting and loses. Instead sharpen the charioteer: lower the stimulation, make the reasoning explicit, build conditions where good judgment can actually steer. Don’t fight the horses; wake the driver.",
  reflect:"Is your charioteer awake right now — or have you been whipping tired horses and calling it discipline?"
},
{
  id:"6.17", m:6, read:3, ch:"Katha — Nachiketa and Death", title:"Arise, awake",
  hook:"Three words from the Yajur Veda became a rallying cry for a nation — but the full line carries a warning most people skip.",
  body:[
    "Yama tells Nachiketa: uttishthata jagrata — ‘Arise! Awake!’ — seek out the great teachers and learn. Vivekananda turned it into his charge to India: ‘Arise, awake, and stop not till the goal is reached.’ Pure ignition.",
    "But the verse doesn’t end in cheerleading. It finishes: ‘The path is sharp as a razor’s edge, hard to cross — so the wise say.’ Wake up, yes — and know the way is narrow and difficult. Not ‘you’ve got this,’ but ‘get up, and respect how hard this is.’ The realism is what makes the call trustworthy."
  ],
  verse:{ iast:"uttishthata jagrata prapya varan nibodhata", en:"Arise, awake; learn by drawing near to the wise.", ref:"Katha Upanishad 1.3.14" },
  apply:"Real motivation pairs ignition with honesty about cost. ‘Arise, awake’ gets you up; ‘razor’s edge’ keeps you from quitting at the first hard stretch, because you were warned. Be wary of advice that only does the first half.",
  reflect:"What’s one thing you need to ‘arise, awake’ to — and are you being honest about how sharp the edge is?"
},
{
  id:"6.23", m:6, read:3, ch:"Katha — Nachiketa and Death", title:"The Self is never born, never dies",
  hook:"When Death finally answers the boy’s question about death, the answer is the strangest possible: there is nothing there to die.",
  body:[
    "Having refused every bribe, Nachiketa gets his teaching. Yama’s core answer: the Self (atman) is not born and does not die. It did not come into being and will not cease; it is unborn, eternal, ancient. When the body is killed, it is not killed.",
    "He sharpens it to a koan: the one who thinks ‘I slay’ and the one who thinks ‘I am slain’ both miss it — the Self neither kills nor is killed. What you most deeply are is simply not the kind of thing death can touch. Centuries later, Krishna says almost these exact words to Arjuna on the battlefield — the Gita quoting the Katha."
  ],
  verse:{ iast:"na jayate mriyate va vipashchit", en:"The knowing Self is not born, nor does it die.", ref:"Katha Upanishad 1.2.18" },
  apply:"Less a promise of an afterlife than a relocation of identity. Fear of death grips the part of you that is body, role, and story; the teaching points under all that to something the threat can’t reach. You needn’t take it on faith — you can investigate, in calm moments, what in you is doing the watching.",
  reflect:"When you say ‘I,’ which layer do you mean — and is that layer the kind of thing that can be destroyed?"
},
{
  id:"6.24", m:6, read:3, ch:"Katha — Nachiketa and Death", title:"The thumb-sized Self, and the sound that holds it",
  hook:"Death tells the boy where to look for the deathless: not up at the heavens, but inward — to a space the size of your thumb.",
  body:[
    "Yama gives Nachiketa two pointers. First a sound: of everything the Vedas reach for, he says, the essence is the single syllable Aum — the highest support, the bridge between the spoken world and the silent ground beneath it. Hold that, and you have a handle on the whole.",
    "Then a place: the Self, ‘the size of a thumb,’ dwells in the cave of the heart of every living being. Draw it out, he says, the way you draw the soft inner stalk from a blade of grass — patiently, without force. The reality that contains the universe is also smaller than anything you could hold, seated quietly inside you: smaller than the small, greater than the great."
  ],
  verse:{ iast:"angushtha-matrah purusho madhya atmani tishthati", en:"The Self, the size of a thumb, dwells in the heart.", ref:"Katha Upanishad 2.1.12" },
  apply:"Two handles the tradition actually used: a sound to return to (Aum, or any anchor word) when attention scatters, and a direction — inward and small, not outward and grand. Meditation is mostly learning to find that thumb-sized quiet in the noise.",
  reflect:"When you go looking for ‘you,’ do you reach outward — titles, wins — or inward? Try inward for sixty seconds."
},
{
  id:"6.18", m:6, read:3, ch:"Shvetashvatara & Maitri — the turn within", title:"When God became personal",
  hook:"Most early Upanishads point to an impersonal absolute. One turns, suddenly, to a God you can love.",
  body:[
    "The Shvetashvatara Upanishad (Black Yajur Veda) marks a shift. Earlier texts describe Brahman as a vast impersonal ground. Here, that absolute is addressed as a personal God — identified with Rudra, who is becoming Shiva — ‘the one God hidden in all beings, all-pervading, the inner self of all.’ And for the first time in a major Upanishad, the path to it is not just knowledge but devotion (bhakti) and grace.",
    "Its closing verse says the deep meanings shine forth only for one who has ‘supreme devotion to God, and to the teacher as to God.’ This is the headwaters of the whole devotional river that becomes so much of later Hinduism."
  ],
  verse:{ iast:"eko devah sarvabhuteshu gudhah", en:"One God, hidden in all beings.", ref:"Shvetashvatara 6.11" },
  origin:"Composed later than the oldest Upanishads (~400–200 BCE); it also weaves in Samkhya and Yoga vocabulary and practical meditation instructions.",
  reflect:"Want the famous image this text shares — two birds on a single tree?"
},
{
  id:"6.19", m:6, read:3, ch:"Shvetashvatara & Maitri — the turn within", title:"Two birds on one tree",
  hook:"One of the most enduring images in all of Indian thought: two birds sit on the same tree. One eats. One only watches.",
  body:[
    "‘Two birds, inseparable companions, perch on the same tree. One eats the sweet fruit; the other looks on, not eating.’ The tree is your life, your body, the world. One bird is the everyday self — tasting the fruit, chasing the sweet, flinching from the bitter, caught in pleasure and pain. The other is the deeper Self — present, aware, involved in nothing, serene.",
    "The teaching: suffering eases the moment you notice the second bird. ‘Sunk in the world, the self grieves, deluded — but when it sees the other, the Lord, and his glory, its grief falls away.’ Liberation is a shift of identification: from the bird frantically eating to the one quietly watching."
  ],
  verse:{ iast:"dva suparna sayuja sakhaya", en:"Two birds, close companions, cling to the same tree.", ref:"Shvetashvatara 4.6" },
  apply:"This is the oldest description of the witness — what mindfulness trains. You are not only the one reacting; you’re also the one who can watch the reaction without being it. In a hard moment, move to the watching bird. Nothing in the situation changes, and everything does.",
  reflect:"Next time you’re rattled, can you find the second bird? Try it once today and notice what shifts."
},
{
  id:"6.20", m:6, read:3, ch:"Shvetashvatara & Maitri — the turn within", title:"Time the devourer",
  hook:"A late Yajur Veda text asks a question the others mostly don’t: what is time — and why does it eat everything?",
  body:[
    "The Maitri Upanishad is a crossroads text, weaving in Samkhya, early yoga, and a Buddhist-tinged world-weariness. It opens darkly — a king contemplating the body’s decay — and asks what self could possibly endure in such a frame.",
    "Its striking move: it treats Brahman as having two faces, Time (kala) and the Timeless (akala). ‘Time cooks all beings,’ it says — ripens and consumes them. From the Sun, time pours out in months and seasons and years, carrying everything toward its end. Behind it stands the timeless, partless ground that time itself arises from. The text also lays out an early six-limbed yoga — breath, sense-withdrawal, meditation, concentration, contemplative reasoning, absorption — a forerunner of Patanjali’s famous eight."
  ],
  verse:{ iast:"kalah pachati bhutani", en:"Time cooks (ripens and consumes) all beings.", ref:"Maitri Upanishad 6.15" },
  apply:"‘Time cooks all beings’ is the original memento mori. Not morbid — clarifying. The awareness that time is ripening you toward an end is exactly what makes a day matter. Let it sharpen the question: is this how I want to be cooked?",
  reflect:"If time is quietly cooking you, what would you stop tolerating today?"
},

/* ---------- MODULE 7 — THE KNOTS ---------- */
{
  id:"7.1", m:7, read:3, title:"Where did the Vedic people come from?",
  hook:"This is the most politically charged question in Indian history. Here’s what the evidence says — and where honest people still differ.",
  body:[
    "The question: did the speakers of early Sanskrit migrate into the subcontinent, or originate there and spread out? For over a century it rode on language and archaeology. Since around 2015–2019, ancient DNA has largely settled the empirical core: studies (notably from David Reich’s lab) find steppe-related ancestry entering South Asia roughly 2000–1500 BCE, in a pattern consistent with migration and mixing from the Pontic-Caspian steppe — not an origin inside India.",
    "Important nuance: migration, not invasion. The older image of conquering charioteers has been dropped; the genetics points to gradual movement and intermarriage over generations."
  ],
  knot:"The dissenting ‘Out of India’ view — that Indo-European languages began in India — has little support among mainstream linguists or geneticists, but it’s strongly held by some scholars and carries heavy political weight (migration can be spun as making Vedic culture ‘foreign’). Worth saying plainly: most civilizations are products of migration and mixing — that takes nothing from what was created here. The empirical debate is largely settled; the political one continues on its own track.",
  apply:"A clean case study in separating evidence from identity. When a factual question gets fused to who-we-are, people defend the identity and call it defending the facts. Notice when you’re doing it yourself.",
  reflect:"Want a deeper, fully-sourced walk through the genetic evidence?"
},
{
  id:"7.2", m:7, read:3, title:"Is the ritual even meaningful?",
  hook:"A respected scholar shocked his field by arguing that Vedic ritual — this whole magnificent system — is, strictly speaking, meaningless.",
  body:[
    "Frits Staal (who filmed the 1975 fire altar) argued that ritual is pure activity: rules of performance with no meaning, goal, or belief required behind them — like syntax with no semantics. Do it correctly and it ‘works,’ regardless of what you think. He even proposed that ritual’s structured, recursive form may have preceded language. Mantras too, he said, function as sound, not meaning.",
    "Other scholars pushed back hard. The Brahmanas are saturated with meaning — the bandhu correspondences explicitly map fire to sun to self, bricks to days, body to cosmos. That’s not empty syntax; it’s an elaborate symbolic system."
  ],
  knot:"The resolution most accept: both, at different levels. The execution can run without belief (a checklist works whether or not you feel it); the design is shot through with meaning. Staal described the operating layer; his critics, the design layer.",
  apply:"Genuinely useful for building habits and processes. Engineer them to run on structure alone, so they survive the days your motivation is gone — but design them with real meaning, so they don’t hollow out over time. Structure carries you; meaning keeps you.",
  reflect:"Which of your routines runs on pure structure, and which needs its meaning re-injected?"
},
{
  id:"7.3", m:7, read:3, title:"Four things almost everyone gets wrong",
  hook:"Most confident statements about ‘the Vedas’ contain at least one of these four errors.",
  body:[
    "‘The Vedas are a book.’ No — they’re a library: four Vedas, each in four layers, once over a thousand branches. The Yajur Veda alone had about 101.",
    "‘It’s all just ritual.’ The ritual is real, but the same Yajur Veda tradition produced the Shatapatha Brahmana’s myths and the deepest Upanishads — neti neti, the five sheaths, Nachiketa, the chariot. Dismissing it as ritual misses its mind.",
    "‘It’s all religion.’ Closer to a total worldview — ritual technology, cosmology, social theory, philosophy, and early linguistics and astronomy, interwoven. Not a faith demanding belief so much as a way of structuring reality.",
    "‘Hinduism equals the Vedas.’ Most of what’s practiced today — temples, the popular gods, festivals, devotion — comes from later (smriti) tradition, not the Vedas. The link is ancestral, not identical."
  ],
  apply:"Precision about a famous thing is a quiet superpower — you stop repeating the crowd’s errors and start seeing the actual object. Apply the same scrutiny to whatever ‘everyone knows’ in your own field.",
  reflect:"Which of these four had you half-believed? And where else might you be running on a crowd-level summary?"
},

/* ---------- MODULE 8 — LIVING IT ---------- */
{
  id:"8.1", m:8, read:3, title:"Give before you get",
  hook:"Strip the fire and the Sanskrit, and the Yajur Veda’s core mechanism is a law of contribution you can run your life on.",
  body:[
    "Yajna, remember, is the engine: pour into the fire, and it returns transformed. As a life principle it’s the opposite of hoarding. You put value into a system — a community, a craft, a market, a relationship — without standing over it demanding immediate payback. The Bhagavad Gita later made it explicit: the world is held together by acts of sacrifice; the one who only takes ‘lives in vain.’",
    "The catch most people miss: the return is real but delayed and transformed. You won’t get back what you put in, in the form you put it, on your schedule. The fire doesn’t give receipts."
  ],
  apply:"Build the habit of pouring in — writing, teaching, shipping, helping — and stop auditing your generosity in real time. Contribution compounds the way capital does, just on a longer and stranger clock. The givers who win are the ones who can wait.",
  reflect:"Where are you keeping a ledger you should burn — withholding because the return hasn’t shown up yet?"
},
{
  id:"8.2", m:8, read:3, title:"The toolkit, on one page",
  hook:"You now hold a set of tools 3,000 years in the making. Here they are in one place.",
  body:[
    "Neti neti — find what something is by ruling out what it isn’t. Clarity by subtraction.",
    "Preyas vs shreyas — sort choices into the merely pleasant and the genuinely good; drift is a pile of small preyas calls.",
    "The chariot — don’t whip the horses (willpower); wake the charioteer (judgment). Self-mastery is sharp discernment, not force.",
    "The five sheaths — when something’s off, locate the layer: body, energy, mind, intellect, or bliss. Fix the right floor.",
    "Renounce and enjoy — give everything to the work, release the outcome. Caring isn’t the same as clinging.",
    "The two birds — when rattled, move to the watching self. Nothing changes; everything changes."
  ],
  apply:"Don’t try to hold six tools at once. Pick the one that fits this week’s actual problem and run it until it’s reflex. A tool you use beats five you admire.",
  reflect:"Which one of these six does this week need most?"
},
{
  id:"8.3", m:8, read:3, title:"Ritual as technology",
  hook:"The most practical thing the Yajur Veda offers isn’t a belief. It’s a technology: the engineered daily ritual.",
  body:[
    "The never-extinguished fire, the offering tied to sunrise and sunset, the exact repeated sequence — this is behavior design, millennia early. Three principles run through it: anchor the act to a natural cue (not a clock you can negotiate with), fix the sequence so there’s no daily decision to make, and root it in identity (you are one who keeps the fire, not someone trying to).",
    "And the deepest lesson from the ‘is ritual meaningful?’ debate: a good ritual works even on the days the meaning goes quiet. The structure carries you across the flat stretches — and you re-meet the meaning on the other side."
  ],
  apply:"Choose one keystone ritual. Bind it to a cue you can’t miss, make the steps identical every time, and define yourself as the person who does it. Then guard the chain. Identity and structure will do what motivation never could.",
  reflect:"What single daily ritual, kept without exception, would change the most for you — and what cue will you anchor it to?"
},
{
  id:"8.4", m:8, read:3, title:"The map, and the road ahead",
  hook:"You’ve walked the whole shape of the Yajur Veda. Here’s what you’re holding — and how it grows from here.",
  body:[
    "You’ve traced it end to end: what a Veda is and how it survived intact; the split into Black and White and what was lost; the engine of sacrifice and its great rites, from the daily fire to the falcon altar to the wandering horse; the prose that asked why, with its flood and its self-emptying creator; the turn inward through the forest texts; and the summit — Isha, the Brihadaranyaka, the Taittiriya, the Katha, the Shvetashvatara — neti neti, the koshas, Nachiketa, the chariot, the two birds.",
    "That’s the map. It is not the territory. ‘In its entirety’ doesn’t mean done — it means you can now see the whole, and choose where to go deep."
  ],
  apply:"This is where you take over. Every question you write in your notes becomes the next card — researched properly, added to the path. The course stops being a fixed syllabus and becomes a conversation that follows your curiosity.",
  reflect:"So: what’s the first thing you want to go deeper on? Write it in your notes — that’s where tomorrow’s card comes from."
},

/* ---------- MODULE 9 — THE WORLD OF THE VEDIC GODS ---------- */
{
  id:"9.1", m:9, read:3, title:"Agni: the fire that carries everything",
  hook:"The Rigveda’s very first word is a god’s name — Agni, fire. Nothing in the Veda works without him.",
  body:[
    "Of all the gods, fire is the one you can light. Agni is the mechanism of the whole sacrificial world: you pour the offering into the flames and Agni — ‘the mouth of the gods’ — carries its essence upward to them. No fire, no delivery. He is called the priest of the gods and the messenger between worlds.",
    "His body is triple: the fire on the altar, the lightning in the sky, the sun in heaven — one power at three scales. He is reborn each morning when the fire-sticks are rubbed, yet he is the oldest of priests. Later tradition finds him inside you too, as the ‘belly-fire’ of digestion and the heat of drive and transformation."
  ],
  origin:"Rigveda 1.1 opens with him; over two hundred of its hymns are addressed to Agni, and he runs through the Yajur Veda’s every rite.",
  apply:"Agni is the principle that nothing reaches a higher level without passing through a transforming flame. Raw food, raw ideas, raw effort — none of it ‘ascends’ until something burns it into a finer form. Whatever you want to send upward, ask: where is the fire that transforms it?",
  reflect:"What in your life is sitting raw, waiting for a fire you haven’t lit?"
},
{
  id:"9.2", m:9, read:3, title:"Indra and the dragon that hoarded the waters",
  hook:"Before the world could live, a dragon had coiled around all its waters and stopped them. Breaking that blockage is the Veda’s favourite story.",
  body:[
    "Indra is the storm-king of the gods, wielder of the thunderbolt, the most-invoked deity in the Rigveda. His defining deed: the slaying of Vritra, a vast serpent whose name means ‘the encloser,’ who had wrapped himself around the cosmic waters and held the world in drought. Charged with soma, Indra strikes him with the thunderbolt, splits him open, and the waters — rivers, rain, life itself — rush free.",
    "It is the archetypal act of releasing what was blocked. (Tellingly, one verse even has Indra flee in fear afterward — the victor rattled by his own victory.) In later centuries he was demoted, recast as a vain, beatable king as Shiva and Vishnu rose. But his name lives on inside a common word: the indriyas, the senses — your own ‘Indra’s instruments.’"
  ],
  knot:"The dragon is myth, not history — most likely a personification of drought and dammed water, the dry season broken by the monsoon. The ‘cosmic battle’ is the sky doing what it does every year, told as epic.",
  apply:"Vritra is any blockage that has grown powerful by stopping flow — a stalled project, a held grudge, a bottleneck. Left alone it becomes a dragon. The myth’s instruction is blunt: name it, aim the right tool at it, and strike. Everything dammed behind it is waiting to move.",
  reflect:"What’s your Vritra right now — the one blockage holding back a whole river?"
},
{
  id:"9.3", m:9, read:3, title:"Soma: the drink of the gods nobody can identify",
  hook:"A whole book of the Rigveda praises a single plant — pressed, filtered, and drunk to touch immortality. And no one today is sure what plant it was.",
  body:[
    "Soma is plant, drink, ritual, and god at once. Pressed between stones, strained through wool, mixed with milk and offered into fire or drunk by the priests, it was said to grant inspiration, vigour, even a taste of immortality — ‘we have drunk soma, we have become immortal,’ sing the poets. It fuels Indra for battle and the seer for vision; the entire ninth book of the Rigveda is devoted to it.",
    "Then the great mystery: which plant? The original seems to have been lost when the Vedic people moved into India, away from its mountain habitat, and substitutes crept in."
  ],
  knot:"Genuinely unsolved. R. Gordon Wasson argued for the fly-agaric mushroom; most scholars now favour ephedra — a Central Asian stimulant whose name survives in the Iranian cousin-ritual’s ‘haoma,’ with ancient residues found at Central Asian temple sites. Others propose milky-sapped plants. No consensus; soma may always have been a blend.",
  apply:"Notice what the poets actually said: soma doesn’t manufacture inspiration — it reveals what is already there, by pressing and filtering away the dross. The plant’s identity almost doesn’t matter; the function does — the discipline that strains off the noise until you can finally see clearly.",
  reflect:"What is your ‘soma’ — the practice that filters the noise and lets you see? When did you last press it?"
},
{
  id:"9.4", m:9, read:3, title:"The Ashvins, and the sage with the horse’s head",
  hook:"Two divine twins wanted a forbidden secret. The sage who knew it was under a death-curse if he taught it. Their workaround is one of the strangest in the Veda.",
  body:[
    "The Ashvins are the twin horsemen of dawn — physicians of the gods, rescuers of the drowning, restorers of youth and sight. Their wildest story: the sage Dadhyanch knew the secret ‘honey’ knowledge, but Indra had warned that if he taught it to anyone, Indra would cut off his head.",
    "The Ashvins, being divine surgeons, found a loophole. They removed Dadhyanch’s head and kept it safe, fixed a horse’s head in its place, and had him teach the secret through the horse’s mouth. When Indra struck off the (horse’s) head as promised, the Ashvins restored the sage’s own. The curse was technically kept; the knowledge got out."
  ],
  origin:"Told in the Rigveda and echoed in the Brihadaranyaka; it is woven into the Pravargya rite, where a glowing pot stands for that severed, sun-bright head.",
  apply:"The Ashvins are masters of the workaround — keeping the letter of a rule while serving a higher purpose, by routing the knowledge through a proxy. When a channel is blocked by a prohibition you can’t fight head-on, find the horse’s head: a container, a medium, a side door that lets the truth pass.",
  reflect:"Where are you stuck at a rule you can’t break — and what’s the ‘horse’s head’ that would let the real thing through anyway?"
},
{
  id:"9.5", m:9, read:3, title:"Varuna: the god who keeps the accounts",
  hook:"One Vedic god sees everything you do in the dark. He is also the closest the Veda comes to a conscience.",
  body:[
    "Varuna is the guardian of rita — the cosmic and moral order, the deep truth by which the sun rises on time and a promise must be kept. His watchers move through the worlds; nothing escapes him. Break the order and he binds you with his noose. He is the most ethical of the Vedic gods — power rooted not in storm or fire but in rightness itself.",
    "The Rigveda gives him its most striking confession: the sage Vasishtha, sick with guilt, begs Varuna to name his sin and loosen it ‘like a calf’s rope.’ It reads like a psalm written two thousand years before the Psalms."
  ],
  origin:"Varuna shares a deep root with the Zoroastrian Ahura Mazda — both descend from one Indo-Iranian lord of cosmic order, before the traditions split. Later, Varuna shrank into a god of waters and oceans.",
  apply:"Varuna is conscience made cosmic — the conviction that the universe keeps a ledger even when no one is watching. Every system that actually works — a market, a court, a friendship — needs a Varuna principle: something tracking the order beneath the rules. Worth asking what plays that role in your work, and whether it’s awake.",
  reflect:"What would you do differently today if you truly believed the order keeps accounts?"
},
{
  id:"9.6", m:9, read:3, title:"Ushas: the dawn that gives, and spends, you",
  hook:"The dawn goddess is the same one who rose on the first morning of the world — ever-young, and quietly counting your days.",
  body:[
    "Ushas is the dawn — radiant, ever-young, robing herself in light, driving back the darkness and the things that hide in it. The Rigveda sings to her in some of its loveliest hymns; she is ‘the face of the gods,’ the one who prepares the way for the sun.",
    "But the poets saw her double nature clearly. The same goddess who hands you a fresh morning is also, with every rising, ageing the world and shortening your life. ‘How many dawns have already set?’ one hymn asks. She is both the gift and the meter running — and she doesn’t play favourites; she rises whether you greet her or sleep through her."
  ],
  apply:"Productivity culture remembers the gift and forgets the meter. Ushas holds both: every morning is genuinely new, and every morning spends you a little. That isn’t morbid — it’s what makes a day worth showing up for. Her only question is whether you’re awake to receive what she brings.",
  reflect:"Tomorrow’s dawn is coming regardless. Will you be awake for it, or sleep through it?"
},

/* APPEND NEW CARDS ABOVE THIS LINE (daily task inserts here) */
];
