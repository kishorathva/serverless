const responses = require("../common/API_responses");

exports.handler = async (event) => {
  console.log("event", event);
  if ((!event.pathParameters || !event.pathParameters.ID)) {
    // failed without an ID
    return responses._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    // return the data
    return responses._200(data[ID]);
  }
  //failed as ID was not in data

  return responses._400({ message: "no ID in data" });
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  7893: { name: "Chris Smith", age: 52, job: "teacher" },
  5132: { name: "Tom Hague", age: 23, job: "plasterer" },
};
