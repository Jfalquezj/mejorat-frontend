import { post, get } from "./http"

const getPaciente = async (userId) => {
    const paciente = await get(`paciente/${userId}`);
    return paciente;
}

export {getPaciente}