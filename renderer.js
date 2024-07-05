//const information = document.getElementById('info')
// information.innerText = `Cette application utilise Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), et Electron (v${versions.electron()})`
const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // Affichera 'pong'
  }
  
