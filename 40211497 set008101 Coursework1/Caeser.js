function encodeCaeser()
{
	var plain_text = document.getElementById("message").value;
    var shiftNumber = document.getElementById("shiftValue").value;
	var cypher_text = [];
	var alphabet = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m',
			        'N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z']
	
	for (var idx = 0; idx < plain_text.length; idx++)
	{
		input = alphabet.indexOf(plain_text[idx]);

		if (input == -1)
		{
			cypher_text.push(plain_text[idx]);
		}

		else
		{
			var coded = (input + (shiftNumber * 2)) % 52;
			var letter = alphabet [coded];
			cypher_text.push(letter);
		}
	}
	
	document.getElementById("output").innerHTML = cypher_text.join("");
}