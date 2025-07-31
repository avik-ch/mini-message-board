const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getAllMessages() {
  return messages;
}

async function getMessageById(id) {
  return messages.find((message) => message.id === id);
}

async function addMessage(username, message) {
  messages.push({ id: messages.length, text: message, user: username, added: new Date() });
  return true;
}

module.exports = { getAllMessages, addMessage };
