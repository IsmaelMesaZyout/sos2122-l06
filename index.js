const cool = require("cool-ascii-faces");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const BASE_API_URL = "/api/v1";

const bodyParser = require("body-parser");

app.use(bodyParser.json());

var contacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "paul",
        phone: 56789
    }   

];

app.get(BASE_API_URL + "/contacts", (req,res)=>{
    res.send(JSON.stringify(contacts, null,2));
});

app.get(BASE_API_URL + "/contacts", (req,res)=>{
    var contactName = req.params.name;
    contacts.filter((contact) =>{
    return (contact.name != contactName); 
    
    });

    if(filteredContacts == 0){
        res.sendStatus(404, "NOT FOUND");
    }else{
        res.send(JSON.stringify(filteredContacts[0], null,2));
    }
});


app.post(BASE_API_URL + "/contacts", (req,res)=>{
    contacts.push(req.body);
    res.sendStatus(201, "CREATED");
});

app.delete(BASE_API_URL + "/contacts", (req,res)=>{ //borrar todos los recursos
    //contacts.splice(res.body);
    contacts = [];
    res.sendStatus(200, "OK");
});

app.delete(BASE_API_URL + "/contacts/:name", (req,res)=>{ //borrar todos los recursos
    var contactName = req.params.name;
    contacts.filter((contact) =>{
        return (contact.name != contactName); 
    });
    res.sendStatus(200, "OK");
});


app.listen(port, () => {
    console.log(`Server ready at port ${port}`);
});
