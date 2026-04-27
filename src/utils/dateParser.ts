/**
 * Formatea dos fechas en el formato: "Lunes 4 de Mayo - 16 a 19 hs"
 * @param {Date | string | number} from - Fecha y hora de inicio
 * @param {Date | string | number} to - Fecha y hora de fin
 * @returns {string} String formateado
 */
export const formatEventDate = (from, to) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  // Arrays manuales para asegurar la mayúscula inicial sin depender del navegador
  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const nombreDia = dias[fromDate.getDay()];
  const numeroDia = fromDate.getDate();
  const nombreMes = meses[fromDate.getMonth()];

  // Función interna para formatear la hora (oculta los minutos si son "00")
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return minutes === 0 ? hours : `${hours}:${minutes.toString().padStart(2, '0')}`;
  };

  const horaInicio = formatTime(fromDate);
  const horaFin = formatTime(toDate);

  return `${nombreDia} ${numeroDia} de ${nombreMes} - ${horaInicio} a ${horaFin} hs`;
};