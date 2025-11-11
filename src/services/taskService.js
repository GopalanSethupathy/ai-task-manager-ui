import apiClient from './apiClient';

export const taskService = {
  getTasks: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.status) params.append('status', filters.status);
    if (filters.priority) params.append('priority', filters.priority);
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);
    
    const response = await apiClient.get(`/tasks?${params.toString()}`);
    return response.data;
  },

  getTaskStats: async () => {
    const response = await apiClient.get('/tasks/stats');
    return response.data;
  },

  createTask: async (taskData) => {
    const response = await apiClient.post('/tasks', taskData);
    return response.data;
  },

  updateTask: async (taskId, taskData) => {
    const response = await apiClient.put(`/tasks/${taskId}`, taskData);
    return response.data;
  },

  deleteTask: async (taskId) => {
    const response = await apiClient.delete(`/tasks/${taskId}`);
    return response.data;
  }
};

