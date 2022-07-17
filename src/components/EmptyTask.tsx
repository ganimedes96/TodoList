
export const EmptyTask = () => {
    return(
        <div className="mt-7 flex  w-[736px]  mx-auto items-center justify-center border-t-2 border-gray-400 rounded-t-lg">
            <div className="mt-16 flex flex-col items-center justify-center">
                <img src="../public/images/Clipboard.svg" alt="Clipboard" />
                <strong 
                    className="text-gray-300 text-base mt-4"
                >
                    Você ainda não tem tarefas cadastradas
                </strong>
                <p
                    className="text-gray-300 text-base font-normal	"
                >
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>  
          </div>
    )
}

