/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {  ')':'('   ,
                        ']':'['   ,
                        '}':'{'   };
	const st = [];
	
	for (let i = 0; i < s.length; i++) {
		if (isClosingBracket(s[i])) {
			if (brackets[s[i]] !== st.pop()) {
				return false;
			}
            
		} else {
			st.push(s[i]);
		}
	}
	return st.length == 0;
}

function isClosingBracket(ch) {
	return [')', ']', '}'].indexOf(ch) > -1;
}