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
  document.getElementById("die1").src = `dice${die1Value}.svg`;
  document.getElementById("die2").src = `dice${die2Value}.svg`;
  document.getElementById("die3").src = `dice${die3Value}.svg`;

  // Display the result
  const resultElement = document.getElementById("result");
  const sortedValues = [die1Value, die2Value, die3Value].sort((a, b) => b - a);
  resultElement.textContent = `Result: ${sortedValues[0]}, ${sortedValues[1]}, ${sortedValues[2]}`;

  // Show the "Result:" text
  resultElement.style.display = "block";

  // Call displaySelectedText
  displaySelectedText(sortedValues[0], sortedValues[1], sortedValues[2]);
}

function displaySelectedText(die1, die2, die3) {
  // Create the combination key
  const combinationKey = [die1, die2, die3].join("");

  // Map each possible combination to a short text
  const combinations = {
    666: "When the sun goes down the stars arise. Then the bright light of the sun returns again. Likewise your mind, which seems clouded by doubt, will in a short time reach clarity. With God’s help you will obtain that which you desire. Give thanks unto Him.",
    665: "Concerning the matter you have asked about, let your mind focus on what you hope for, so that you may attain what you desire.",
    664: "God will help you in what you desire and in the matter you are asking about. Ask God and what you desire will quickly come to you.",
    663: "From the light you seek to slip into the darkness, where there is no clear path. Are you wanting to lose your life?  I advise you not to concern yourself about this matter.",
    662: "Stretch out your right hand and give to the poor and you will have peace and good hope.",
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
    622: "The thing you set your mind on is uncertain. Think of something else. You are motivated by gain.",
    621: "The way is prepared for you, be patient, pray to God, and you will come to your desire.",
    611: "Address your fears. Your enemies will fall, and you will come out of it the better.",
    555: "What you ask for is good. Act carefully and you will arrive at your good desire.",
    554: "Good will come to all who seek God. Keep the commandments of God and everything will be successful for you.",
    553: "You will defeat those who want to hurt you. You will achieve your hope. As for you, ask God to help you and you will reach your good desire.",
    552: "What you ask for is good. What you think about will be in your hands.",
    551: "Just as  a sower scatters good seed into the earth and brings forth fruit in due season, so you may attain the object of your desires easily and joyfully.",
    544: "You seek to enter a forest, where you will find no path, and where many fierce snakes are hidden. Therefore I warn you, your life will be in danger if you do not take care.",
    543: "A dog in haste gives birth to blind puppies. So take your time to consider what you are asking about. If you are patient, it will come to you again in your power with great joy.",
    542: "A nugget of lead mixed with gold is a hateful thing. So also your mind devises something wrong. Think of something else for what you ask for will not be in your power.",
    541: "You say that you have an adversary, direct your hope that God may be your helper. I advise you not to be irreligious.",
    533: "You think one thing, another will happen to you, when you least expect it. Therefore you must act cautiously, and keep things simple lest you be led into harm and loss.",
    532: "There are winds, strong storms or storms, be careful that you do not want to throw yourself into the sea: hold on a little, and you will receive serenity, and your mind will reach what you desire.",
    531: "Do not worry about what you are asking for, you will achieve it with hard work and you will receive the good fortune and future good things that have been granted to you.",
    522: "Beware of the big lion who wants to hurt you. Therefore, cry to the Lord, and he will deliver you from evil, so that you are not judged for it after your death.",
    521: "What doesn't happen in a year, happens in an instant! Do not be anxious, because your good desire will come to you and lead to great joy.",
    511: "Even if it requires great sweat and toil, you will hold in your hands what you asked for. Ask it of God and give Him thanks.",
    444: "There are three states of man in this world and three angels govern them. In the first you will find joy. In the second you will know an abundance of earthly things. In the third you will find happiness and joy on your journey.",
    443: "Go on your way for now because my lots do not give answers today. Come again another day and pay attention to your affairs.",
    442: "When the time comes, take what is given to you. The goods you have received have been granted to you but you will not receive anything that has not been granted to you.",
    433: "Great joy will come to you from what you are seeking. God will protect you. You will overcome your enemies because God will be your helper. Be at peace, you will attain your hope.",
    432: "Why are you kicking against the pricks? Do not torment yourself, because it is evil about which you are consulting. Don't go against the advice of this lot. I advise you not to set yourself against God.",
    431: "The ship is ready for you and the voyage ahead is dangerous because the seas are stormy. However fear nothing because in the end God will help you and increase his grace to you.",
    422: "Why did you come to consult us? You have neglected God, to whom you have made many promises which you have not kept. Begin by appeasing God, so that He may be more merciful to you, because He is currently angry.",
    421: "You will obtain the wish you desire, ask God that he may be your help. Be patient, do not doubt what you are asking. Be at peace: with God's help what you desire will come to you.",
    411: "What fortune has promised you is on earth. But words hinder you and you will not reach what you desire.",
    333: "You want to throw yourself down from a height and you seek to lose your life, but the circumstances do not allow. Be patient and ask God to earn mercy for your requests.",
    332: "These are the lots which clearly answer those who ask, and reveal the hidden things of men. Therefore I advise you not to delay in asking the necessary questions, but rather ask for the glory of God, that you may find what your soul seeks.",
    331: "You have honey and you want vinegar. Think of another good thing that can come to you more easily, for the things you have asked for have not been given to you. You will easily receive these gifts if you ask God.",
    322: "Fish are hiding in the place where you set your hope and you will be happy to catch them. Your mind seems to be doubtful and yet you will easily receive the gift of God, if you but ask Him.",
    321: "You are in a state of worry and doubt and you are trying to sail against the waves of the sea. Take care and persevere:in a short time you will find and reach what you desire.",
    311: "Great joy will come to you. Think no more about the object of your request. Be at peace. Ask God and you will find grace.",
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