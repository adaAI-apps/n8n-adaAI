const path = require("path")
module.exports = {
  version: "2.0",
  title: "n8n Workflow Automation",
  description: "Fair-code workflow automation platform with 400+ integrations and native AI capabilities",
  icon: "icon.png",
  pre: [{
    icon: "nodejs.png",
    title: "Node.js",
    description: "Node.js 18 or higher is required.",
    href: "https://nodejs.org/en/download/"
  }],
  menu: async (kernel, info) => {
    let installed = info.exists("app/node_modules/n8n")
    let running = info.running("start.js")
    if (!installed) {
      return [{
        icon: "fa-solid fa-plug",
        text: "Instal",
        href: "install.js",
        default: true
      }]
    } else if (installed && !running) {
      return [{
        icon: "fa-solid fa-power-off",
        text: "Mulai",
        href: "start.js",
        default: true
      }, {
        icon: "fa-solid fa-rotate",
        text: "Perbarui",
        href: "update.js"
      }, {
        icon: "fa-solid fa-stop",
        text: "Hentikan",
        href: "stop.js"
      }]
    } else if (installed && running) {
      let memory = info.local("start.js")
      let url = memory?.url || `http://localhost:${process.env.N8N_PORT || 5678}`
      return [{
        icon: "fa-solid fa-rocket",
        text: "UI Web",
        href: url,
        default: true
      }, {
        icon: "fa-solid fa-terminal",
        text: "Terminal",
        href: "start.js"
      }, {
        icon: "fa-solid fa-rotate",
        text: "Perbarui",
        href: "update.js"
      }, {
        icon: "fa-solid fa-stop",
        text: "Hentikan",
        href: "stop.js"
      }]
    }
  }
}