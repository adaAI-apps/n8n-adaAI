module.exports = {
    run: [
      {
        method: "shell.run",
        params: {
          message: "docker stop n8n || true && docker rm n8n || true"
        }
      },
      {
        method: "shell.run",
        params: {
          message: "docker volume rm n8n_data || true"
        }
      },
      {
        method: "fs.remove",
        params: {
          path: "app/.installed"
        }
      },
      {
        method: "notify",
        params: {
          html: "<b>n8n has been reset</b><br><br>Click here to reinstall n8n!",
          href: "./install.js"
        }
      }
    ]
  };