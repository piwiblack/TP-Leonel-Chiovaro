const fs = require('fs')
const db = require('../data/database')


const sucursales = {
    index:function(req,res) {
     res.write('NUESTRAS SUCURSALES ONLINE'+ '\n' + '------------------------' + '\n');
     db.forEach(concesionaria => {
         res.write('\n' +'*'+concesionaria.sucursal +'\n' +concesionaria.direccion +'\n'+ concesionaria.telefono + '\n' + '------------------');

     }); 
     res.end();  
    },
    concesionarias:function(req,res){
        res.set({'content-type':'text/plain; charset=utf-8'})
        let idSucursal =req.params.sucursal;
        db.forEach(totalConcesionarias =>{
            if(totalConcesionarias.sucursal.toLowerCase() == idSucursal.toLowerCase()){
            res.write(totalConcesionarias.sucursal + '\n'+totalConcesionarias.direccion + '\n'+ totalConcesionarias.telefono + '\n\n');
            totalConcesionarias.autos.forEach(auto=>{
                res.write('* '+ auto.marca + ' ～' + auto.modelo + '～ ' + auto.anio + '\n\n')
            })
            res.end();
            }
        })
        res.end('NO TENEMOS SUCURSALES EN ESA LOCALIDAD');
    }
}



module.exports = sucursales;