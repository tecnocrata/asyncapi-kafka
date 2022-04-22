const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const goodbyeHandler = require('../handlers/goodbye');
module.exports = router;

router.use('goodbye', async (message, next) => {
  try {
    await validateMessage(message.payload,'goodbye','','publish');
    await goodbyeHandler.answerToGoodbye({message});
    next();
  } catch (e) {
    next(e);
  }
});
