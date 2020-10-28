import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', width:'100%', height:'100%',flex:1,flexDirection:"column",backgroundColor:"#a77171"}}>
        <div style={{display:'flex', flexShrink:1,alignItems:"center",justifyContent:"center"}}>
            <h1 style={{fontFamily:'Rajdhani',fontSize:"60px", fontWeight:500, color:"#2d3b46"}}>UNDER CONSTRUCTION</h1>
        </div>
        <div style={{display:'flex', flex:1,alignItems:"center",justifyContent:"center"}}>
          <img style={{objectFit:'contain',  background: 'inherit', maxWidth: '100%', maxHeight: '100%'}} src="under_dev.svg"/>
        </div>
      </div>
      </div>
  );
}

export default App;
