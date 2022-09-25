import { useState, useEffect } from "react";
import axios from "axios";
import StudentTable from "./components/Table"
import StudentBox from "./components/StudentBox";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useForceUpdate from 'use-force-update';

function App() {
  const forceUpdate = useForceUpdate()
  const [data, setData] = useState()
  const [renderTable, setRenderTable] = useState(true)
  // const [checker, setChecker] = useState(1);

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
		// Use POST to get data from backend server
		await axios
			.post("http://localhost:5230/api/getStudents")
			.then((res) => {
				setData(res.data)
			})
			.catch((err) => {
				console.log(err);
		});
	}

  async function sendData(details) {
    await axios
			.post("http://localhost:5230/api/setStudents", details)
			.then((res) => {
        if (res.status === 201) {
          setData((prev) => {
            setRenderTable(!renderTable)
            return [...prev, details]
          })
        }
			})
			.catch((err) => {
				console.log(err);
		});
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() =>{
    forceUpdate()
    
  }, [ renderTable ])

  return (
    <div >
      <ThemeProvider theme={darkTheme}>
        <StudentBox callback={sendData} />
        <CssBaseline />
        <StudentTable getData={getData} data={data} />
      </ThemeProvider>
    </div>
  );
}

export default App;
