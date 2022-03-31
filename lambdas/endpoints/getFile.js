const responses = require("../common/API_responses");
const S3 = require("../common/S3");

const bucket = process.env.bucketName;
exports.handler = async (event) => {
  console.log("event", event);
  if (!event.pathParameters || !event.pathParameters.fileName) {
    // failed without an ID
    return responses._400({ message: "missing the fileName from the path" });
  }

  const fileName = event.pathParameters.fileName;
  try {
    const file = await S3.get(fileName, bucket);
    if (!file) {
      return responses._400({ message: "Failed to get data by fileName" });
    }
    return responses._200({ file });
  } catch (error) {
    console.log("error in S3 get", error);
    return responses._400({ message: "error in S3 get", error });
  }
};
