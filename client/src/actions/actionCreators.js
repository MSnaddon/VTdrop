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