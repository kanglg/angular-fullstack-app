/**
 * Created by kanglg on 16/5/18.
 */
'use strict';
import mongoose from 'mongoose';

var MenuSchema = new mongoose.Schema({
  name: String,
  upId: {
    type: String,
    default: '0'
  },
  route: String,
  icon: String,
  orderNo: Number
});

export default mongoose.model('Menu', MenuSchema);
