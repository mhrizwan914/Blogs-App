import Axios from "axios";
import { useEffect, useState } from "react";
import { Get } from "./Config/Axios";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Get("posts").then((response) => {
      setData(...response.data);
    }).catch((error) => {
      setData(error);
    });
  }, []);
  console.log(data);
  return (
    <>

    </>
  );
}

export default App;