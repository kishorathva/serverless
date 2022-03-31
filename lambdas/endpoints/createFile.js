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
  const data = JSON.parse(event.body);
  try {
    const newData = await S3.write(data, fileName, bucket);
    if (!newData) {
      return responses._400({ message: "Failed to write data by fileName" });
    }
    return responses._200({ newData });
  } catch (error) {
    console.log("error in S3 write", error);
    return responses._400({ message: "error in S3 write", error });
  }
};
