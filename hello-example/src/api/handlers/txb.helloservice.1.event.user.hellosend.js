const handler = (module.exports = {});

/**
 *
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.nombre
 * @param {string} options.message.payload.sentAt - The date and time a message was sent.
 */
handler.answerToHello = async ({ message }) => {
  // Implement your business logic here...
  console.log("Message processed...", message.payload);
};
