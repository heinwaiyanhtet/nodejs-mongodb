import mongoose = require('mongoose');

const uri = process.env.MONGODB_URL;
mongoose.connect(uri);

const blogSchema = new mongoose.Schema({

    title: { type: String, required: true },
    content: { type: String, required: true },
    
});

export default mongoose.model('Blog',blogSchema);
