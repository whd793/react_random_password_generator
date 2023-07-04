import "./styles.css";
import { useState } from "react";

export default function App() {
  // const checkboxData = [
  //   { name: "Include Uppercase Letters", state: false },
  //   { name: "Include Lowercase Letters", state: false },
  //   { name: "Include Numbers", state: false },
  //   { name: "Include Symbols", state: false }
  // ];

  const [password, setPassword] = useState("DFO09");
  const [length, setLength] = useState(7);

  const [checkboxData, setcheckboxData] = useState([
    { name: "Include Uppercase Letters", state: false },
    { name: "Include Lowercase Letters", state: false },
    { name: "Include Numbers", state: false },
    { name: "Include Symbols", state: false }
  ]);

  const generatePass = () => {
    let charset = "";
    let newpassword = "";

    const data = checkboxData.filter((n) => {
      return n.state === true;
    });

    data.forEach((n) => {
      if (n.state) {
        if (n.name === "Include Uppercase Letters") {
          charset += "ABCDEFGHIJK";
        } else if (n.name === "Include Lowercase Letters") {
          charset += "abcdefghijk";
        } else if (n.name === "Include Numbers") {
          charset += "123456789";
        } else if (n.name === "Include Symbols") {
          charset += "!@#$%^&";
        }
      }
    });

    // newpassword = charset[Math.floor(Math.random() * charset.length)];
    // console.log(newpassword)
    for (let i = 0; i < length; i++) {
      newpassword += charset[Math.floor(Math.random() * charset.length)];
    }

    setPassword(newpassword);
  };

  const handleChange = (i) => {
    const newarr = [...checkboxData];
    newarr[i].state = !newarr[i].state;
    setcheckboxData(newarr);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="password">{password}</div>
        <button className="copybtn">copy </button>
      </div>

      <div className="title">
        <div>
          <span> Character length: </span>
          <span> {length} </span>{" "}
        </div>
        <input
          type="range"
          min="7"
          max="24"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <div className="checkboxes">
        {checkboxData.map((d, i) => {
          return (
            <div>
              <input
                type="checkbox"
                checked={d.state}
                onChange={() => handleChange(i)}
              />
              <label> {d.name} </label>
            </div>
          );
        })}

        {/* <div>
          <input type="checkbox" />
          <label> uppercase </label>
        </div> */}
      </div>

      <button className="generatebtn" onClick={() => generatePass()}>
        Generate{" "}
      </button>
    </div>
  );
}
