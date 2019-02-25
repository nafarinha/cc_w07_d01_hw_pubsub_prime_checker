const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.displayEvent(event);
  },
  subscribe: function (channel, callback) {
    console.log(`subscribe to channel: ${channel}`);
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
