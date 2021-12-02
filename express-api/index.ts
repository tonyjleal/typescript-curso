import express from 'express';
// const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(201).json({
    ok: true,
    msg: 'New id: 123123'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})