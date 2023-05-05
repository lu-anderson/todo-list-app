import { Task as TaskType } from '../../types';
import Task from '../task/Task';

type Props = {
  tasks: TaskType[],
  toggleStatusTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
};

function ListTasks({ tasks, toggleStatusTask, deleteTask }: Props) {
  return (
    <>
      <h1>All Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <Task
            key={ task.id }
            task={ task }
            toggleStatusTask={ toggleStatusTask }
            deleteTask={ deleteTask }
          />
        ))}
      </ul>
    </>
  );
}

export default ListTasks;