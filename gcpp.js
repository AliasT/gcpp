#!/usr/bin/env node

const { execSync } = require("child_process")

const argv = process.argv.slice(2)
const message = argv.length > 0 ? argv.join(" ") : "updates"

execSync("git add .", { stdio: "inherit" })
execSync("git commit -m '" + message + "'", { stdio: "inherit" })
execSync("git pull --rebase", { stdio: "inherit" })
execSync("git push", { stdio: "inherit" })
