(this["webpackJsonpmessage-builder"]=this["webpackJsonpmessage-builder"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/iqvia.9934596d.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(2),r=a.n(l),o=(a(14),a(3)),m=a(4),c=a(5),u=a(7),s=a(6),d=a(8),p=(a(15),a(16),function(e){var t=e.handleChange,a=e.handleSubmit,n=e.formValues,l=n.interviewType,r=n.messageType;return i.a.createElement("form",{className:"form",onSubmit:a},i.a.createElement("label",null,"Message type:"),i.a.createElement("select",{name:"messageType",onChange:t},i.a.createElement("option",{value:"candidateInvite"},"Candidate Invite"),i.a.createElement("option",{value:"interviewerInvite"},"Interviewer Invite")),i.a.createElement("label",null,"Interview type:"),i.a.createElement("select",{name:"interviewType",onChange:t},i.a.createElement("option",{value:"f2f"},"F2F"),i.a.createElement("option",{value:"skype"},"Skype"),i.a.createElement("option",{value:"skypeVideo"},"Skype Video"),i.a.createElement("option",{value:"telephone"},"Telephone")),i.a.createElement("label",null,"Candidate data:"),i.a.createElement("input",{placeholder:"First name",required:!0,type:"text",name:"candidateFirstName",onChange:t}),i.a.createElement("input",{placeholder:"Last name",required:!0,type:"text",name:"candidateLastName",onChange:t}),i.a.createElement("input",{placeholder:"Job title",required:!0,type:"text",name:"candidateRole",onChange:t}),i.a.createElement("input",{placeholder:"Telephone number",required:!0,type:"tel",name:"candidatePhone",onChange:t}),i.a.createElement("input",{placeholder:"Email address",required:!0,type:"email",name:"candidateEmail",onChange:t}),i.a.createElement("label",null,"Interview Data:"),i.a.createElement("input",{placeholder:"Interview date",required:!0,type:"date",name:"interviewDate",onChange:t}),i.a.createElement("input",{placeholder:"Interview time + timezone",type:"text",name:"interviewTime",onChange:t}),i.a.createElement("input",{placeholder:"Duration",type:"text",name:"interviewDuration",onChange:t}),"f2f"===l?i.a.createElement("input",{placeholder:"Location",type:"text",name:"interviewLocation",onChange:t}):null,i.a.createElement("label",null,"Interviewer(s) data:"),i.a.createElement("input",{required:!0,placeholder:"First name",type:"text",name:"interviewerFirstName",onChange:t}),i.a.createElement("input",{required:!0,placeholder:"Last name",type:"text",name:"interviewerLastName",onChange:t}),"candidateInvite"===r?i.a.createElement("input",{required:!0,placeholder:"Job title",type:"text",name:"interviewerRole",onChange:t}):null,i.a.createElement("input",{type:"submit",value:"Submit"}))}),h=function(e){var t=e.formValues,n=t.candidateFirstName,l=t.interviewType,r=t.candidateRole,o=t.candidatePhone,m=t.interviewDate,c=t.interviewTime,u=t.interviewerFirstName,s=t.interviewerLastName,d=t.interviewDuration,p=t.interviewLocation;return i.a.createElement("div",null,i.a.createElement("img",{src:a(17),alt:"iqvia logo"}),i.a.createElement("br",null),i.a.createElement("p",null,"Dear ",n,","),i.a.createElement("p",null,"We are happy to confirm your ",l," interview for the role of ",r),i.a.createElement("p",null,"Please see interview details below:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Date: ",m," "),i.a.createElement("li",null,"Time: ",c,"  \u2013 please allow  approx. ",d," "),i.a.createElement("li",null,"Position: ",r," "),i.a.createElement("li",null,"Interviewers: ",u," ",s),"f2f"===l,i.a.createElement("li",null,"Location: ",p," ")),i.a.createElement("p",null,"The manager will contact you on your telephone provided to us: ",o," \u2013 please make sure you are around your phone and have good signal connection."),i.a.createElement("p",null,"Please confirm as soon as possible if you have received my email with all details outlined as per above."),i.a.createElement("p",null,"If you have any further questions please do not hesitate to contact me."),i.a.createElement("p",null,"Wishing you best of luck!"),i.a.createElement("p",null,"Kind regards,"))},v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value),console.log(a.state))},a.handleSubmit=function(e,t,n){console.log("handle submit"),e.preventDefault(),a.setState({isSubmited:!a.state.isSubmited})},a.state={messageType:"candidateInvite",interviewType:"f2f",candidateFirstName:"",candidateLastName:"",candidateRole:"",candidatePhone:"",candidateEmail:"",interviewDate:"",interviewDuration:"",interviewLocation:"",interviewerFirstName:"",interviewerLastName:"",interviewerRole:"",isSubmited:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isSubmited;return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Message Builder"),e?i.a.createElement(h,{formValues:this.state}):i.a.createElement(p,{formValues:this.state,handleSubmit:this.handleSubmit,handleChange:this.handleChange})))}}]),t}(n.Component);r.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5c81cf32.chunk.js.map