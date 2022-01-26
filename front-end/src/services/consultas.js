import { api } from './config'

export default {
    listarPorPaciente:(clientId) => {
        return api.get(`consultas/client/${clientId}`)
    },

    listarPorMedico:(medicoId) => {
        return api.get(`consultas/medic/${medicoId}`)
    }
}