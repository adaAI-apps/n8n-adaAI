module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "n8n start",
      path: "{{path}}/app",
      env: {
        N8N_PORT: "{{env.N8N_PORT || 5678}}"
      }
    }
  }, {
    method: "local.set",
    params: {
      url: "http://localhost:{{env.N8N_PORT || 5678}}"
    }
  }, {
    method: "process.wait"
  }]
}