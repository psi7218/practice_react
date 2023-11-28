import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("i run only once");
  }, []);
  
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("search for ", keyword)
    }
  }, [keyword])

  return (
    <div>
      <input
        value = {keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
