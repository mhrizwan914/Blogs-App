import Axios from "axios";
import { useEffect, useState } from "react";
import { Get, Post } from "./Config/Axios";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Get("posts").then((response) => {
      setData(response.data);
    }).catch((error) => {
      setData(error);
    });
  }, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const postHandle = (e) => {
    e.preventDefault();
    Post("posts", { title, body }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <form>
        <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
        <br /><br />
        <input type="text" name="body" id="body" onChange={e => setBody(e.target.value)} />
        <br /><br />
        <button type="submit" onClick={postHandle}>Post</button>
      </form>
    </>
  );
}

export default App;