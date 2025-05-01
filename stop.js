module.exports = {
  run: [{
    method: "process.kill",
    params: {
      pid: "{{local.pid}}"
    }
  }, {
    method: "notify",
    params: {
      html: "<b>n8n dihentikan!</b>"
    }
  }]
}