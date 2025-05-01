const path = require("path");
module.exports = {
  version: "2.0",
  title: "n8n Workflow Automation",
  description: "One-click installation for n8n, a fair-code workflow automation platform with 400+ integrations and AI capabilities",
  icon: "icon.png",
  pre: [
    {
      icon: "docker.png",
      title: "Docker",
      description: "Docker is required to run n8n. Download and install Docker Desktop.",
      href: "https://www.docker.com/get-started"
    }
  ],
  menu: async (kernel, info) => {
    let installed = info.exists("app/.installed");
    let running = info.running("start.json");
    if (installed && running) {
      let memory = info.local("start.json");
      return [
        {
          icon: "fa-solid fa-rocket",
          text: "Web UI",
          href: memory?.url || "http://localhost:{{env.N8N_PORT}}"
        },
        {
          icon: "fa-solid fa-terminal",
          text: "Terminal",
          href: "start.json"
        },
        {
          icon: "fa-solid fa-stop",
          text: "Stop",
          href: "stop.json"
        },
        {
          icon: "fa-solid fa-rotate",
          text: "Update",
          href: "update.json"
        },
        {
          icon: "fa-solid fa-plug",
          text: "Reinstall",
          href: "install.json"
        }
      ];
    } else if (installed) {
      return [
        {
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.json",
          default: true
        },
        {
          icon: "fa-solid fa-stop",
          text: "Stop",
          href: "stop.json"
        },
        {
          icon: "fa-solid fa-rotate",
          text: "Update",
          href: "update.json"
        },
        {
          icon: "fa-solid fa-plug",
          text: "Reinstall",
          href: "install.json"
        }
      ];
    } else {
      return [
        {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.json",
          default: true
        }
      ];
    }
  }
};