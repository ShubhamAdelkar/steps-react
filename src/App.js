import "./index.css";
function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">Hello</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f9", color: "#fff" }}>
          Back
        </button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
