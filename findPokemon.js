


var myPokemon = process.argv[2];
var myPokedex = require("./data.json");
var flag = true;
//var selected = myPokedex[types]
for(let i=0;i<myPokedex.length;i++)
{
    var id = myPokedex[i]["id"];
    var name = myPokedex[i]["name"];
    var types = myPokedex[i]["types"];

    if(name.toUpperCase()==myPokemon.toUpperCase())
    {
        console.log("Found - id: " + id + ",name : " + name + ", types :" + types);
        flag=false;
        return;
    }
}
 
if(flag) console.log("NOT FOUND - " + myPokemon + " is not found");