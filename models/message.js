var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema(
  {
    text: {type: String, required: true, maxLength: 100},
    user: {type: String, required: true, maxLength: 25},
    added: {type: Date, default: Date.now}
  }
);

// Virtual for preview of message
MessageSchema
.virtual('messageStart')
.get(function () {
// To avoid errors in cases where an author does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case
  var fullMessage = this.message;
  messageStart = fullMessage.substring(0,14)
  return messageStart;
});


// Virtual for author's URL
MessageSchema
.virtual('url')
.get(function () {
  return '/catalog/message/' + this._id;
});

//Export model
module.exports = mongoose.model('Message', MessageSchema);