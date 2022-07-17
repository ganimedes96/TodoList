interface ListTaskProps {
  listTask: number;
  taskCompleted:number;
}

export const ListTracking = ({ listTask, taskCompleted }: ListTaskProps) => {
  return (
    <div className="flex items-center justify-between max-w-[720px] w-full mx-auto mt-16">
      <div className="flex items-center justify-center gap-2">
        <strong className="text-blue-300 font-inter text-sm ">
          Tarefas criadas
        </strong>
        <span className="flex items-center justify-center text-gray-200 bg-gray-400 rounded-full w-7 h-5 px-3">
          {listTask}
        </span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <strong className="text-purple-500 font-inter text-sm ">
          Concluídas
        </strong>
        <span className="flex items-center justify-center text-gray-200 bg-gray-400 rounded-full  h-5  px-3">
          { listTask > 0 ? `${taskCompleted} de ${listTask}` : 0}
        </span>
      </div>
    </div>
  );
};
