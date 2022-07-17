interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface cardProps {
  todo: Task;
  onDeleteTask: (task: number) => void;
  onCompleteTask: (task: number) => void;
}

export const CardTask = ({ todo, onDeleteTask, onCompleteTask }: cardProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(todo.id);
  };

  const handleCompleteTask = () => {
    onCompleteTask(todo.id);
  };

  return (
    <div className="flex items-center justify-between gap-5 w-[736px] bg-gray-500 border-gray-400 rounded-md p-5 ">
      <div className="flex items-center justify-center gap-5">
        <input
          checked={todo.completed}
          type="checkbox"
          name="check"
          onChange={handleCompleteTask}
          className="form-checkbox rounded-full border-blue-300 border-2 bg-gray-500  text-purple-500 "
        />
        <p
          className={
            !todo.completed
              ? "text-sm text-gray-100"
              : "checked: line-through text-sm text-gray-300"
          }
        >
          {todo.title}
        </p>
      </div>
      <button type="button" onClick={handleDeleteTask}>
        <img src="../../public/images/Layer.svg" alt="Layer" className="w-4" />
      </button>
    </div>
  );
};
