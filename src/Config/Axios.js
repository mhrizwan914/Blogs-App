import Axios from "axios";

const apiHandle = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

const Get = (endPoint) => {
    return apiHandle.get(endPoint);
};

const Post = (endPoint, data) => {
    return apiHandle.post(endPoint, data);
};

export { Get, Post };