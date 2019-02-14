const { get } = require("lodash");
const { getGraph } = require("../api/graph");

exports.getProfile = async function(authObject) {
  return await getGraph(authObject, "");
};

exports.getProfilePermissionName = async function(authObject) {
  const response = await getGraph(authObject, "onpremisessamaccountname");
  return get(response, "value");
};
