const express = require('express')
const { getResponse } = require('../../lib/getResponse')

const router = new express.Router()

router.get('*', async (req, res) => {
    try {
        const result = getResponse(req)
        res.status(200).send(result)
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error',
        })
    }
})

module.exports = router
