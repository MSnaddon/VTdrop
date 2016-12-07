export default function testArray(state = [], action){

	switch(action.type){

		case 'EXTENDARRAY':
			const newNumber = state.length
			return [
				...state,
		 		newNumber
		 	];
	
		case 'ADDTOARRAY':
		return [...state, action.number];

		default :
			return state;
	}


	return state
	
}