const Netstorage = require('netstorageapi')

// Defaults: SSL: false
// By default no proxy is set
const config = {
  hostname: 'ihgcomm-nsu.akamaihd.net',
  keyName: 'ddeyKey',
  key: 'DX75zgLXVTJklnqRLt13qLatX7vlI4w4CcP80ajptU9',
  cpCode: '76065',
  ssl: false,
  
}


const ns = new Netstorage(config)
const local_source = 'hello.txt'

// or `/${config.cpCode}/` will asume the destination filename is the same as the source
const netstorage_destination = `/${config.cpCode}/hello.txt`

ns.upload(local_source, netstorage_destination, (error, response, body) => {
  if (error) { // errors other than http response codes
    console.log(`Got error: ${error.message}`)
  }
  if (response.statusCode == 200) {
    console.log(body)
  }
}); 