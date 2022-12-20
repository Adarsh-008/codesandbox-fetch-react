import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((resp) => resp.json())
      .then((value) => {
        setData(Object.values(value));
      });
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("data:", data);
  return (
    <div className="App">
      <h1>Fetch api get implementation.</h1>
      <table>
        <th>UserID</th>
        <th>ID</th>
        <th>Title</th>
        <th>Completed</th>

        {data.map((item) => (
          <tr>
            <td>{item}</td>
            <td>{item}</td>
            <td>{item}</td>
            <td>{item}</td>
            {/* <td>{item[1]}</td>
            <td>{item[2]}</td>
            <tr>{item[3]}</tr> */}
          </tr>
        ))}
      </table>
    </div>
  );
}
