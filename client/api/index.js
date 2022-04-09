import axios from "axios";

const url = "http://localhost:5000/home";

axios
  .get(url)
  .then((response) => {
    const data = response.data;
    console.log(data);
    console.log("Data has been received");
  })
  .catch(() => {
    console.log("error");
  });
