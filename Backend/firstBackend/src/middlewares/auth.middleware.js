export const sampleMiddleWare1 = async (req, res, next) => {
  console.log("i am sample middleware 1 ");
  next();
};
export const sampleMiddleWare2 = async (req, res, next) => {
  console.log("i am sample middleware 2 ");
  next();
};
