import api from "../services/api";

export async function getTodos(){
    return (await api.get("/todo")).data
}

/**
 * Função para adicionar nova tarefa
 * @param {{title:string, date: Date}} todo 
 */
export async function addTodo(todo){
    return (await api.post("/todo", todo)).data
}
/**
 * Função para adicionar nova tarefa
 * @param {{title:string, date: Date}} todo 
 */
export async function updateTodo(todo, id){
    return (await api.put( `/todo/${id}`, todo)).data
}


/**
 * Função para adicionar nova tarefa
 * @param {{title:string, date: Date}} todo 
 */
export async function deleteTodo(todo, id){
    return (await api.delete( `/todo/${id}`, todo)).data
}