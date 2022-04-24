const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const txbHelloservice1EventUserGoodbyesendHandler = require('../handlers/txb.helloservice.1.event.user.goodbyesend');
module.exports = router;

router.use('txb.helloservice.1.event.user.goodbyesend', async (message, next) => {
  try {
    await validateMessage(message.payload,'txb.helloservice.1.event.user.goodbyesend','moodbyeGessage','publish');
    await txbHelloservice1EventUserGoodbyesendHandler.answerToGoodbye({message});
    next();
  } catch (e) {
    next(e);
  }
});
