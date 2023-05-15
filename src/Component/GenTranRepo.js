import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";

export default function Transreport({ search, setSearch }) {
  const [Shedulles, setShedulles] = useState([]);

  const [value, setValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    function getShedulles() {
      axios
        .get("http://localhost:8070/Shedulles/")
        .then((res) => {
          setShedulles(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getShedulles();
  }, []);

  return (
    <div className="newstaff">
      <div className="marginaling">
        <button onClick={handlePrint}>Download PDF</button>
      </div>
      <div className="scroll-bgn" />
      <div className="scroll-divn" />
      <div className="scroll-objectn" />
      <div className="wrapper-flex " />

      <div ref={componentRef}>
        <h2 className="aling topic-report">Annual Report</h2>

        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Shedule id</th>
              <th scope="col">Shedule Contact</th>
              <th scope="col">Shedule Address</th>
              <th scope="col">Shedule City</th>
              <th scope="col">Shedule Date</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0
              ? tableFilter.map((Shedulles, id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{Shedulles.Sctact}</td>
                    <td>{Shedulles.Sadres}</td>
                    <td>{Shedulles.Scity}</td>
                    <td>{Shedulles.Sdate}</td>
                  </tr>
                ))
              : Shedulles.map((Shedulles, id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{Shedulles.Sctact}</td>
                    <td>{Shedulles.Sadres}</td>
                    <td>{Shedulles.Scity}</td>
                    <td>{Shedulles.Sdate}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
