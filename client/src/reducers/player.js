export default function player(state = {}, action){
	switch (action.type){
		case 'RUNCODE':
			// use Object.create()??? use eval to work on the clone.
			// THIS IS NOT A FINAL SOLUTION, this is simply a owrking prototype.
			//Really need to think this solution out. Running code on an object may require considerable fannying about with testing and deciding what code ACTUALLY needs to be returned and used in the action command.
			let player = new Object(state)
			let expression = new String(action.consoleInput)
			eval(expression)
			return player
			//eval(The code!!!)
	}

	return state
}