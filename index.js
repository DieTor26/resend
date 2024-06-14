import { Resend } from 'resend';
const resend = new Resend('re_JiReHjUG_HBJEUZAxEVpYX9j3RYmcWms7');

( async function () {
  try {
    const data = await resend.emails.send({
      from: '',
      to: [''],
      subject: 'Hello',
      html: '<strong>It works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();