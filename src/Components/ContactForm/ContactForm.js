import React, { Component } from 'react';



class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            comments: ''
        }
       
    }
    render() {
        return (
            <div>
                <section className="contactForm">
                    <fieldset id="contactLink">
                        <form id="contactUs" >
                            <div id="errorMessage">
                            </div>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" required={'required'} name="firstname" autofocus placeholder="Enter your first name.."></input>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" required={'required'} id="lname" name="lname" placeholder="Enter your last name.." />

                            <label htmlFor="emailAdd">Email address</label>
                            <input type="email" required={'required'} id="emailAdd" name="emailAdd" placeholder="Enter your email address.." />

                            <label htmlFor="comments" id="commentHeading">Questions/Comments</label>
                            <textarea id="comments" required={'required'} name="comments" placeholder="Give us any questions or comments.."></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </fieldset>
                </section>
            </div>
        )
    }
}

export default Form;