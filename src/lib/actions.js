import { revalidatePath } from "next/cache";
import { postTask } from "./task";

export const createATask = async (formData) => {
    "use server"

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