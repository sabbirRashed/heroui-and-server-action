import { getTasks } from '@/lib/task';
import TasksCard from '../../components/TasksCard';


const TasksPage = async () => {
    const data = await getTasks();
    const tasks = data.tasks;

    return (
        <div className='w-10/12 mx-auto'>
            <h2>Task: {tasks.length}</h2>
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