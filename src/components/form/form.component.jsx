import React from 'react';
import './form.styles.scss';

const Form = ({handleChange, handleSubmit, formValues}) => {

    let {interviewType, messageType} = formValues;

    let isF2f = (interviewType) => {
        if(interviewType === 'f2f') {
            return true
        } else {
            return false
        }
    }

    isF2f();

    return ( 
        <form className="form" onSubmit={handleSubmit}>
        <label>Message type:</label>
        <select name='messageType' onChange={handleChange}>
            <option value="candidateInvite">Candidate Invite</option>
            <option value="interviewerInvite">Interviewer Invite</option>
        </select>

        <label>Interview type:</label>
        <select name='interviewType' onChange={handleChange}>
            <option value="face to face">Face to face</option>
            <option value="skype">Skype</option>
            <option value="skype video">Skype Video</option>
            <option value="telephone">Telephone</option>
        </select>

        <label>Candidate data:</label>
        <input placeholder="First name" required type="text" name="candidateFirstName" onChange={handleChange} />
        <input placeholder="Last name" required type="text" name="candidateLastName" onChange={handleChange} />
        <input placeholder="Job title" required type="text" name="candidateRole" onChange={handleChange} />
        <input placeholder="Telephone number" required type="tel" name="candidatePhone" onChange={handleChange} />
        <input placeholder="Email address" required type="email" name="candidateEmail" onChange={handleChange} />
        
        
        <label>Interview Data:</label>
        <input placeholder="Interview date" required type="date" name="interviewDate" onChange={handleChange} />
        <input placeholder="Interview time + timezone" type="text" name="interviewTime" onChange={handleChange} />
        <input placeholder="Duration" type="text" name="interviewDuration" onChange={handleChange} />
        {(interviewType === 'face to face' ?
        <input placeholder="Location" type="text" name="interviewLocation" onChange={handleChange} /> :
        null
        )}

        <label>Interviewer(s) data:</label>
        <input required placeholder="First name" type="text" name="interviewerFirstName" onChange={handleChange} />
        <input required placeholder="Last name" type="text" name="interviewerLastName" onChange={handleChange} />
        {(messageType === 'candidateInvite' ? 
        <input required placeholder="Job title" type="text" name="interviewerRole" onChange={handleChange} /> :
        null
        )}
        


        
        <input className="submit-btn" type="submit" value="Submit"/>
      </form>
     );
}
 
export default Form;