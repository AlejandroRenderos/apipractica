const axios = require('axios');
 /* eslint-disable */ 
export function getAlgo() {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://api.chucknorris.io/jokes/random`)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        })
};
