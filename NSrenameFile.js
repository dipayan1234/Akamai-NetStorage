const Netstorage = require('netstorageapi'); // execute `npm install netstorageapi` for this to work

const config = {
  hostname: 'ihgcomm-nsu.akamaihd.net', //NS HTTPs domain
  keyName: 'abcd', // replace with upload account name
  key: 'xxxxxxx', // replace with the actual key associated to the upload account - DO NOT use the papi secret
  cpCode: '00000', //replace with actual NS bucket CP code
  ssl: true, // HTTPs
  source_filepath: '/killswitch/file_off.txt', //full source NS path with filename
  destination_filepath: '/killswitch/file.txt' //full destination NS path with filename
};

const ns = new Netstorage(config);


const NETSTORAGE_SOURCE = `/${config.cpCode}${config.source_filepath}`;
const NETSTORAGE_DESTINATION = `/${config.cpCode}${config.destination_filepath}`;

ns.rename(NETSTORAGE_SOURCE, NETSTORAGE_DESTINATION, (err, response, body) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  if (response.statusCode === 200) {
    console.log(`File renamed successfully: ${NETSTORAGE_SOURCE} → ${NETSTORAGE_DESTINATION}`);
  } else {
    console.error(`Rename failed. Status: ${response.statusCode}, Body: ${body}`);
  }
});