let baseURL = ''
console.log(process.env)
switch (process.env.NODE_ENV) {
  // 打包环境一般是production
  case 'production':
    baseURL = 'production'
    break
  case 'development':
    baseURL = 'development'
    break
}
export default baseURL
