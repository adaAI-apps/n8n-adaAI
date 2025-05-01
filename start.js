module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "conda activate base && n8n start",
      path: "{{path}}/app",
      env: {
        N8N_PORT: "{{env.N8N_PORT || 5678}}",
        N8N_RUNNERS_ENABLED: "true"
      },
      on: [{
        event: "/http:\/\/localhost:([0-9]+)/",
        done: true
      }]
    }
  }, {
    method: "local.set",
    params: {
      url: "{{input.event[0] || 'http://localhost:' + (env.N8N_PORT || 5678)}}",
      pid: "{{input.pid}}"
    }
  }, {
    method: "notify",
    params: {
      html: "<b>n8n telah dimulai!</b><br><br>Klik di sini untuk membuka UI Web!",
      href: "{{input.event[0] || 'http://localhost:' + (env.N8N_PORT || 5678)}}",
      popout: true
    }
  }, {
    method: "process.wait"
  }]
}