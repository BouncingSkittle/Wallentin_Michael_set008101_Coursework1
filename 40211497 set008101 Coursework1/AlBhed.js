 function encode()
{
	var plain_text = document.getElementById("message").value;
	var cipher_text = [];
	var alphabet = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m',
			'N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z']

	var albhed = ['Y','y','P','p','L','l','T','t','A','a','V','v','K','k','R','r','E','e','Z','z','G','g','M','m','S','s',
			'H','h','U','u','B','b','X','x','N','n','C','c','D','d','I','i','J','j','F','f','Q','q','O','o','W','w']


	for (var idx=0; idx<plain_text.length; idx ++)
	{
		input = alphabet.indexOf(plain_text[idx]);
		
		if(input == -1)
		{
			cipher_text.push(plain_text[idx]);
		}

		else
		{ 
			var letter = albhed[input];
			cipher_text.push(letter);
		}
	}
	
	document.getElementById("output").innerHTML = cipher_text.join("");
}


function decode()
{
	var plain_text = document.getElementById("message2").value;
	var cipher_text = [];
	var albhed = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m',
			'N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z']

	var alphabet = ['Y','y','P','p','L','l','T','t','A','a','V','v','K','k','R','r','E','e','Z','z','G','g','M','m','S','s',
			'H','h','U','u','B','b','X','x','N','n','C','c','D','d','I','i','J','j','F','f','Q','q','O','o','W','w']


	for (var idx=0; idx<plain_text.length; idx ++)
	{
		input = alphabet.indexOf(plain_text[idx]);
		
		if(input == -1)
		{
			cipher_text.push(plain_text[idx]);
		}

		else
		{ 
			var letter = albhed[input];
			cipher_text.push(letter);
		}
	}
	
	document.getElementById("output2").innerHTML = cipher_text.join("");
}
