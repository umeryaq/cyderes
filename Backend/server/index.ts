const express = require("express")
const dns = require("dns")
const ip = require("ip")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const ERROR_MESSAGE = "Invalid IP Address"

app.get("/lookup/:query", async (req, res) => {
  const query = req.params.query
  console.info({ query })

  try {
    if (ip.isV4Format(query) || ip.isV6Format(query)) {
      const reverseLookup = await dns.promises.reverse(query)
      const response = {
        ip: query,
        domain: reverseLookup[0]
      }
      res.send(response)
    } else {
      const lookup = await dns.promises.lookup(query)
      res.send({
        domain: query,
        ip: lookup.address
      })
    }
  } catch (error) {
    console.info({ error })
    res.status(500).send(ERROR_MESSAGE)
  }
})

app.listen(3001, () => {
  console.log("Server started on port 3001")
})
