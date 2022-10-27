const nodemailer = require("nodemailer");

const SendEmailUsingNodeMailer = async (req, res) => {
  try {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // create reusable transporter object using the default SMTP transport
    const _SmtpService = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'lalagujjar48480@gmail.com', // generated ethereal user
        pass: '#murshad604', // generated ethereal password
      },
    });

    //Email Object

    const _EmailObject = {
      from: 'lalagujjar48480@gmail.com', // sender address
      to: req.body.Email, // list of receivers
      subject: req.body.Subject, // Subject line
      html: `<b>
    <div style="font-family: serif;">
    Hey dear, We welcome you aboard!
<br>
Thanks for registering for our second Amazon Virtual Assistant batch, Your seat has been confirmed/reserved, the batch is going to start from January 23rd. The classes will be conducted on Google Meets, Recording of each class will be uploaded to your student portal as well.
<br><br><br>
Course details are as follows!
<br>
Candidate Number: B02-05<br>
Title: Amazon Virtual Assistant<br>
Duration: 6 weeks, One Class every Sunday (2.5 hours)<br>
Starting Date: January 23rd<br>
Course Fee: During New Year offer (12,500) PKR After January Regular Rates Will Apply
<br>
Course Outline:
<br><br><br>
✔ Introduction to E-Commerce<br>
✔ Overview of Freelancing as a Career<br>
✔ Basic Requirements for a VA<br>
✔ Introduction of Amazon<br>
✔ Overview of Creating Amazon Account<br>
✔ Product Hunting<br>
✔ Product Sourcing<br>
✔ Creating Amazon Compliant Listing<br>
✔ Uploading Products Manually<br>
✔ Creating Shipment Plans<br>
✔ Overview of Inventory Planning<br>
✔ Overview of Launch Strategies<br>
✔ Overview of PPC Management<br>
✔ Opening Amazon Cases & Resolving Issues<br>
✔ Managing Feedback and Providing Customer Support<br>
✔ Reviewing Account Activities<br>
<br>
Addons<br>
Lifetime Content Access: Yes<br>
Lifetime Mentorship: Yes<br>
Lifetime Membership Validity: Yes<br>
Certification: Yes<br>
<br>
<br>
Let's achieve wonders together and strengthen Pakistan Financially.<br>
<br>
Skillstitute Team!<br>
0318-4111363<br>
www.skillstitute.com<br>
    </div>
    </b>`, // html body
    //   attachments: [
    //     {
    //       filename: 'BROCHUER.pdf',
    //       path: './assets/Attachments/BROCHUER.pdf'
    //     }
    //   ]
    }


    // Send Email 

    console.log(_EmailObject);
    const _SendEmail = await _SmtpService.sendMail(_EmailObject);
    res.json( {
      Message: `Important Information Has Sent Successfully from ${_SendEmail.envelope.from} To ${_SendEmail.envelope.to} Please Check Your Email!`,
      Data: _SendEmail.messageId,
      Result: _SendEmail.response
    })
  } catch (error) {
    res.json( {
      Message: error.message,
      Data: false,
      Result: null
    })
  }

}

module.exports ={ 
    SendEmailUsingNodeMailer
}