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
        "642": "Text 14",
        "641": "Text 15",
        "633": "Text 16",
        "632": "Text 17",
        "631": "Text 18",
        "622": "Text 19",
        "621": "Text 20",
        "611": "Text 21",
        "555": "Text 22",
        "554": "Text 23",
        "553": "Text 24",
        "552": "Text 25",
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
