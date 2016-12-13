
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