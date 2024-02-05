// Display initial text when the page loads
document.getElementById("selectedText").textContent =
  "Please think of the question you would like to consult the oracle about and then press the button to roll the dice";

// Hide the "Result:" text when the page loads
document.getElementById("result").style.display = "none";

function rollDice() {
  // Simulate the roll of three six-sided dice
  const die1Value = Math.floor(Math.random() * 6) + 1;
  const die2Value = Math.floor(Math.random() * 6) + 1;
  const die3Value = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  document.getElementById("die1").src = `dice${die1Value}.png`;
  document.getElementById("die2").src = `dice${die2Value}.png`;
  document.getElementById("die3").src = `dice${die3Value}.png`;

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Result: ${die1Value}, ${die2Value}, ${die3Value}`;

  // Show the "Result:" text
  resultElement.style.display = "block";

  // Call displaySelectedText
  displaySelectedText(die1Value, die2Value, die3Value);
}

function displaySelectedText(die1, die2, die3) {
  // Sort the dice values in descending order
  const sortedValues = [die1, die2, die3].sort((a, b) => b - a);

  // Create the combination key
  const combinationKey = sortedValues.join("");


  // Map each possible combination to a short text
  const combinations = {
    666: "When the sun goes down the stars arise and then the bright light of the sun returns again, so also your mind, which seems clouded by doubt, will in a short time reach clarity. With God’s help you will obtain that which you desire and you will give him praise.",
    665: "Concerning the matter you have asked about, let your mind focus on what you hope for, so that you may attain what you desire.",
    664: "God will help you in what you desire and in the matter you are asking about. Ask God and what you desire will quickly come to you.",
    663: "Stretch out your right hand and you will have peace. Be of good hope and give to the poor.",
    662: "You seek to send light into the darkness, where there is no straight path. Are you wanting to lose your life?  I advise you not to concern yourself about this matter.",
    661: "What you ask for now will come with great joy. Be safe, ask God, and do not be afraid.",
    655: "It is a sure way that you are looking for. Do not be afraid. God will help you, and you will reach what you desire.",
    654: "What seems to be great to you is already passing away and however much you will it,  what you are planning will not be in your power.",
    653: "Do not doubt what you are asking about, ask God. What you ask is good so do not be afraid.",
    652: "You sought to capture the running stag with your hands, but it is difficult, because it stays in the woods. But it returns to its lair, there it can be caught.",
    651: "The thing you are seeking and asking about : with great sweat and effort you will reach what you desire. Be assured and ask God.",
    644: "When your neighbour comes to you, he tries to entice you with flattering words. But you must act carefully, lest you regret it later.",
    643: "Make no mistake, there are those who seek to deceive you with cruel words. Be careful and take this advice, lest you regret it later.",
    642: "As a ship is steered on the sea, so what you desire will come to you. If you have already attained what you desire, ask God that he may be pleased with you. They want to deceive you with flattering words, but you must proceed with caution and simplicity, lest you regret it later.",
    641: "Your mind is wavering about this matter, because there are wrong thoughts in your heart. Do not be anxious, and the good you desire will come to you, which will strengthen your mind. Be assured.",
    633: "About the matter you have given thought to and consulted about: your soul will have greater glory from it.",
    632: "If you find yourself in the company of infidels, it does not make them men of faith. They are not trustworthy and so your mind will turn to other purposes. But if you turn to us, attach to yourself the goodwill of God, you can be at peace.",
    631: "Your request will be accepted. Do not think further about what you are consulting, it will reach you in a short time. Therefore ask God and you will get what you want.",
    622: "The way is prepared for you, be patient, pray to God, and you will come to your desire.",
    621: "The thing you have thought about is firm. Think of something else. You will get the profit you want.",
    611: "Learn to fear. Your enemies will fall and you will still be better.",
    555: "What you ask for is good. Act carefully and you will arrive at your good desire.",
    554: "Good will come to all who seek God. Keep the commandments of God and everything will be successful for you.",
    553: "You will defeat those who want to hurt you. You will achieve your hope. As for you, ask God to help you and you will reach your good desire.",
    552: "What you ask for is good. What you think about will be in your hands.",
    551: "Like sower into the earth. He sends forth good seed, and will bring forth fruit in his season, so that you may attain what you long for with joy, and find your will easily.",
    544: "You seek to send yourself into the forest, where you will find no path, and many strong snakes are hidden, and therefore I warn you! your life will be deceived, while you do not think.",
    543: "A dog in haste gives birth to blind puppies, and so your mind. Do not make a mistake about what you are asking: if you are patient, it will come to you again in your power with great joy.",
    542: "A mass of lead mixed with gold, and is envied, so also your mind devises envy: for think otherwise. What you ask for will not be in your control.",
    541: "You say that you have an adversary, direct your hope that God may be your helper. I advise you not to be irreligious.",
    533: "You think one thing, another will happen to you, while you least expect it. Therefore you must act cautiously, and watch your simplicity, lest you be led into harm and loss.",
    532: "There are winds, strong storms or storms, be careful that you do not want to throw yourself into the sea: hold on a little, and you will receive serenity, and your mind will reach what you desire.",
    531: "Do not worry about what you are asking and asking for, you will achieve it with hard work and you will receive the good fortune or future good things that have been given to you.",
    522: "Beware of the big lion who wants to hurt you. Therefore, cry to the Lord, and he will deliver you from evil, so that you do not restore the damage after death.",
    521: "What year does not give, subject day? brings Do not be anxious, because your good desire will come to you, which will lead to great joy.",
    511: "Even if the wind comes with great sweat and toil, then you will have in your hands what you asked for: ask God and give him thanks.",
    444: "There are three things done by man in this world: but three angels control them, and first you will find joy with joy. Secondly, concerning the abundance of temporal things. The third is about joy, and you will receive joy on your journey.",
    443: "You depart from us at this hour, because my lots do not give answers: you will come another day and observe your condition.",
    442: "You depart from us at this hour, because my lots do not give answers: you will come another day and observe your condition.",
    441: "And there is nothing to fear, God will help you, so that you can be secure, and in a short time you will find profit, and you will hold what you desire, and you will have clarity: do not be afraid.",
    433: "The great joy of which you ask will come to you, and God will protect you: you will overcome your enemies, because God will be your helper; be safe; you will receive your hope.",
    432: "What do you do against the urge? Do not brag about yourself, because it is evil about which you are consulting. Don't go against the lot. I advise you not to be against God.",
    431: "What did you come to consult? Thou hast neglected thy God, thou hast promised much, and hast not fulfilled it.",
    422: "You will obtain the wish you desire, ask God that he may be your help: be patient; Do not doubt what you are asking. Be at ease, with God's help, what you desire will come to you.",
    421: "The fortune that is promised to you is on earth, and the words that hinder you, you will not reach what you desire.",
    411: "You want to throw yourself down in exultation, and you seek to lose your life, but time simply does not permit: be patient, and ask God that you may merit mercy for your petitions.",
    333: "These are the lots which clearly answer those who ask, and reveal the hidden things of men. Therefore I advise you not to delay in asking the necessary questions, but rather ask for the glory of God, that you may find the requests of your soul.",
    332: "You have honey and you want vinegar. See the good that is gentler: for what you ask is not given to you.",
    331: "Where you hope the fish are hiding and you will be happy to catch them. thus your mind seems to be doubtful, and yet you will easily receive the gift of God, if you ask God.",
    322: "What you seem to be worried about, and you are trying to navigate the waves of the sea, see and endure, in a short time you will find and reach what you desire.",
    321: "Great joy will come to you. Think no more about the object of your request. Be at peace. Ask God and you will find grace.",
    311: "The entrance is already prepared for you, and you can enter with an open door to what you desire, where to encourage or hope for you, pray to God to be your helper.",
    222: "The way is already prepared for you and the door is open to you. You can access where you place your hopes. Pray God to be your helper.",
    221: "You are wanting to make your money grow. Be careful that you do not suffer a loss. This is a dangerous place. Take the advice of the wise, what is the use of exhausting yourself in this way?",
    211: "You seek to obtain what is not in your power. Be patient for a short time and you will find your condition better.",
    111: "Be constantly faithful and whatever you ask, God will grant you. You will be happy forever if you obey God's commandments.",
  };

  // Display the selected text
  const selectedTextElement = document.getElementById("selectedText");
  selectedTextElement.textContent = `The oracle says: ${
    combinations[combinationKey] || "Unknown"
  }`;
}
