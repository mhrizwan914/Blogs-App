import axios from "axios";

const apiHandle = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

const Get = (endPoint) => {
    return apiHandle.get(endPoint);
};

export { Get };