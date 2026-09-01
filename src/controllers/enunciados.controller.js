import { Enunciados } from "../models/enunciados.model.js"
import { Opciones } from "../models/opciones.model.js"

export const getAllEnunciados = async (req,res) =>{
    try {
        const enunciados = await Enunciados.findAll({
            include:{
                model:Opciones,
                as: 'opciones'
            }
        })

        return res.status(200).json({message:'Exito al extraer los datos',enunciados})
    } catch (error) {
        return res.status(500).json({message:'Ocurrio un error al extraer los datos',error})
    }
}

export const getAllEnunciadByPK = async (req,res) =>{
    try {
        const {id} = req.body

        const enunciado = await Enunciados.findByPk(id)

        return res.status(200).json({message:'Exito al extraer el datos',enunciado})
    } catch (error) {
        return res.status(500).json({message:'Ocurrio un error al extraer el dato',error})
    }
}

export const createEnunciado = async (req,res) =>{
    try {
        const {id_tema,enunciado} = req.body

        await Enunciados.create({id_tema,enunciado})

        return res.status(201).json({message:'Enunciado creado Correctamente'})
    } catch (error) {
        return res.status(500).json({message:'Ocurrio un error al crear el enunciado',error})
    }
}