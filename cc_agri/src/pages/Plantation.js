import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Button from 'react-bootstrap/Button';
import { Pagination } from 'antd';
import { FcAnswers } from "react-icons/fc";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import { CSVLink } from 'react-csv';
import '../styles.css';


const Plantation = () => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const API = `http://localhost:5000/plantationDetails`;
    const [value, setValue] = useState('');
    const [tablefilter, setTableFilter] = useState([]);

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const fetchUsers = async (url) => {
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
            console.log(fetchdata);
            console.log(response);
        } catch (err) {
            setErr(err.message);
        }
    };

    useEffect(() => {
        fetchUsers(API);
    }, [])

    const filterData = (e) => {
        if (e.target != "") {
            setValue(e.target.value);
            const filterTable = data.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setData([...data])
        }

    }

    const exportPDF = async () => {
        const doc = new jsPDF({ orientation: 'landscape' });
        doc.autoTable({
            html: '#myTable'
        })
        doc.save('Farmerdata.pdf');
    }

    return (
        <>
            <Sidebar />
            <div style={{ marginTop: '2rem', marginLeft: '20rem' }}>
                <div>
                    <div className='mb-3'>
                        <input type='text' name='' id="myInput" placeholder='Search Farmer...' value={value} onChange={filterData} style={{ position: 'absolute', right: '5%' }} />
                        {/* export data into PDF */}

                        <Button onClick={exportPDF}  >
                            PDF
                        </Button>
                        {/* Export data into excel */}
                        <CSVLink data={data} filename='FarmerList' className='btn btn-success ' style={{ marginLeft: '1rem' }}>EXCEL</CSVLink>
                    </div>
                    <div >
                        <table id='myTable' className="table table-bordered table-striped" style={{ width: '95%' }}>
                            <thead style={{ backgroundColor: 'wheat' }}>
                                <tr>
                                    <th scope="col">FARMER ID</th>
                                    <th scope="col">PLOT NO</th>
                                    <th scope="col">PLANT AREA</th>
                                    <th scope="col">BALANCE AREA</th>
                                    <th scope="col">CV CODE</th>
                                    <th scope="col">PLANT TYPE CD</th>
                                    <th scope="col">AGREEMENT TYPE</th>
                                    <th scope="col">PLOT STATUS</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {value.length > 0 ? tablefilter.map((user) => {   //For Table Search data with filter
                                    return (
                                        <tr >
                                            <td id="td">{user.FARMER_ID}</td>
                                            <td>{user.PLOT_NO}</td>
                                            <td>{user.PLANT_AREA}</td>
                                            <td>{user.BALANCE_AREA}</td>
                                            <td>{user.CV_CODE}</td>
                                            <td>{user.PLANT_TYPE_CD}</td>
                                            <td>{user.AGREEMENT_TYPE}</td>
                                            <td>{user.PLOT_STATUS}</td>
                                        </tr>
                                    )
                                })
                                    :
                                    data.map((user) => {
                                        return (
                                            <tr >
                                                <td id="td">{user.FARMER_ID}</td>
                                                <td>{user.PLOT_NO}</td>
                                                <td>{user.PLANT_AREA}</td>
                                                <td>{user.BALANCE_AREA}</td>
                                                <td>{user.CV_CODE}</td>
                                                <td>{user.PLANT_TYPE_CD}</td>
                                                <td>{user.AGREEMENT_TYPE}</td>
                                                <td>{user.CV_CODE}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            {/* <tfoot>
              <Pagination defaultCurrent={1} total={500} />;
            </tfoot> */}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plantation;