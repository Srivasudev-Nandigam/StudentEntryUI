import * as React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

let keys = 1;

const columns = [
	{
		id: "id",
		label: "ID",
		minWidth: 100,
		align: "right",
		format: (value) => value.toFixed(0),
	},
	{
		id: "fullName",
		label: "Full Name",
		minWidth: 200,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "email",
		label: "Email",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "password",
		label: "Password",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
];

function createData(firstName, middleName, lastName, id, email, password) {
	let fullName = `${firstName} ${middleName} ${lastName}`;
	return { id, fullName, email, password };
}

let rows = [];

export default function StudentTable(props) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(4);

	axios
		.post("http://localhost:5230/api/getStudents")
		.then((res) => {
			let studentData = res.data;
			rows = [];
			let i;
			for (i in studentData) {
				let firstName = studentData[i].firstName;
				let lastName = studentData[i].lastName;
				let middleName = studentData[i].middleName;
				let id = studentData[i].id;
				let email = studentData[i].email;
				let password = studentData[i].password;
				rows.push(
					createData(firstName, middleName, lastName, id, email, password)
				);
			}
		})
		.catch((err) => {
			console.log(err);
		});

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<div
			style={{
				position: "absolute",
				bottom: "0px",
				width: "100%",
				borderColor: "#282c34",
				borderTop: "0.5px",
			}}
		>
			<TableContainer
				sx={{
					height: "338px",
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
				}}
			>
				<Table aria-label="sticky table">
					<TableHead>
						<TableRow sx={{ backgroundColor: "rgba(18, 18, 18, 0.7)" }}>
							{columns.map((column) => (
								<TableCell
									sx={{ fontSize: "17px", fontWeight: "bold" }}
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								keys = keys + 1;
								return (
									<TableRow
										sx={{
											backgroundColor: "rgba(30, 30, 30, 0.7)",
										}}
										hover
										role="checkbox"
										tabIndex={-1}
										key={keys}
									>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell
													sx={{ fontSize: "17px" }}
													key={column.id}
													align={column.align}
												>
													{column.format && typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
				<TablePagination
					sx={{ backgroundColor: "rgba(30, 30, 30, 0.6)" }}
					rowsPerPageOptions={[5]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</div>
	);
}
