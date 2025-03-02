// src/context/AppointmentsContext.js
import React, { createContext, useState } from 'react';

export const AppointmentsContext = createContext();

export function AppointmentsProvider({ children }) {
  const [appointments, setAppointments] = useState([]);

  // Agregar cita nueva
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  // Eliminar cita por ID
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  // (Opcional) Actualizar cita
  const updateAppointment = (updated) => {
    setAppointments(
      appointments.map((item) =>
        item.id === updated.id ? updated : item
      )
    );
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        addAppointment,
        deleteAppointment,
        updateAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}
