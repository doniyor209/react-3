import './App.css'

function App() {
  let randomSon = Math.floor(Math.random() * 90 + 10);
  console.log(randomSon);
  const a = prompt("Ism kiriting");
  console.log(a);
  const sana = new Date();
  const soat = sana.getHours();
  const minut = sana.getMinutes();
  const sekund = sana.getSeconds();
  return (
    <div>
      <div className="box" style={{ backgroundColor: (soat > 6 && soat < 18) ? "white" : "black" }}>
        <div className="box-bola">
          <h1 style={{ color: (soat > 6 && soat < 18) ? "white" : "black" }}>Sening isming: {a}</h1>
          <p style={{ color: (soat > 6 && soat < 18) ? "white" : "black" }}>Bugungi sana:{sana.getMonth() + 1}.{sana.getDate()}.{sana.getFullYear()}</p>
          <h2 style={{ color: (soat > 6 && soat < 18) ? "white" : "black" }}>Soat: {soat}:{minut}:{sekund}</h2>
          <h3 style={{ color: (soat > 6 && soat < 18) ? "white" : "black" }} >A random number from 0 to 100:
            <br /></h3>
          <h4 style={{ color: (soat > 6 && soat < 18) ? "white" : "black" }} >{randomSon}</h4>
        </div>
      </div>

    </div>
  )
}

export default App