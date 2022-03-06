import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react";


function App() {

    const[counter, setValue] = useState(0);
    const[keyword, setKeyword] =useState("");

    const onClick = () => setValue((prev) => prev +1);
    console.log('i run all the time ');

    const iRunonlyOnce = () => {
        console.log("i run only one ");
    }
    const onChange = (event) => setKeyword(event.target.value);

    //useEffect메소드를 사용해서 한번만 렌더링 되도록 할수 있다.
    useEffect(iRunonlyOnce, []);
    useEffect(() =>{
        if(keyword !== "" && keyword.length > 6){
            console.log("i run when 'keyworkd' changes : ", keyword);
        }
    }, [keyword]);

    useEffect(() =>{
        console.log("i run when 'counter' changes : ", counter);
    }, [counter]);

    useEffect(() =>{
        console.log("i run when 'counter, keyword' changes : ", keyword, counter);
    }, [keyword, counter]);

    // [] 안에 useState 의 현재값이 변경되었을때만 코드를 실행하도록 react.js에게 알려준다.


  return (
    <div>
        <input
            type="text"
            value={keyword}
            placeholder="search here"
            onChange={onChange}
        />

        <h1 className={styles.title}> {counter}</h1>
        <button onClick={onClick} > click me now </button>

    </div>
  );
}

export default App;
