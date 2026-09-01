import { Opciones } from "../models/opciones.model.js"

export const getAllOptions = async (req,res) =>{
    try {
        const opciones = await Opciones.findAll()

        return res.status(200).json({message:'Exito al extraer los datos',opciones})
    } catch (error) {
        return res.status(500).json({message:'Ocurrio un error al extraer los datos',error})
    }
}

export const getAllOptionByPK = async (req,res) =>{
    try {
        const {id} = req.body

        const opcion = await Opciones.findByPk(id)

        return res.status(200).json({message:'Exito al extraer el datos',opcion})
    } catch (error) {
        return res.status(500).json({message:'Ocurrio un error al extraer el dato',error})
    }
}

export const createOption = async (req,res) =>{
    try {
        const {id_enunciado,opcion,isCorrect} = req.body

        await Opciones.create({id_enunciado,opcion,isCorrect})

        return res.status(201).json({message:'Enunciado creado Correctamente'})
    } catch (error) {
        return res.status(500).json({message:'Ocurrio un error al crear la opcion',error})
    }
}