const User = require("../models/User")

const UserController = {
    create: async (req,res) =>{
        try {
            const { nome, email, idade} = req.body

            const userCriado = await User.create({nome, email, idade});

            return res.status(200).json({
                msg:'Usuario criado com sucesso',
                user
            });
        } catch (error) {
            console.log(Error);
            return res.status(500).json({ msg:'Contate o suporte'});
        }
    },
    update: async (req,res) =>{
        try {
            const { id } = req.params;
            const { nome , email, idade } = req.body;
            const userFinded = await User.findById(id);

            if(!userFinded) {
                return res.status(404).json({
                    msg:'usuario nao encontrado'
                })
            }
            await User.findByIdAndUpdate(id, {
                nome,
                email,
                idade
            });

            return res.status(200).json({
                msg:'Usuario atualizado com sucesso'
            });

        } catch (error) {
            console.log(Error);
            return res.status(500).json({
                msg:'Contate o suporte'
            });
        }
    },
    delete: async (req,res) =>{
        try {
            const { id } = req.params;
            await User.findByIdAndDelete(id);
            return res.status(200).json({
                msg:'Usuario deletado com sucesso!'
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                msg:'Contate o suporte'
            })
            
        };
    },
    getAll: async (req,res) =>{
        
    },
    getOne: async (req,res) =>{
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            return res.status(200).json({
                msg:'Usuario encontrado com sucesso',
                user
            });
        } catch (error) {
            console.log(Error);
            return res.status(500).json({
                msg:'Contate o suporte'
            })
        }
    }
}

module.exports = UserController;