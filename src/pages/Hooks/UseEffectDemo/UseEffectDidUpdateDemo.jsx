import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

const arrProvince = [
    { id: "HCM", name: "Tp. Hồ Chí Minh" },
    { id: "HN", name: "Hà Nội" }
];

const districts = [
    { id: "Q1", name: "Quận 1", provinceId: "HCM" },
    { id: "Q3", name: "Quận 3", provinceId: "HCM" },
    { id: "Q7", name: "Quận 7", provinceId: "HCM" },
    { id: "BD", name: "Ba Đình", provinceId: "HN" },
    { id: "TL", name: "Từ Liêm", provinceId: "HN" },
    { id: "TH", name: "Đống Đa", provinceId: "HN" }
];


export default function UseEffectDidUpdateDemo() {
    const [provinceId, setProvinceID] = useState("");
    const [district, setDistrict] = useState([]);

    // console.log(districtId)

    const handleChange = (event) => {
        let {value} = event.target;
        setProvinceID(value);
        // console.log(value);
    }

    useEffect(() => {
        if (provinceId !== "") {
            setDistrict(
                districts.filter((item) => {
                    return item.provinceId === provinceId
                })
            )
        }
    }, [provinceId])

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log(district)

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>Profile</h3>
            <div className="form-group">
                <p>userName</p>
                <input className="form-control" id="userName" />
            </div>
            <div className="form-group">
                <p>Province </p>
                <select
                    className="form-control"
                    id="provinceId"
                    value={provinceId}
                    // value={""}
                    onChange={handleChange}
                >
                    <option value={""}>- Select province</option>
                    <option value={"HCM"}>HCM</option>
                    <option value={"HN"}>HN</option>
                    {/* {arrProvince.map((item, index) => {
                        return  <option value={item.id} key={index} >{item.name}</option>
                    })} */}
                </select>
            </div>
            <div className="form-group">
                <p>District</p>
                <select className="form-control" id="provinceId">
                    {/* {provinceId === "" ? (
                        <option value={""}>- Select district</option>
                    ) : (
                        arrDistrict.map((item, index) => {
                            return (
                                <option value={item.id} key={index}>
                                    {item.name}
                                </option>
                            );
                        })
                    )} */}

                    {provinceId === "" ? <option value={""}>- Select province</option> : 
                        district.map((item, index) => {
                            return <option key={index} >{item.name}</option>
                        })
                    }
                </select>
            </div>
            <button className="btn btn-success mt-4">Submit</button>
        </form>
    );
}
