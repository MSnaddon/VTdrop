export default function player(state = {}, action){
	switch (action.type){
		case 'RUNCODE':
			// use Object.create()??? use eval to work on the clone.
			// THIS IS NOT A FINAL SOLUTION, this is simply a owrking prototype.
			//Really need to think this solution out. Running code on an object may require considerable fannying about with testing and deciding what code ACTUALLY needs to be returned and used in the action command.

			player = JSON.parse(JSON.stringify(state))
			eval(action.consoleInput)
			return player
	}

	return state
}