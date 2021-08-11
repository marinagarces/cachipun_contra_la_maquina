function play() {
  const posibilities = [ 'piedra', 'papel', 'tijeras' ];
  const p1   = document.getElementById("player1").value;
  const p2   = posibilities[ Math.floor(Math.random() * posibilities.length) ];

  if( !p1 ) return;
  if (p1 === p2) {
      alert('empate');
  } else if(p1 === "papel" && p2 === "piedra") {
      alert("ganaste")
  } else if (p1 === "tijeras" && p2 === "papel") {
      alert("ganaste")
  } else if (p1 === "piedra" && p2 === "tijeras") {
      alert("ganaste")
  } else {
      alert("perdiste")
  }

}
