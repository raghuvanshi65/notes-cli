const yargs = require('yargs');
const fs = require('fs');
const { argv } = require('process');
const notes = require('./notes');
const addNote = notes.addNote;
const removeNote = notes.removeNote;
const updateNotes = notes.updateNotes;

yargs.command({
    command : "add" , 
    describe : "run this command to add a note" , 
    builder : 
    {
        title : 
        {
            describe : "stores the title of the node" , 
            demandOption : true ,
            type : 'string' 
        } ,
        body :
        {
            describe : "stores the body of the node" , 
            demandOption : true ,
            type : 'string' 
        }
    } ,
    handler : (argv)=>
    {
        addNote(argv.title , argv.body);
    }
})

yargs.command({
    command : "remove" , 
    describe : "run this command to add a note" , 
    builder : 
    {
        title : 
        {
            describe : "stores the title of the node" , 
            demandOption : true ,
            type : 'string' 
        }
    } ,
    handler : (argv)=>
    {
        removeNote(argv.title);
    }
})


yargs.command({
    command : "list" ,
    describe : "list all notes" , 
    builder : {} ,
    handler : () => console.log(notes.loadNotes()) ,
})

yargs.command({
    command : "update" , 
    describe : "run this command to update a node" , 
    builder : 
    {
        title : 
        {
            describe : "title is must to select a note" ,
            demandOption : true ,
            type : 'string'
        } ,
        body :
        {
            describe : "only the body can be modified !" ,
            demandOption : true ,
            type : 'string'
        }
    } , 
    handler : (argv) => updateNotes(argv.title , argv.body) ,
})

yargs.parse();
