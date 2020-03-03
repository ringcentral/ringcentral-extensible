import axios from 'axios'

;(async () => {
    const r = await axios({
        method: 'get',
        url: 'https://google.com'
    })
    console.log(r)
})()