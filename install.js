module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "conda install n8n -c conda-forge",
      path: "{{path}}/app",
      env: {
        N8N_PORT: "{{env.N8N_PORT || 5678}}"
      }
    }
  }, {
    method: "fs.write",
    params: {
      path: "app/installed.txt",
      text: "n8n installed successfully on {{new Date().toISOString()}}"
    }
  }, {
    method: "notify",
    params: {
      html: "<b>Instalasi selesai!</b><br><br>Klik 'Mulai' untuk menjalankan n8n!"
    }
  }]
}