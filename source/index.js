import "./styles.css";
import "./styles.scss";
// import moment from "moment";
const getTodos = () =>
  import(/* webpackChunkName: "postsAPI" */ "./fetcher.js");

const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  getTodos().then(({ fetchTodos }) => {
    fetchTodos().then((resp) => console.log(resp));
  });
});

console.log("Hello webpack i am in source.");
