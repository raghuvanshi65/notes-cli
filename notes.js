const fs = require('fs');
const chalk = require('chalk');

const addNote = (title , body) =>
{
    const storedData = loadNotes();
    const repeatedNote = storedData.filter((e)=>
    {
        return e.title === title ;
    })
    if(repeatedNote.length==0)
    {
        storedData.push({
            title : title ,
            body : body 
        })
        saveData(storedData);
        console.log(chalk.bgBlue(title+" note is saved !!"));
    }
    else
    {
        console.log(chalk.bgRed(title+" is already present"));
    }
} 

const removeNote = (title) =>
{
    const storedData = loadNotes();
    const resultData = storedData.filter((e)=>
    {
        return e.title !== title ;
    });

    if(resultData.length == storedData.length)
    console.log(chalk.bgRed("title is not present"));
    else
    {
        saveData(resultData);
        console.log(chalk.bgBlue(title+" note is removed !"));
    }
}

const updateNotes = (title , body) =>
{
    const storedData = loadNotes();
    const resultData = storedData.filter((e)=>
    {
        return e.title !== title ;
    });

    if(resultData.length == storedData.length)
    console.log(chalk.bgRed("title is not present"));
    else
    {
        storedData.forEach((e)=>
        {
            if(e.title===title)
            e.body = body ;
        });
        saveData(storedData);
        console.log(chalk.bgBlue(title+" is updated"));
    }
}

const saveData = (data) =>
{
    fs.writeFileSync('data.json' , JSON.stringify(data));
}

const loadNotes = () =>
{
    try {
        return JSON.parse(fs.readFileSync('data.json').toString());
    } catch (error) {
        return [];
    }
}

module.exports = 
{
    addNote , removeNote , loadNotes , updateNotes 
}