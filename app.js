function rollDice() {
    // Simulate the roll of three six-sided dice
    const die1Value = Math.floor(Math.random() * 6) + 1;
    const die2Value = Math.floor(Math.random() * 6) + 1;
    const die3Value = Math.floor(Math.random() * 6) + 1;

    // Update dice images
    document.getElementById('die1').src = `dice${die1Value}.png`;
    document.getElementById('die2').src = `dice${die2Value}.png`;
    document.getElementById('die3').src = `dice${die3Value}.png`;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${die1Value}, ${die2Value}, ${die3Value}`;

    // Call displaySelectedText
    displaySelectedText(die1Value, die2Value, die3Value);
}


function displaySelectedText(die1, die2, die3) {
    // Sort the dice values in descending order
    const sortedValues = [die1, die2, die3].sort((a, b) => parseInt(b, 10) - parseInt(a, 10));


    // Create the combination key
    const combinationKey = sortedValues.join('');

    // Map each possible combination to a short text
    const combinations = {
        "666": "When the sun goes down the stars arise and then the bright light of the sun returns again, so also your mind, which seems clouded by doubt, will in a short time reach clarity. With God’s help you will obtain that which you desire and you will give him praise.",
        "665": "Concerning the matter you have asked about, let your mind focus on what you hope for, so that you may attain what you desire.",
        "664": "God will help you in what you desire and in the matter you are asking about. Ask God and what you desire will quickly come to you.",
        "663": "Stretch out your right hand and you will have peace. Be of good hope and give to the poor.",
        "662": "You seek to send light into the darkness, where there is no straight path. Are you wanting to lose your life?  I advise you not to concern yourself about this matter.",
        "661": "What you ask for now will come with great joy. Be safe, ask God, and do not be afraid.",
        "655": "It is a sure way that you are looking for. Do not be afraid. God will help you, and you will reach what you desire.",
        "654": "What seems to be great to you is already passing away and however much you will it,  what you are planning will not be in your power.",
        "653": "Do not doubt what you are asking about, ask God. What you ask is good so do not be afraid.",
        "652": "You sought to capture the running stag with your hands, but it is difficult, because it stays in the woods. But it returns to its lair, there it can be caught.",
        "651": "The thing you are seeking and asking about : with great sweat and effort you will reach what you desire. Be assured and ask God.",
        "644": "When your neighbour comes to you, he tries to entice you with flattering words. But you must act carefully, lest you regret it later.",
        "643": "Make no mistake, there are those who seek to deceive you with cruel words. Be careful and take this advice, lest you regret it later.",
        "642": "As a ship is steered on the sea, so what you desire will come to you. If you have already attained what you desire, ask God that he may be pleased with you. They want to deceive you with flattering words, but you must proceed with caution and simplicity, lest you regret it later.",
        "641": "Your mind is wavering about this matter, because there are wrong thoughts in your heart. Do not be anxious, and the good you desire will come to you, which will strengthen your mind. Be assured.",
        "633": "About the matter you have given thought to and consulted about: your soul will have greater glory from it.",
        "632": "Just as one who has neither partner nor a child is not complete, so your mind quickly changed its plan, but you still will come to ask us. Please God and you may be safe.",
        "631": "Your request will be accepted. Do not think further about what you are consulting, it will reach you in a short time. Therefore ask God and you will get what you want.",
        "622": "The way is prepared for you, be patient, pray to God, and you will come to your desire.",
        "621": "The thing you have thought about is firm. Think of something else. You will get the profit you want.",
        "611": "Learn to fear. Your enemies will fall and you will still be better.",
        "555": "What you ask for is good. Act carefully and you will arrive at your good desire.",
        "554": "Good will come to all who seek God. Keep the commandments of God and everything will be successful for you.",
        "553": "You will defeat those who want to hurt you. You will achieve your hope. As for you, ask God to help you and you will reach your good desire.",
        "552": "What you ask for is good. What you think about will be in your hands.",
        "551": "Text 26",
        "544": "Text 27",
        "543": "Text 28",
        "542": "Text 29",
        "541": "Text 30",
        "533": "Text 31",
        "532": "Text 32",
        "531": "Text 33",
        "522": "Text 34",
        "521": "Text 35",
        "511": "Text 36",
        "444": "Text 37",
        "443": "Text 38",
        "442": "Text 39",
        "441": "Text 40",
        "433": "Text 41",
        "432": "Text 42",
        "431": "Text 43",
        "422": "Text 44",
        "421": "Text 45",
        "411": "Text 46",
        "333": "Text 47",
        "332": "Text 48",
        "331": "Text 49",
        "322": "Text 50",
        "321": "Text 51",
        "311": "Text 52",
        "222": "Text 53",
        "221": "Text 54",
        "211": "Text 55",
        "111": "Text 56",
    };

    // Display the selected text
    const selectedTextElement = document.getElementById('selectedText');
    selectedTextElement.textContent = `Selected Text: ${combinations[combinationKey] || 'Unknown'}`;
}
