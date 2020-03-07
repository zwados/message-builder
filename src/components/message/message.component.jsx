import React from 'react';
import '../../img/iqvia.jpg';

const Message = ({formValues}) => {
let {candidateFirstName, interviewType, candidateRole, candidatePhone, interviewDate, interviewTime, interviewerFirstName, interviewerLastName, interviewDuration, interviewLocation} = formValues;
    return ( <div>

<img src="../../img/iqvia.jpg" alt="iqvia logo"></img>
<br/>        
<p>Dear {candidateFirstName},</p>

<p>We are happy to confirm your {interviewType} interview for the role of {candidateRole}</p>

<p>Please see interview details below:</p>

<ul>
<li>Date: {interviewDate} </li>   
<li>Time: {interviewTime}  – please allow  approx. {interviewDuration} </li>   
<li>Position: {candidateRole} </li>   
<li>Interviewers: {interviewerFirstName} {interviewerLastName}</li>   
<li>Location: {interviewLocation} </li>   
</ul>

<p>The manager will contact you on your telephone provided to us: {candidatePhone} – please make sure you are around your phone and have good signal connection.</p>

Please confirm as soon as possible if you have received my email with all details outlined as per above.

If you have any further questions please do not hesitate to contact me.  

Wishing you best of luck!

Kind regards,
        </div> );
}
 
export default Message;