import { post, get } from "./http";

const getCitasPendientesByPaciente = async (pacienteId) => {
  const data = await get(`cita/${pacienteId}`);
  const dataFiltered = data.data.cita.filter(function (el) {
    return el.estado === "PENDIENTEPAGO";
  });
  console.log("dataFiltered", dataFiltered);
  return dataFiltered;
};

const getCitasPendientesByPsicologo = async (psicologoId) => {
  const data = await get(`cita/psicologo/${psicologoId}`);
  const dataFiltered = data.data.cita.filter(function (el) {
    return el.estado === "PENDIENTEPAGO";
  });
  console.log("dataFiltered", dataFiltered);
  return dataFiltered;
};

const getCitasConfirmadasByPaciente = async (pacienteId) => {
  const data = await get(`cita/${pacienteId}`);
  const dataFiltered = data.data.cita.filter(function (el) {
    return el.estado === "CONFIRMADA";
  });
  console.log("dataFiltered", dataFiltered);
  return dataFiltered;
};

const getCitasConfirmadasByPsicologo = async (psicologoId) => {
  const data = await get(`cita/psicologo/${psicologoId}`);
  const dataFiltered = data.data.cita.filter(function (el) {
    return el.estado === "CONFIRMADA";
  });
  console.log("dataFiltered", dataFiltered);
  return dataFiltered;
};

const getCitasCompletadasByPaciente = async (pacienteId) => {
  const data = await get(`cita/${pacienteId}`);
  const dataFiltered = data.data.cita.filter(function (el) {
    return el.estado === "COMPLETADA";
  });
  console.log("dataFiltered", dataFiltered);
  return dataFiltered;
};

const getCitasCompletadasByPsicologo = async (psicologoId) => {
  const data = await get(`cita/psicologo/${psicologoId}`);
  const dataFiltered = data.data.cita.filter(function (el) {
    return el.estado === "COMPLETADA";
  });
  console.log("dataFiltered", dataFiltered);
  return dataFiltered;
};

const createCita = async (cita) => {
  const data = await post(`cita/create`, cita);
  return data;
};

const confirmarCita = async (citaId) => {
  await post(`cita/confirmarCita/${citaId}`);
};

const aplazarCita = async (citaId) => {
  const data = await post(`cita/aplazarCita/${citaId}`);
  return data;
};

const cancelarCita = async (citaId) => {
  const data = await post(`cita/cancelarCita/${citaId}`);
  return data;
};

const completarCita = async (citaId) => {
  const data = await post(`cita/completarCita/${citaId}`);
  return data;
};

const updateCita = async (citaId, descripcion, duracion) => {
  const update = {
    descripcion: descripcion,
    duracion: duracion
};
  const data = await post(`cita/${citaId}`, update);
  return data;
};

export {
  getCitasPendientesByPaciente,
  getCitasPendientesByPsicologo,
  getCitasConfirmadasByPaciente,
  getCitasConfirmadasByPsicologo,
  getCitasCompletadasByPaciente,
  getCitasCompletadasByPsicologo,
  confirmarCita,
  aplazarCita,
  cancelarCita,
  completarCita,
  updateCita,
  createCita,
};
