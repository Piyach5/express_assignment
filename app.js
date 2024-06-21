import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let users = {
  data: {
    name: "john",
    age: 20,
  },
};

const app = express();
const port = 4001;
let id = 5;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/users", (req, res) => {
  res.json({
    data: users,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
