import React from "react";
import { Button } from "@mui/material";

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form>
                <label htmlFor="email">
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label htmlFor="message">
                    <span>Your message:</span>
                    <textarea name="message" id="" cols="30" rows="10" required></textarea>
                </label>
                <Button className="form-submit-btn" type="submit" title="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Contact;
