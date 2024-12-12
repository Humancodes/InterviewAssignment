function App() {
  const [userInput, setUserInput] = React.useState("");

  const [items, setItems] = React.useState([]);

  function handleAddingItems() {
    if (!userInput) {
      alert("Can't add empty task");
      return;
    }

    let newTask = {
      id: Date.now(),
      taskName: userInput,
      status: false,
    };

    setItems((prev) => [...prev, newTask]);
    setUserInput("");
  }
  function handleDelete(id) {
    let data = items.filter((item) => item.id != id);
    setItems(data);
  }

  function handleStatus(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "20px",
        }}
      >
        <div>
          <input
            style={{
              margin: "10px",
              padding: "10px",
              fontSize: "16px",
              width: "300px",
            }}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            placeholder="Add your task"
          />
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleAddingItems}
          >
            Add
          </button>
        </div>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            marginTop: "20px",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          {items.map(({ id, taskName, status }) => (
            <li
              key={id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <span
                style={{
                  textDecoration: status ? "line-through" : "none",
                }}
              >
                {taskName}
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    padding: "5px 10px",
                    fontSize: "14px",
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: status ? "green" : "red",
                  }}
                  onClick={() => handleStatus(id)}
                >
                  {status ? "Completed" : "Pending"}
                </button>
                <button
                  style={{
                    padding: "5px 10px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
