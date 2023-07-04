import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function SignUpModal() {
  const { modalState, toggleModals } = useContext(UserContext);
  //console.log(modalState, toggleModals);

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={() => toggleModals("close")}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            {/* Modal header */}
            <div className="modal-dialog bg-light">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign up</h5>
                  <button
                    onClick={() => toggleModals("close")}
                    className="btn-close"
                  ></button>
                </div>
              </div>
              {/* modal content */}
              <div className="modal-body">
                <form className="sign-up-form">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signUpEmail">
                      Email Adress
                    </label>
                    <input
                      type="email"
                      name="signUpEmail"
                      required
                      className="form-control"
                      id="signUpEmail"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="signUpPwd">
                      Password
                    </label>
                    <input
                      type="password"
                      name="signUpPwd"
                      required
                      className="form-control"
                      id="signUpPwd"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="repeatPwd">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      name="repeatPwd"
                      required
                      className="form-control"
                      id="repeatPwd"
                    />
                    <p className="text-danger mt-1">Validation</p>
                  </div>
                  <button className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
