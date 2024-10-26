import api from './api';

export const getAllEvents = async () => {
  try {
    const response = await api.get("/event");
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке ивентов:", error);
    throw error;
  }
};
  
export const getEventById = async (id) => {
    const response = await api.get(`/event/${id}`);
    return response.data;
};

export const createEvent = async (eventData) => {
    const response = await api.post("/event", eventData);
    return response.data;
};
  
// другие функции, если нужно