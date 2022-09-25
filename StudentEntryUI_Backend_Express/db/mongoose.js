const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/react-student-ui1", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})