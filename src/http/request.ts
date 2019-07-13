import axios from 'axios'

export const httpGet = (url: string, params: any) =>
  new Promise((resolve) => {
    axios.get(url, { params })
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        console.log(err)
      })
  })
