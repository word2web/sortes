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
        "666": "Text 1",
        "665": "Text 2",
        "664": "Text 3",
        "663": "Text 4",
        "662": "Text 5",
        "661": "Text 6",
        "655": "Text 7",
        "654": "Text 8",
        "653": "Text 9",
        "652": "Text 10",
        "651": "Text 11",
        "644": "Text 12",
        "643": "Text 13",
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
