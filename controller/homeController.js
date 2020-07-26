const fs = require('fs')

const db = require('../data/database')

const home ={
    home: (req,res) => {
        res.write (`----------------------------\nBIENVENIDOS A NUESTRAS CONCESIONARIAS ONLINE\n----------------------------\n\n`)
        let sucursalesTitulos =[];
        db.forEach((sucursales)=> {
            sucursalesTitulos.push(sucursales.sucursal)
        });
        res.write(`Nuestras son sucursales\n-----------------------------\n*${sucursalesTitulos.join('\n*')}`)
        res.end() 
    }
}

module.exports = home;