import { post, get } from "./http"

const getallpsicologos = async () => {
    const psicologos = await get("psicologo");
    return psicologos.psicologo;
}

const getPsicologo = async (userId) => {
    const psicologo = await get(`psicologo/${userId}`);
    return psicologo;
}

export {getallpsicologos, getPsicologo}
