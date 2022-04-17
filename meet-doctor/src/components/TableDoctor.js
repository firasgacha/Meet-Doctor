import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { db } from '../config/firebase-config';
import { updateDoc, doc,deleteDoc } from 'firebase/firestore';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function CustomizedTables(props) {
    const [meetLink, setmeetLink] = React.useState('');
    const [success, setSucess] = React.useState('');

    const updateAppointment = async (id) => {
        const appDoc = doc(db, "Appointment", id);
        await updateDoc(appDoc,{
            meetLink : meetLink
        }).then(() => {
            alert('Meet Link Sended successfully');
        }).catch(err => {
            console.log(err.message);
        });
    }

    const cancelAppointment = async(id) => {
        const appDoc = doc(db,"Appointment",id);
        await deleteDoc(appDoc).then(() => {
          alert('Appointment Canceled successfully');
        }).catch(err => {
           console.log(err); 
        });
      }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Meet Information</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
                        <StyledTableCell align="right">Patient</StyledTableCell>
                        <StyledTableCell align="right">Departement</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.appointments.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row" className='d-flex align-items-center'>
                                <TextField
                                    onChange={(e) => setmeetLink(e.target.value)}
                                    id="outlined-disabled"
                                    label="Meeting Link"
                                    defaultValue={row.meetLink}
                                />
                                <Button onClick={()=>{updateAppointment(row.id)}} variant="contained" className="ms-2">
                                    Send
                                </Button>
                                <Button variant="contained" color="error" className="ms-2" target="_blank" href="https://meet.google.com/getalink?hs=202&authuser=0&illm=1650156919128&hl=fr">
                                    Get Google Meet Link
                                </Button>
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                            <StyledTableCell align="right">{row.time}</StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.departement}</StyledTableCell>
                            <StyledTableCell align="right" className="btn btn-default" onClick={() => { cancelAppointment(row.id) }}>Cancel</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
