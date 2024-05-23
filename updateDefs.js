#!/usr/bin/env node
const fs = require("fs");
const https = require("https");
const path = require("path");

const src =
  "https://raw.githubusercontent.com/bitburner-official/bitburner-src/stable/src/ScriptEditor/NetscriptDefinitions.d.ts";
const out = path.join(__dirname, "types/NetscriptDefinitions.d.ts");

https
  .get(src, (res) => {
    const file = fs.createWriteStream(out);

    res.pipe(file);

    file.on("finish", () => {
      file.close;
      console.log("Netscript Type Definitions Updated");
    });
  })
  .on("error", (err) => {
    console.log("Error: ", err.message);
  });
