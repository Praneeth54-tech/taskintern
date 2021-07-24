import React, { useState } from "react";

//icons
import { MdClose } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";

//css
import "./Modal.css";

//data
import data from "../data";

//contextapi
import { useGlobalContext } from "../context";
const Modal = () => {
  const { setModal, endClassHandler } = useGlobalContext();
  const [option, setOption] = useState("1");
  const [intrpt, setIntrpt] = useState("");
  return (
    <section className="shadow">
      <div className="Modal">
        <h2>Select a reason to end class</h2>
        {data.map((x) => {
          const { id, mainReason, subReasons } = x;
          return (
            <section key={id}>
              <div className="largeFont">
                <label>
                  <input
                    type="radio"
                    name="class"
                    value={id}
                    checked={id == option}
                    onChange={(e) => setOption(e.target.value)}
                  />
                  <span className="customRadio">
                    <HiCheckCircle className="checkMark" />
                  </span>
                  {mainReason}
                </label>
              </div>
              <div className="subReasons">
                {
                  <section className={option === "2" ? "active" : "inActive"}>
                    {subReasons.map((x) => {
                      const { id, reason } = x;
                      return (
                        <div key={id}>
                          <label>
                            <input
                              type="radio"
                              name="interupt"
                              value={reason}
                              onChange={(e) => setIntrpt(e.target.value)}
                            />
                            <span className="customRadio">
                              <HiCheckCircle className="checkMark" />
                            </span>
                            {reason}
                          </label>
                        </div>
                      );
                    })}
                  </section>
                }
              </div>
            </section>
          );
        })}
        {intrpt == "Other reason." && option != "1" ? (
          <textarea
            name="textarea"
            cols="30"
            rows="4"
            placeholder="Type here"
          ></textarea>
        ) : (
          ""
        )}
        <div className="buttonGroup">
          <button className="btn btn2" onClick={() => endClassHandler()}>
            End Class
          </button>
          <button className="btn3" onClick={() => setModal(false)}>
            Cancel
          </button>
        </div>
        <div className="close">
          <MdClose onClick={() => setModal(false)} />
        </div>
      </div>
    </section>
  );
};
export default Modal;
