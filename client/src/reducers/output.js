export default function output(state = [], action){
	switch(action.type){
		case 'OUTPUTSTRING':
			return [` >  ${action.outputString}`, ...state]

		case 'RUNCODE':
			return [` >> ${action.consoleInput}`, ...state]

		default:
			return state
	}


}