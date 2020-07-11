const gradesModel = (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    type: { type: String, required: true },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) throw new Error('Valor negativo');
      },
    },
    lastModified: { type: Date, dafault: Date.now },
  });

  return mongoose.model('grades', gradesSchema, 'grades');
};

export { gradesModel };
