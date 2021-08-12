const fs= require("fs")
const chalk= require("chalk")
const saveNotes= function(notes){
	const datajson= JSON.stringify(notes)
	fs.writeFileSync('notes.json', datajson)
}

const loadNotes = function(){
	try{
		const datab=fs.readFileSync("notes.json")
		const data=datab.toString()
		return JSON.parse(data)
	}
	catch(e){
		return []
	}
}


module.exports={
	
	addNote: function (title, body) {
	const notes=loadNotes()
	const dup=notes.filter(function(note){
		return note.title===title
	})
	if(dup.length===0){
		notes.push({
		title: title,
		body: body})
	    saveNotes(notes)
	    console.log(chalk.inverse.green("notes added"))
	}
	else{
		console.log(chalk.inverse.red("duplicate note"))
	}

},

	removeNote: function (title) {
	const notes=loadNotes()
	const notesToKeep=notes.filter(function (note) {
		return note.title!==title
	})
	saveNotes(notesToKeep)
	console.log(chalk.inverse.blue("node removed"))
}

}