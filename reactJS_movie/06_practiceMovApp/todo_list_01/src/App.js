import {useState} from "react";

function App() {

    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);

    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){        //값이 없으면 작동시키게 하지 않는다.
            return ;
        }


        //항상 새로운 배열을  집어넣어야므로 복사된 배열을 넣어준다.
        setTodos((currentArray) => [toDo, ...currentArray]);


        console.log("todo value : " + toDo);
        console.log("todos value : " + toDos);

        setTodo("");

    }

  return (
    <div>
        <h1> input your scadule (todos.length : {toDos.length} )</h1>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={toDo}
                onChange={onChange}
                placeholder="write your to do ... "
            />
            <button> add To Do </button>
        </form>

    </div>
  );
}

export default App;
