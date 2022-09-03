const path = require("path")

const express = require("express")
const cors = require("cors")
const compression = require("compression")
const serveStatic = require("serve-static")

const PUBLIC_PATH = path.resolve(process.cwd(), "./dist")
const PORT = parseInt(process.env.PORT || "3000", 10)
const HTML = path.join(PUBLIC_PATH, "index.html")

const app = express()

app.use(cors())
app.use(compression())
app.use(express.json({ limit: "50mb" }))
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(
  serveStatic(path.join(PUBLIC_PATH), {
    maxAge: "365d",
    setHeaders: setCustomCacheControl,
  }),
)
app.get("*", (_req, res) => {
  res.sendFile(HTML)
})

app.listen(PORT, () => {
  console.info("Server listening on port: " + PORT)
})

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === "text/html") {
    // Custom Cache-Control for HTML files
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate")
  }
}
