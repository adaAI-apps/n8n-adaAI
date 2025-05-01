module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "docker stop n8n || true && docker rm n8n || true"
      }
    },
    {
      method: "notify",
      params: {
        html: "<b>n8n has been stopped</b>"
      }
    }
  ]
};