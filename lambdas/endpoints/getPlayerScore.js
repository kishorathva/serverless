const responses = require("../common/API_responses");
const tableName = process.env.tableName;
const Dynamo = require("../common/Dynamo");
exports.handler = async (event) => {
  console.log("event", event);
  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return responses._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  try {
    const user = await Dynamo.get(ID, tableName);
    if (!user) {
      return responses._400({ message: "Failed to get user by ID" });
    }
    return responses._200({ user });
  } catch (error) {
    console.log("error in Dynamo Get", error);
    return responses._400({ message: "error in Dynamo Get", error });
  }
};
