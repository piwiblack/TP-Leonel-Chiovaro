const fs = require('fs')
const db = require('../data/database')

module.exports = losAutos = {
    index:function(req,res){
        let lista =[];
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write('Estos son los autos de nuestras concesionarias:' + ' \n\n' )
        db.forEach(consecionarias=>{
            consecionarias.autos.forEach(auto =>{
                res.write('\n' + '*' +auto.marca + ' ～' +auto.modelo + '～ ' + auto.color +'\n')
                lista.push(auto.autos)
             })   
        })
        res.write('\n')
        res.write('TOTAL DE AUTOS:'+ lista.length)
   res.end();
    }
}


