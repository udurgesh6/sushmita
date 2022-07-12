function App() {
  const myName = () => {
    console.log("Durgesh");
  };
  return (
    <div>
      <p>World</p>
      <h1>Hello</h1>
      <button onClick={myName}>Click</button>
    </div>
  );
}

export default App;
