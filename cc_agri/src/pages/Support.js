import React, { useEffect,useState } from "react";
import UserData from "../Data/UserData";
import Sidebar from "../components/Sidebar";
const API="http://localhost:5000/plantationDetails";

const Support = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState('');
    const fetchUsers=async(url)=>{
		try {
			const response = await fetch(url, {
			  method: 'POST',
			  body: JSON.stringify({ "p_farmer_id": "348385" }),
			  headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json', // Specify the content type
			  },
			});
			
			const fetchdata = await response.json();
			setData(fetchdata.FList);
			console.log(data);
		  } catch (err) {
			setErr(err.message);
		  }
	};

	useEffect(()=>{
      fetchUsers(API);
	},[])

	return (
	<>
	<Sidebar/>
		<div className="support">
			<h5>React Table</h5>
			<table>
				<thead>
					<th>ID</th>
					<th>Name</th>
					<th>Place</th>
					<th>Place</th>
					<th>Place</th>
				</thead>
				<tbody>
					{ data.map((users)=>{
          return(
            <tr >
            <td>{users.FARMER_ID}</td>
            <td>{users.FARMER_NAME}</td>
            <td>{users.PLACE}</td>
            <td>{users.MOBILE_NO}</td>
            <td>{users.AADHAAR_CARD_NO}</td>
          </tr>
          )
        })
          }
				</tbody>
			</table>
		</div>
		</>
	);
};

export default Support;
