export default function player(state = {}, action){

	// use Object.create()??? use eval to work on the clone.
	// THIS IS NOT A FINAL SOLUTION, this is simply a owrking prototype.
	//Really need to think this solution out. Running code on an object may require considerable fannying about with testing and deciding what code ACTUALLY needs to be returned and used in the action command.
	let player = JSON.parse(JSON.stringify(state));
	
	switch (action.type){
		case 'RUNCODE':
			eval(action.consoleInput)
			return player
		default:
			return state
	}

	
}

