import tasksData from '../data/task.json';

export const getTasks = async () => {
    return tasksData;
}

export const postTask = async (newTask) => {
    const tasks = tasksData.tasks
    
    newTask.id = tasks.length + 1;
    // tasks.push(newTask);
    tasks.unshift(newTask);

    return { ok: true, message: "task added successfully" }
}