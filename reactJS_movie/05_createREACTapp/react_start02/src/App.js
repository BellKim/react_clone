
import {useState, useEffect} from "react";

function Hello(){

    function byFc(){
        console.log("bye! :< ");
    }

    function hiFc(){
        console.log("create :> ");
        return byFc;
    }

    useEffect(hiFc, []);
    return <h1> hello!! </h1>
}

function App() {
    const [showing, setShowing] = useState(false);

    const onClick = () => setShowing((prev) => !prev )
  return (

    <div>
        {showing ? <Hello/> : "Bye"}
        <h2>cleanUp 6.4</h2>

        <button onClick={onClick}> { showing ? "hide" : "show"}</button>

    </div>
  );
}

export default App;
