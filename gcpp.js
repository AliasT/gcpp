#!/usr/bin/env node

const { execSync } = require("child_process")
const [_, __, message = "updates"] = process.argv

execSync("git add .", { stdio: "inherit" })
execSync("git commit -m " + message, { stdio: "inherit" })
execSync("git pull --rebase", { stdio: "inherit" })
execSync("git push", { stdio: "inherit" })
