
const yargs=require("yargs")
const n=require("./utilities.js")

yargs.command({
	command: "add",
	handler: function(argv){
		n.addNote(argv.title, argv.body)
	},
	builder: {
		title:{
			demandOption: true,
			type: "string"
		},
		body:{
			demandOption: true,
			type: "string"
		}
	}
})

yargs.command({
	command: "remove",
	handler: function (argv){
		n.removeNote(argv.title)
	},
	builder:{
		title:{
			demandOption: true,
			type: "string"
		}
	}
})

console.log(yargs.argv)