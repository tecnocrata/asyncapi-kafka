const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const txbHelloservice1EventUserHellosendHandler = require('../handlers/txb.helloservice.1.event.user.hellosend');
module.exports = router;

router.use('txb.helloservice.1.event.user.hellosend', async (message, next) => {
  try {
    await validateMessage(message.payload,'txb.helloservice.1.event.user.hellosend','melloHessage','publish');
    await txbHelloservice1EventUserHellosendHandler.answerToHello({message});
    next();
  } catch (e) {
    next(e);
  }
});
