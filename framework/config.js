const jsonfile = require("jsonfile");

const filepath = `${process.cwd()}/jsad-config.json`;
let readData = null;
exports.getConfig = function() {
  if (readData !== null) return readData;
  try {
    readData = jsonfile.readFileSync(filepath);
    return readData.jsAD;
  } catch (error) {
    return `Configuration file error: ${JSON.stringify(error)}`;
  }
};
