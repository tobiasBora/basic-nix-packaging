const func = async () => {
  const response = await window.versions.joke()
  document.getElementById("joke").innerText = response; // prints out 'pong'
}

func()
