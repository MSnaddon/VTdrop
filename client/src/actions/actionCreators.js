// Take care when writing actions as to not overwrite state attributes like "player" or "output".
// results in ""


//Player Actions
export function runCode(consoleInput){
	return {
		type: 'RUNCODE',
		consoleInput
	}
}

export function outputString(outputString){
	return {
		type: 'OUTPUTSTRING',
		outputString
	}
}