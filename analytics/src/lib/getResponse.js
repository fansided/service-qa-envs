const fs = require('fs')
const path = require('path')

const getResponse = (req) => {
    const { url = '', baseUrl = '' } = req

    const filename = (req.method + '_' + baseUrl.slice(1) + (url === '/' ? '' : url)).replace(/[/]/g, '_')
    console.log('\x1b[45m%s\x1b[0m', `Looking for /mocks/${filename}`)
    try {
        const d = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../mocks/${filename}.json`)))

        return d
    } catch (e) {
        console.error(e) // eslint-disable-line
    }
}

module.exports = { getResponse }
