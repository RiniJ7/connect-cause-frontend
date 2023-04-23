import React from "react";

import { VolunteerSignupform } from "../components/VolunteerSignupform.jsx";
import { VolunteerSigninForm } from "../components/VolunteerSigninForm.jsx";
import { CompanySignupform } from "../components/CompanySignupform.jsx";
import { CompanySigninForm } from "../components/CompanySigninForm.jsx";
import { useState } from "react";
import { Button } from "@mui/material";

import "../styles/App.css";

export default function LoginPage(props) {
    const [VolunteerSignInSelected, setVolunteerSignInSelected] = useState(false);
    const [VolunteerSignUpSelected, setVolunteerSignUpSelected] = useState(true);
    const [CompanySignInSelected, setCompanySignInSelected] = useState(false);
    const [CompanySignUpSelected, setCompanySignUpSelected] = useState(true);
    const [volunteerLogin, setVolunteerLogin] = useState(true);
    const [companyLogin, setCompanyLogin] = useState(false);

    return (
        <div>
            <main className="content">
                <div className="body">
                    <div>
                        <h3>Your next volunteering opportunity is here</h3>
                    </div>
                    <div>
                        <div>
                            <br />
                            {volunteerLogin == true && (
                                <Button
                                    onClick={() => {
                                        setCompanyLogin(true);
                                        setVolunteerLogin(false);
                                    }}
                                >
                                    Company Login
                                </Button>
                            )}
                            {companyLogin == true && (
                                <Button
                                    onClick={() => {
                                        setCompanyLogin(false);
                                        setVolunteerLogin(true);
                                    }}
                                >
                                    Volunteer Login
                                </Button>
                            )}
                            {VolunteerSignInSelected == true && volunteerLogin == true && (
                                <VolunteerSigninForm
                                    setLoginToken={props.setLoginToken}
                                    title="Volunteer Sign In"
                                    setSignupSelected={setVolunteerSignUpSelected}
                                    setSigninSelected={setVolunteerSignInSelected}
                                />
                            )}

                            {VolunteerSignUpSelected == true && volunteerLogin == true && (
                                <VolunteerSignupform
                                    setLoginToken={props.setLoginToken}
                                    title="Volunteer Signup"
                                    setSignupSelected={setVolunteerSignUpSelected}
                                    setSigninSelected={setVolunteerSignInSelected}
                                />
                            )}
                            {CompanySignInSelected == true && companyLogin == true && (
                                <CompanySigninForm
                                    setLoginToken={props.setLoginToken}
                                    title="Company Sign In"
                                    setSignupSelected={setCompanySignUpSelected}
                                    setSigninSelected={setCompanySignInSelected}
                                />
                            )}

                            {CompanySignUpSelected == true && companyLogin == true && (
                                <CompanySignupform
                                    setLoginToken={props.setLoginToken}
                                    title="Company Signup"
                                    setSignupSelected={setCompanySignUpSelected}
                                    setSigninSelected={setCompanySignInSelected}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
