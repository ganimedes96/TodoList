import { FormEvent, InvalidEvent, ChangeEvent, useState } from "react";
import { CardTask } from "./CardTask";
import { EmptyTask } from "./EmptyTask";
import { ListTracking } from "./ListTracking";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const InputTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newTask = {
      title: newTaskText,
      completed: false,
      id: Math.floor(Math.random() * 1000 + 1000),
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };
  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  };

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Esse campo e obrigatorio!");
  };

  const completeTask = (idTask: number) => {
    const taskWithoutCompleteOne = tasks.filter((task) => {
      if (idTask === task.id) {
        if(task.completed) {
          task.completed = false
        }else{
          task.completed = true;
        }

      }
      return true;
    });
    setTasks(taskWithoutCompleteOne);
  };

  const deleteTask = (idTask: number) => {
    const taskWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== idTask;
    });
    setTasks(taskWithoutDeleteOne);
  };

  return (
    <main>
      <form
        onSubmit={handleCreateNewTask}
        action=""
        className="flex items-center justify-center gap-2  mt-5"
      >
        <label htmlFor="task">
          <input
            className="w-[630px] p-3 bg-gray-400 placeholder:inter placeholder:text-gray-300 rounded-md text-gray-100  "
            type="text"
            id="task"
            name="task"
            value={newTaskText}
            onChange={handleNewTaskChange}
            placeholder="Adicionar uma nova tarefa"
            onInvalid={handleNewTaskInvalid}
            required
          />
        </label>
        <button
          disabled={newTaskText.length === 0}
          type="submit"
          className="flex items-center justify-center gap-2 text-gray-100 bg-blue-500 px-3 h-[47px] rounded-md text-sm font-semibold leading-5 disabled:opacity-[0.7]"
        >
          Criar
          <img src="../../public/images/plus.svg" alt="plus" />
        </button>
      </form>
      <ListTracking
        listTask={tasks.length}
        taskCompleted={tasks.filter((e) => e.completed).length}
      />
      <div className="flex w-[736px]  mx-auto items-center justify-center mt-4 ">
        {tasks.length > 0 ? (
          <div className="flex flex-col gap-4 mt-5">
            {tasks.map((task) => (
              <CardTask
                key={task.id}
                todo={task}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            ))}
          </div>
        ) : (
          <EmptyTask />
        )}
      </div>
    </main>
  );
};
