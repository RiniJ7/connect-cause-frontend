import React, { useState } from "react";

import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

import { VolunteerSignupform } from "../components/VolunteerSignupform.jsx";
import { VolunteerSigninForm } from "../components/VolunteerSigninForm.jsx";
import { CompanySignupform } from "../components/CompanySignupform.jsx";
import { CompanySigninForm } from "../components/CompanySigninForm.jsx";
import { Button } from "@mui/material";

import "../styles/App.css";

export default function LoginPage(props) {
  const [VolunteerSignInForm, setVolunteerSignInSelected] = useState(true);
  const [VolunteerSignUpForm, setVolunteerSignUpSelected] = useState(false);
  const [CompanySignInForm, setCompanySignInSelected] = useState(true);
  const [CompanySignUpForm, setCompanySignUpSelected] = useState(false);
  const [volunteerLoginPage, setVolunteerLogin] = useState(true);
  const [companyLoginPage, setCompanyLogin] = useState(false);

  return (
    <>
      <div className="login-page">
        <div>
          <h3>Your next volunteering opportunity is here</h3>
        </div>
        <div>
          <div>
            <br />
            {volunteerLoginPage == true && (
              <Button
                variant="outlined"
                onClick={() => {
                  setCompanyLogin(true);
                  setCompanySignInSelected(true);
                  setCompanySignUpSelected(false);
                  setVolunteerLogin(false);
                }}>
                Go To Company Login
              </Button>
            )}
            {companyLoginPage == true && (
              <Button
                variant="outlined"
                onClick={() => {
                  setCompanyLogin(false);
                  setVolunteerLogin(true);
                  setVolunteerSignInSelected(true);
                  setVolunteerSignUpSelected(false);
                }}>
                Go To Volunteer Login
              </Button>
            )}

            {VolunteerSignInForm == true && volunteerLoginPage == true && (
              <VolunteerSigninForm
                title="Volunteer Login"
                setSignupSelected={setVolunteerSignUpSelected}
                setSigninSelected={setVolunteerSignInSelected}
              />
            )}

            {VolunteerSignUpForm == true && volunteerLoginPage == true && (
              <VolunteerSignupform
                title="Volunteer Sign Up"
                setSignupSelected={setVolunteerSignUpSelected}
                setSigninSelected={setVolunteerSignInSelected}
              />
            )}
            {CompanySignInForm == true && companyLoginPage == true && (
              <CompanySigninForm
                title="Company Login"
                setSignupSelected={setCompanySignUpSelected}
                setSigninSelected={setCompanySignInSelected}
              />
            )}

            {CompanySignUpForm == true && companyLoginPage == true && (
              <CompanySignupform
                title="Company Sign Up"
                setSignupSelected={setCompanySignUpSelected}
                setSigninSelected={setCompanySignInSelected}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
