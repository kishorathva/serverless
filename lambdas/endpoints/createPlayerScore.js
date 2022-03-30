const responses = require("../common/API_responses");
const tableName = process.env.tableName;
const Dynamo = require("../common/Dynamo");
exports.handler = async (event) => {
  console.log("event", event);
  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return responses._400({ message: "missing the ID from the path" });
  }

  const ID = event.pathParameters.ID;
  const user = JSON.parse(event.body);
  user.ID = ID;
  try {
    const newUser = await Dynamo.write(user, tableName);
    if (!newUser) {
      return responses._400({ message: "Failed to write user by ID" });
    }
    return responses._200({ newUser });
  } catch (error) {
    console.log("error in Dynamo create", error);
    return responses._400({ message: "error in Dynamo create", error });
  }
};
