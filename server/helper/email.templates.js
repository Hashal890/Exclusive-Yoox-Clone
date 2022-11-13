const welcomeEmailTemplate = ({ name, token }) => {
  return `<p><span style="font-size:14px"><strong>Hello ${name},</strong></span></p>
          <p>Welcome to the Exlusive. Please activate your account by clicking the below button or link in 10 minutes after that link expires.</p>
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/api/user/accountActivation/${token}"> <h1 style="margin-left:40px"><span style="font-size:22px"><span style="color:#ecf0f1"><strong><span style="background-color:#3498db">&nbsp; Activate&nbsp; &nbsp;</span></strong></span></span></h1></a>
          <p><span style="display:none">&nbsp;</span>Thank you,&nbsp;</p>
          <p>Team Exlusive</p>        
          <p>&nbsp;</p>               
          <hr />`;
};

module.exports = { welcomeEmailTemplate };
