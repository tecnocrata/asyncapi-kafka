const Router = require("hermesjs/lib/router");
const { validateMessage } = require("../../lib/message-validator");
const router = new Router();
const helloHandler = require("../handlers/hello");
module.exports = router;

router.use("hello", async (message, next) => {
  try {
    console.log("Message-->", message);
    await validateMessage(message.payload, "hello", "", "publish");
    await helloHandler.answerToHello({ message });
    next();
  } catch (e) {
    console.log("Error-->", e);
    next(e);
  }
});
