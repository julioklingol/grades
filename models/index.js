import mongoose from 'mongoose';
import { gradesModel } from './gradesModels.js';

const db = {};
db.mongoose = mongoose;
db.url =
  'mongodb+srv://juliomartins:juliomartins@cluster0-xxf4u.gcp.mongodb.net/banco?retryWrites=true&w=majority'; //process.env.MONGODB;
db.grades = gradesModel(mongoose);

export { db };
