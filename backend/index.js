import express from "express";

const app = express();
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Hello World! Server is ready to run");
});

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "Yet another joke",
      content: "This is a third joke",
    },
    {
      id: 4,
      title: "Yet another joke",
      content: "This is a fourth joke",
    },
    {
      id: 5,
      title: "Yet another joke",
      content: "This is a fifth joke",
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
