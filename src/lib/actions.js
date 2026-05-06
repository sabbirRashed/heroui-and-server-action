"use server"
import { revalidatePath } from "next/cache";
import { postTask } from "./task";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {

    // const title = formData.get("title");
    // const description = formData.get("description");
    // const priority = formData.get("priority");
    // const status = formData.get("status");
    // const assignTo = formData.get("assignTo");

    // const newTask = {title, description, priority, status, assignTo};

    const newTask = Object.fromEntries(formData.entries());

    console.log("adding a task with name", newTask);
    const res = await postTask(newTask);

    if (res.ok) {
        revalidatePath('/tasks')
    }
    return res;
}

export const newTaskAction = async(formData) => {
    const newTask = Object.fromEntries(formData.entries());

    console.log(newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/task');
        redirect('/tasks')
    }
}