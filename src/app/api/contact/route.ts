import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter connection
    await transporter.verify();

    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vigorlifecare@gmail.com', // Admin email
      subject: `New Lead from Website Chatbot: ${name}`,
      text: `
        You have a new inquiry from the website chatbot.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Message: ${message}
      `,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email to Customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Customer email
      subject: 'We have received your inquiry - Vigor Life Care',
      text: `
        Hi ${name},
        
        Thank you for reaching out to Vigor Life Care! 
        We have received your inquiry and will get back to you as soon as possible.
        
        Your Message:
        ${message}
        
        Best regards,
        Vigor Life Care Team
      `,
      html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out to Vigor Life Care! We have received your inquiry and will get back to you as soon as possible.</p>
        <br/>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Vigor Life Care Team</strong></p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}
