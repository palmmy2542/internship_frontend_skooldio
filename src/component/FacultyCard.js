import React, { useState } from "react";

import loadIcon from "../img/group-2_2021-02-07/group-2@2x.png";
import heartIcon from "../img/page-1_2021-02-07 (1)/page-1@3x.png";
import honorIcon from "../img/page-1-copy-2_2021-02-07/page-1-copy-2@3x.png";
function FacultyCard({ faculty }) {
  const [round, setRound] = useState(0);
  return (
    <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3 pl-4 pr-4 Rectangle ">
      <div className="row mb-1">
        <div className="col-lg-3 mx-auto engi-copy-2">
          <img src={faculty.logo} className="engi"></img>
        </div>
        <div className="col-lg-7 mx-auto my-auto">
          <div >
            <h1 className="faculty">{faculty.faculty.name}</h1>
            <h2 className="major">{faculty.name}</h2>
          </div>
          <div>
            <h2 className="university ">{faculty.faculty.university.name}</h2>
          </div>
        </div>
        <div className="col-lg-2 mx-auto">
          <img src={heartIcon} className="img-fluid  float-right" />
        </div>
      </div>
      <div className="Path-4-Copy mb-3"></div>
      <div className="row mb-1 p-1">
        <div className="col-lg-4 mr-auto">
          <h4 className="-copy ">รอบที่เปิด</h4>
        </div>
        <div className="col-lg-8">
          <div className="row text-light">
            <div
              className={`Oval-2 ${
                faculty.roundSeats[0] <= 0 && `Oval-2-Copy-2`
              } rounded-circle`}
            >
              1
            </div>
            <div
              className={`Oval-2 ${
                faculty.roundSeats[1] <= 0 && `Oval-2-Copy-2`
              } rounded-circle`}
            >
              2
            </div>
            <div
              className={`Oval-2 ${
                faculty.roundSeats[2] <= 0 && `Oval-2-Copy-2`
              } rounded-circle`}
            >
              3
            </div>
            <div
              className={`Oval-2 ${
                faculty.roundSeats[3] <= 0 && `Oval-2-Copy-2`
              } rounded-circle`}
            >
              4
            </div>
            <div
              className={`Oval-2 ${
                faculty.roundSeats[4] <= 0 && `Oval-2-Copy-2`
              } rounded-circle`}
            >
              5
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-1 p-1">
        <div className="col-lg-6 mr-auto">
          <p className="round">รอบที่ 4 : Admission</p>
        </div>
        <div className="col-lg-6 ">
          <button className="btn btn-outline-danger float-right ">
            แก้ไขคะแนน
          </button>
        </div>
      </div>
      <div className="row mb-1 p-1">
        <div className="col-lg-6">
          <img src={honorIcon} className="img-fluid float-left" />
        </div>
        <div className="col-lg-6 text-center">
          <h6 className="float-right your-score m-0">คะแนนของคุณคือ</h6>
          <h1 className="float-right score">23,453</h1>
        </div>
      </div>
      <div className="row mb-1 p-1">
        <div className="col-lg-4 text-center">
          <h4 className="score">
            {faculty.score !== null ? faculty.score.min : <h6>ไม่พบข้อมูล</h6>}
          </h4>
          <h6 className="your-score">
            คะแนนต่ำสุด{" "}
            {faculty.score !== null ? faculty.score.year : <h6>??</h6>}
          </h6>
        </div>
        <div className="col-lg-4 text-center">
          <h4 className="score">
            {faculty.score !== null ? faculty.score.avg : <h6>ไม่พบข้อมูล</h6>}
          </h4>
          <h6 className="your-score">
            คะแนนเฉลี่ย{" "}
            {faculty.score !== null ? faculty.score.year : <h6>??</h6>}
          </h6>
        </div>
        <div className="col-lg-4 text-center">
          <h4 className="score">
            {faculty.score !== null ? faculty.score.max : <h6>ไม่พบข้อมูล</h6>}
          </h4>
          <h6 className="your-score">
            คะแนนสูงสุด{" "}
            {faculty.score !== null ? faculty.score.year : <h6>??</h6>}
          </h6>
        </div>
      </div>
      <div className="Path-4-Copy"></div>
      <div className="row mb-1 p-1">
        <button className="btn btn-default btn-score-ratio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>{" "}
          ดูสัดส่วนคะแนน
        </button>
      </div>
      <div className="Path-4-Copy"></div>
      <div className="row mb-1 p-1">
        <div className="col-md-6 col-lg-6">
          <div className="row m-0 p-0 num-interest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="currentColor"
              className="bi bi-person-fill mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <h6>{faculty.likes} คนที่สนใจ</h6>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <img src={loadIcon} className="img-fluid float-right" />
        </div>
      </div>
    </div>
  );
}

export default FacultyCard;
