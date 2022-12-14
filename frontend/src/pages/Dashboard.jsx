import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getIncubation, reset } from "../features/incubation/incubationSlice";
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { forms, isLoading, isError, message } = useSelector(
    (state) => state.inc
  );
  let form = forms[0];
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user && user.role === "admin") {
      navigate("/login");
    }

    dispatch(getIncubation());
  }, [user, navigate, dispatch]);
  return (
    <>
      <section className="heading">
        <h1>welcome {user && user.name}</h1>
      </section>

      <section className="content">
        {forms.length > 0 ? (
          <p>Here is your Booking details</p>
        ) : (
          <p>user home</p>
        )}
        <br />

        <div className="text-center">
          {forms.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1250 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Company</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Icubation Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>DELETE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {forms.map((row) => (
                    <TableRow
                      key={row.name}
                      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.companyName}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.typeOfIncubation}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.createdAt}</TableCell>
                      <TableCell>
                        <button className="btn">Delete</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Link to={"/bookSlot"}>
              <div className="text-center">
                <button className="btn ms-5">Book a Slot</button>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
