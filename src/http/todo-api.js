import api from './api'



const resource = '/todos'


export const allTodos = () => api.get(resource)

export const createTodo = todo => api.post(resource, todo)
export const updateTodo = (id, todo) => api.put(`${resource}/${id}`, task)
export const removeTodo = id => api.delete(`${resource}/${id}`)


export const completeTodo = (id, todo) => api.put(`${resource}/${id}`, task)