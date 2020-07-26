const fs = require('fs')
const db = require('../data/database')



const marcas ={

    listadoMarcas: (req, res) =>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write('Bienvenido a nuestras concesionarias online' + '\n\n')
        res.write('Estas son nuestras marcas asociadas:' +' \n')
        let autosLista = [];
        db.forEach((sucursal)=>{sucursal.autos.forEach((auto)=>{
            autosLista.push(auto.marca)
        })})
        let marcasUnicas = [...new Set(autosLista.sort())];
        marcasUnicas.forEach((marcas) =>{
            res.write('\n' + '-'+ marcas.toUpperCase() +'\n')
        })
        res.write('\n')
        res.write('TOTAL DE MARCAS:' + marcasUnicas.length)
        res.end()
    },
    autosPorMarca: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'});
        let id = req.params.marca;
        let listaMarcas = [];
        db.forEach(sucursal=>{
            sucursal.autos.forEach(auto =>{
                if(auto.marca == id.toLowerCase()){
                    listaMarcas.push(`${auto.marca} ${auto.modelo}`)
                }
            })
        })
        listaMarcas = listaMarcas.join(`\n`)
        if(listaMarcas.length != 0){
            res.write(`${listaMarcas}`);
        }else{
            res.write(`No encontramos la marca solicitada`)
        }
        res.end()

    }
}

module.exports = marcas;