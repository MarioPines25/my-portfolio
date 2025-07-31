// EmailJS Configuration
// To set up EmailJS for direct email sending:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}}
//    - {{from_email}} 
//    - {{subject}}
//    - {{message}}
//    - {{to_email}}
//    - {{reply_to}}
// 4. Get your service ID, template ID, and public key
// 5. Update the values below

export const emailjsConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: 'service_o5hz3dp_portfo', // Your EmailJS service ID
  templateId: 'template_portfolio', // Your EmailJS template ID  
  publicKey: 'YOUR_PUBLIC_KEY', // Your EmailJS public key
  
  // Email template example for EmailJS:
  /*
  Email Template Content:
  
  Subject: New Contact from Portfolio - {{subject}}
  
  Body:
  Hello Mario,
  
  You have received a new message from your portfolio website:
  
  Name: {{from_name}}
  Email: {{from_email}}
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  Best regards,
  Portfolio Contact Form
  */
};
