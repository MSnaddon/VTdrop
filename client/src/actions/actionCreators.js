
//Player Actions
export function runCode(consoleInput){
	return {
		type: 'RUNCODE',
		consoleInput
	}
}

// Redux practice Actions

export function extendArray(){
	return {
		type: 'EXTENDARRAY'
	}
}

export function addSpecificToArray(number){
	return {
		type: 'ADDTOARRAY',
		number
	}
}