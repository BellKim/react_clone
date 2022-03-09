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


        //항상 새로운 배열을  집어넣어야므로 복사된 배열을 넣어준다. (데이터를 추가해주는것)
        //기존 배열을 가지고와서 새로운 요소를 가지고와 추가해준다.
        setTodos((currentArray) => [toDo, ...currentArray]);
        //데이터를 업데이트 시켜줌.
        setTodo("");

        console.log("todos value : " + toDos);

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
        <hr/>

        <ul>
            {toDos.map((item, index) => (
                <li key={index}>{item}</li>
                )
            )}
        </ul>
        {/*
            var arr = [1,2,3,4,5];
            모든 배열에 입력되는 값이 들어가게 한다.
            arr.map(()=> ":)");
            모든 배열의 값을 대문자로 변경되도록한다.
            arr.map(()=>  toUpperCase());
        */}
    </div>
  );
}

export default App;
