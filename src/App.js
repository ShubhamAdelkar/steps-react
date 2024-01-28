import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">Hello</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f9", color: "#fff" }}>
          Back
        </button>
        <button style={{ backgroundColor: "#7950f9", color: "#fff" }}>
          Next
        </button>
        {/* <button>Next</button> */}
      </div>
    </div>
  );
}

export default App;
