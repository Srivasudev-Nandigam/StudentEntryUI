import * as React from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";

export default function StudentBox(props) {
	const firstNameRef = React.useRef(null);
	const middleNameRef = React.useRef(null);
	const lastNameRef = React.useRef(null);
	const idRef = React.useRef(null);
	const emailRef = React.useRef(null);
	const passwordRef = React.useRef(null);
	const submitHandler = async (e) => {
		e.preventDefault();

		// Get data from text feilds
		const firstName = firstNameRef?.current.value;
		const middleName = middleNameRef?.current.value;
		const lastName = lastNameRef?.current.value;
		const id = idRef?.current.value;
		const email = emailRef?.current.value;
		const password = passwordRef?.current.value;

		firstNameRef.current.value = "";
		middleNameRef.current.value = "";
		lastNameRef.current.value = "";
		idRef.current.value = "";
		emailRef.current.value = "";
		passwordRef.current.value = "";

		const details = {
			firstName,
			middleName,
			lastName,
			id,
			email,
			password,
		};

		props.callback(details);
	};

	return (
		<div style={{ backgroundColor: "rgba(40, 44, 52, 0.6)" }}>
			<React.Fragment>
				<CssBaseline />
				<Container fixed maxWidth="md" sx={{ width: 1000 }}>
					<Box
						component="form"
						display="flex"
						justifyContent="center"
						minHeight="100vh"
						sx={{
							height: "100vh",
							padding: "10px 10px 10px 10px",
						}}
						autoComplete="off"
						onSubmit={submitHandler}
						action="#"
					>
						<div style={{ paddingTop: "0px" }}>
							<CardHeader
								title={"Student Details"}
								subheader={"Enter Student Details:"}
							/>

							<TextField
								style={{ marginRight: "2px" }}
								id="first-name"
								label="First Name"
								variant="filled"
								required
								inputRef={firstNameRef}
							/>
							<TextField
								style={{ marginRight: "2px", marginLeft: "2px" }}
								id="middle-name"
								label="Middle Name"
								variant="filled"
								required
								inputRef={middleNameRef}
							/>
							<TextField
								style={{ marginRight: "2px", marginLeft: "2px" }}
								id="last-name"
								label="Last Name"
								variant="filled"
								required
								inputRef={lastNameRef}
							/>
							<TextField
								style={{ marginLeft: "2px" }}
								id="Id"
								label="Id"
								type="number"
								variant="filled"
								sx={{ width: 100 }}
								required
								inputRef={idRef}
							/>
							<Typography></Typography>
							<TextField
								style={{ marginTop: "18px" }}
								id="email"
								label="Email"
								type="email"
								variant="filled"
								sx={{ width: "50%" }}
								required
								inputRef={emailRef}
							/>
							<TextField
								style={{ marginLeft: "4px", marginTop: "18px" }}
								id="password"
								label="Password"
								type="password"
								variant="filled"
								sx={{ width: "49%" }}
								required
								inputRef={passwordRef}
							/>

							<Button
								variant="contained"
								type="submit"
								style={{
									paddingTop: "2%",
									paddingBottom: "2%",
									marginTop: "18px",
								}}
								sx={{ width: "100%" }}
							>
								Submit Data
							</Button>
						</div>
					</Box>
				</Container>
			</React.Fragment>
		</div>
	);
}
