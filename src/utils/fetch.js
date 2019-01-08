import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  return config
})
axios.interceptors.response.use(function (res) {
  return res
}, function (error) {
  return Promise.reject(error)
})
const fetch = (opts, data) => {
  let httpDefaultOpts = {
    method: opts.method,
    url: opts.url,
    timeout: 10000,
    params: data,
    data: data,
    headers: opts.method === 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }

  if (opts.method === 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        console.log('success' + res)
        if (res.data.success) {
          resolve(res.data.data)
        } else {
          console.log('err')
          this.$message.error(res.data.data.message);
        }
      }
    ).catch(
      (err) => {
        console.log('err' + err)
        this.$message.error("系统错误")
      }
    )
  })
  return promise
}
export default fetch
