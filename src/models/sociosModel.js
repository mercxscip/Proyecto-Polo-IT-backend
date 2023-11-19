const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")

const sociosSchema = new Schema({
    id: { type: Number, unique: true },
    url: String,
    logoUrl: String,
    name: String,
    pills: [String],
    description: String,
    socialMedia: {
        linkedin: String,
        youtube: String,
        instagram: String,
        twitter: String,
        facebook: String,
    },
    contact: String,
});

sociosSchema.plugin(mongoosePaginate)

const Socio = model("partner", sociosSchema);

module.exports = { Socio };
