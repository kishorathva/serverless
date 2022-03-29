exports.handler = async (event) => {
  console.log("event", event);
  if ((!event.pathPatameters || !event, pathPatameters.ID)) {
    // failed without an ID
  }

  let ID = event.pathPatameters.ID;

  if (data[ID]) {
    // return the data
  }
  //failed as ID was not in data
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  7893: { name: "Chris Smith", age: 52, job: "teacher" },
  5132: { name: "Tom Hague", age: 23, job: "plasterer" },
};
