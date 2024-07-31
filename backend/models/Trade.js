const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  asset: { type: String, required: true },
  entryPrice: { type: Number, required: true },
  exitPrice: { type: Number, required: true },
  positionSize: { type: Number, required: true },
  profitLoss: { type: Number, required: true },
  notes: { type: String },
});

const Trade = mongoose.model('Trade', TradeSchema);

module.exports = Trade;
