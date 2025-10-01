import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function upProfile2() {
    const [members, setMembers] = useState([]);
    const [update, setUpdate] = useState(false)
    let [msg, setMsg] = useState("")
    let [empToBeUpdated, setEmpToBeUpdated] = useState({ id: 0, name: "", designation: "" })
    useEffect(() => {
        axios.get("http://localhost:3001/employees")
            .then((response) => { setEmployees(response.data) })
            .catch((error) => { console.log(error) })
    }, [])
    const findEmployee = (id) => {
        let emp = employees.find(
            function (el) {
                return el.id == id
            }
        )
        console.log(emp)
        setEmpToBeUpdated(emp)
    }


}