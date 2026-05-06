import { getTasks } from '@/lib/task';
import TasksCard from '../../components/TasksCard';
import { AddTask } from '@/components/AddTask';
import { createATask } from '@/lib/actions';
import Link from 'next/link';
import { Button } from '@heroui/react';


const TasksPage = async () => {
    const data = await getTasks();
    const tasks = data.tasks;

    return (
        <div className='w-10/12 mx-auto space-y-4'>
            <h2 >Task: {tasks.length}</h2>
            <AddTask createATask={createATask}></AddTask>
            <Link href="/tasks/new">
                <Button variant='secondary'>Add a New Task</Button>
            </Link>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    tasks.map(task => <TasksCard
                        key={task.id}
                        task={task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;