const express = require("express");
const path = require("path");
const Acme = require("./models/acme");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./db/mongoose");

const app = express();

// // Middleware function
// const logger = (req, res, next) => {
// 	console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
// 	next();
// };

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// POST data into database
app.post("/api/setStudents", (req, res) => {
	if (req.get("origin") !== "http://localhost:3000") {
		return res
			.status(401)
			.send(
				`Post request from ${req.get(
					"origin"
				)} has been rejected because ${req.get(
					"origin"
				)} has not been granted permission`
			);
	} else {
		const acme = new Acme(req.body);
        console.log(req.body)
		acme
			.save()
			.then((acme) => {
				console.log("sent");
				return res.status(201).send(acme);
			})
			.catch((err) => {
				console.log("err");
				return res.status(400).send("Err");
			});
	}
});

// Return POST data from database
app.post("/api/getStudents", (req, res) => {
	if (req.get("origin") !== "http://localhost:3000") {
		return res
			.status(401)
			.send(
				`Post request from ${req.get(
					"origin"
				)} has been rejected because ${req.get(
					"origin"
				)} has not been granted permission`
			);
	} else {
        console.log("err")
        Acme.find({}, (err, students) => {
            if(err) {
                res.send("Error Error")
            } else {
                console.log(students)
                res.send(students)
            }
        })
	}
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5230;

app.listen(PORT, () =>
	console.log(`Backend server started on: localhost:${PORT}`)
);
