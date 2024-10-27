// eventService.js
import api from './api';

const getAllEvents = async () => {
  try {
    const response = await api.get("/event");
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке ивентов:", error);
    throw error;
  }
};

const getEventById = async (id) => {
  const response = await api.get(`/event/${id}`);
  return response.data;
};

const createEvent = async (eventData) => {
  const response = await api.post("/event", eventData);
  return response.data;
};

export default {
  getAllEvents,
  getEventById,
  createEvent,
};
