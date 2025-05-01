module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "npm install -g n8n",
      path: "{{path}}/app",
      env: {
        N8N_PORT: "{{env.N8N_PORT || 5678}}"
      }
    }
  }, {
    method: "notify",
    params: {
      html: "<b>Instalasi selesai!</b><br><br>Klik di sini untuk memulai n8n!",
      href: "./start.js"
    }
  }]
}