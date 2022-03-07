
import {useState, useEffect} from "react";

function Hello(){

/*    function byFc(){
        console.log("bye! :< ");
    }
    function hiFc(){
        console.log("create :> ");
        return byFc;
    }
    useEffect(hiFc, [])
    return <h1> hello!! </h1>;*/



        // //위와 아래 모두 같은 가능을 한다.
        // //표현법1
        // useEffect(() =>{
        //     console.log("hi :> ");
        //     <h1>hello123</h1>
        //     return () => {
        //         console.log("bye@ :< ");
        //     };
        // }, [])
        // return <h1> hhhello </h1>;

        // //표현법2
        useEffect(function(){
            console.log("hi :> ");
            return function(){
                console.log("bye!! :<");
            }
        }, [])
        return <h2> hello 2</h2>;



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
