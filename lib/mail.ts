import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;


export const sendTwoFactorEmail = async (email: string, token: string) => {
    await resend.emails.send({
        from: 'NextjsAuthentication@resend.dev',
      to: email,
      subject: '2FA Token',
      html: `<p>your 2FA token is ${token}.</p>`,
    //   react: EmailTemplate({ firstName: 'John' }),
    });
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  await resend.emails.send({
      from: 'NextjsAuthentication@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  //   react: EmailTemplate({ firstName: 'John' }),
  });
}
export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;
    await resend.emails.send({
        from: 'NextjsAuthentication@resend.dev',
      to: email,
      subject: 'Email Verification',
      html: `<p>Click <a href="${confirmLink}">here</a> to verify your email.</p>`,
    //   react: EmailTemplate({ firstName: 'John' }),
    });
}