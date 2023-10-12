import { Ticket } from "./typings"

type Blog = {
    id: string
    header: string
    body: string
}

export const blogs: Blog[] = [
    {
        id: '1',
        header: 'Introducing Enhanced User Profiles',
        body: "We're excited to announce the launch of enhanced user profiles! You can now personalize your profile with a photo, update your contact information, and add a brief bio. This feature aims to foster better connections among colleagues and streamline communication within the company. Head to your profile settings to get started!"
    },
    {
        id: '2',
        header: 'New Knowledge Base Section',
        body: "Knowledge is key, and we're thrilled to introduce our new Knowledge Base section. Here, you'll find a treasure trove of articles, tutorials, and FAQs covering a wide range of topics, from software troubleshooting to company policies. Access valuable resources to enhance your skills and stay informed. Have a topic you'd like us to cover? Let us know through the Helpdesk, and we'll add it to our knowledge library."
    },
    {
        id: '3',
        header: 'Upcoming Webinar: Mastering Time Management',
        body: "Mark your calendars! We're hosting an exclusive webinar on mastering time management in the modern workplace. Join us for insightful tips, practical strategies, and interactive discussions led by industry experts. Learn how to boost productivity, manage tasks effectively, and strike a healthy work-life balance. Stay tuned for registration details – you won't want to miss this opportunity to enhance your skills!"
    },
    {
        id: '4',
        header: 'Mobile App Launch',
        body: "We're thrilled to announce the launch of our official mobile app! Now you can access the Helpdesk anytime, anywhere, directly from your smartphone or tablet. Submit tickets, check ticket statuses, and stay updated on company news on the go. Download the app from the App Store or Google Play and experience seamless support at your fingertips."
    },
    {
        id: '5',
        header: 'Employee Recognition Program',
        body: "At Company, we believe in celebrating achievements, big and small. That's why we're introducing our Employee Recognition Program. Nominations are now open! Recognize your colleagues for their outstanding contributions, teamwork, or innovative ideas. Selected nominees will be featured in our monthly newsletter, receive a certificate of appreciation, and enjoy special perks as a token of our gratitude. Spread positivity and acknowledge the excellence within our community."
    }
]

export const tickets: Ticket[] = [
    {
      "id": "1",
      "title": "Unable to Access Email",
      "author": "John Doe",
      "body": "I have been experiencing issues with accessing my email account since yesterday. When I try to log in, I receive an error message stating that my password is incorrect, even though I am confident that I am entering the correct password. I have attempted to reset my password multiple times, but the issue persists. This problem is affecting my ability to communicate with clients and respond to important emails. I urgently need assistance to resolve this issue and regain access to my email account. Thank you.",
      "email": "john.doe@example.com",
      "priority": "High"
    },
    {
      "id": "2",
      "title": "Printer Not Working",
      "author": "Jane Smith",
      "body": "Our office printer has encountered a malfunction and is currently not operational. Whenever we attempt to print documents, it displays an error message indicating a paper jam issue, although there is no visible paper jam inside the printer. We have tried removing the paper trays, checking the rollers, and restarting the printer, but the problem persists. This is causing significant disruptions to our workflow as we are unable to print essential documents required for our daily tasks. We kindly request immediate assistance to diagnose and fix the printer problem. Your prompt attention to this matter is highly appreciated. Thank you.",
      "email": "jane.smith@example.com",
      "priority": "Medium"
    },
    {
      "id": "3",
      "title": "Software Installation Issue",
      "author": "Michael Johnson",
      "body": "I am encountering difficulties while attempting to install the latest software update on my computer. During the installation process, I receive an error message with code 12345, indicating a failure in the installation. I have retried the installation multiple times, but the error persists. This software update is crucial for my work, as it includes essential features and security patches necessary for my tasks. I need urgent assistance to resolve this installation problem and successfully update the software on my system. Your help in resolving this issue is highly appreciated. Thank you.",
      "email": "michael.johnson@example.com",
      "priority": "High"
    },
    {
      "id": "4",
      "title": "Network Connection Problem",
      "author": "Sarah Brown",
      "body": "I have been experiencing issues with my computer's network connection for the past two days. Despite being connected to the office Wi-Fi network, I am unable to access the internet or any internal company resources. I have attempted troubleshooting steps such as restarting my computer, forgetting and reconnecting to the Wi-Fi network, and checking for any network cable issues, but the problem persists. This connectivity issue is hindering my ability to collaborate with colleagues, access important files, and carry out my tasks effectively. I kindly request immediate assistance to diagnose and resolve this network connection problem. Your prompt support in resolving this matter is highly appreciated. Thank you.",
      "email": "sarah.brown@example.com",
      "priority": "High"
    },
    {
      "id": "5",
      "title": "Account Access Issue",
      "author": "David Wilson",
      "body": "I am currently locked out of my account due to forgetting my password. When attempting to log in, I receive a message stating that my account has been temporarily disabled due to multiple unsuccessful login attempts. I have attempted to reset my password using the 'Forgot Password' option, but have not received any email with instructions to reset my password. This is causing a significant disruption to my work, as I am unable to access important files and documents stored in my account. I urgently need assistance in resetting my password and regaining access to my account. Your prompt attention to this matter is highly appreciated. Thank you.",
      "email": "david.wilson@example.com",
      "priority": "Low"
    },
    {
      "id": "6",
      "title": "Website Login Issue",
      "author": "Emily Johnson",
      "body": "I am having trouble logging into the company website. After entering my credentials, the page reloads without any error message, and I am not logged in. This issue is preventing me from accessing important resources and information. I need assistance to resolve this problem.",
      "email": "emily.johnson@example.com",
      "priority": "High"
    },
    {
      "id": "7",
      "title": "File Download Problem",
      "author": "Daniel Brown",
      "body": "I am unable to download files from the company server. Whenever I click the download link, the download does not start, and I am redirected to an error page. This problem is hindering my work as I cannot access necessary files. Please help me fix this issue.",
      "email": "daniel.brown@example.com",
      "priority": "Medium"
    },
    {
      "id": "8",
      "title": "Email Delivery Delay",
      "author": "Olivia Miller",
      "body": "Emails sent from my account are experiencing significant delays in delivery. Recipients are receiving my emails several hours after I send them. This delay is causing communication gaps and impacting my work. I need urgent assistance to investigate and resolve this email delivery issue.",
      "email": "olivia.miller@example.com",
      "priority": "High"
    },
    {
      "id": "9",
      "title": "Database Connection Problem",
      "author": "Ethan Wilson",
      "body": "Our application is encountering issues with connecting to the database server. As a result, users are unable to retrieve data and perform essential tasks. This problem is affecting our entire user base, and we need immediate help to restore the database connection and ensure the application runs smoothly.",
      "email": "ethan.wilson@example.com",
      "priority": "High"
    },
    {
      "id": "10",
      "title": "Mobile App Crashing",
      "author": "Ava Davis",
      "body": "Our mobile application is crashing frequently on both Android and iOS devices. Users are reporting sudden app closures and loss of unsaved data. We urgently need assistance to identify the cause of these crashes and implement a fix to prevent further disruptions for our users.",
      "email": "ava.davis@example.com",
      "priority": "High"
    },
    {
      "id": "11",
      "title": "Website Display Issue",
      "author": "Liam Anderson",
      "body": "Certain sections of our website are not displaying correctly. Images and content are misaligned, and the overall layout is distorted. This issue is negatively impacting user experience and our brand image. We need technical support to troubleshoot and resolve these display problems.",
      "email": "liam.anderson@example.com",
      "priority": "Medium"
    },
    {
      "id": "12",
      "title": "Network Security Alert",
      "author": "Harper Martinez",
      "body": "Our network security system has detected suspicious activity and potential intrusion attempts. We need immediate assistance to investigate these alerts, identify the source of the security threat, and implement necessary security measures to protect our sensitive data and systems.",
      "email": "harper.martinez@example.com",
      "priority": "High"
    },
    {
      "id": "13",
      "title": "Payment Gateway Error",
      "author": "Lucas Clark",
      "body": "Customers are unable to complete transactions on our website due to payment gateway errors. This issue is causing revenue loss and frustrating our customers. We require urgent technical support to diagnose the payment gateway errors, rectify the issues, and ensure seamless payment processing for our customers.",
      "email": "lucas.clark@example.com",
      "priority": "High"
    },
    {
      "id": "14",
      "title": "Software License Expiry",
      "author": "Chloe Turner",
      "body": "Our software licenses are expiring, and users are experiencing interruptions in their software access. We need assistance to renew the licenses, update the software applications, and ensure uninterrupted access for our employees. Timely resolution of this issue is crucial for our daily operations.",
      "email": "chloe.turner@example.com",
      "priority": "High"
    },
    {
      "id": "15",
      "title": "Server Downtime",
      "author": "Noah White",
      "body": "Our server has experienced unexpected downtime, resulting in the unavailability of our web applications and services. Users are unable to access the platform, causing inconvenience and dissatisfaction. We need immediate server maintenance and troubleshooting to bring our services back online and minimize user impact.",
      "email": "noah.white@example.com",
      "priority": "High"
    },
    {
      "title": "Working with Postman",
      "author": "Ibn",
      "body": "I keep experiencing issues with Postman when I lock my Pc and come back to it after some time, I don't know if its just on MacBook's or also for Windows PC too. I'm hoping this bug gets fixed soon.!!",
      "email": "officialibn@gmail.com",
      "priority": "High",
      "id": "9aoh_RS"
    },
    {
      "title": "Testing my Bugs",
      "author": "Ibn",
      "body": "Omo.. this error go choke",
      "email": "officialibn@gmai.com",
      "priority": "Low",
      "id": "NrP2R-6"
    },
    {
      "title": "E be like I do this thing well oo..",
      "author": "Ibn",
      "body": "I ned to clap for myself if this works out well, it seems I've greatly improved.",
      "email": "officialibn@gmai.com",
      "priority": "High",
      "id": "q9JijhZ"
    },
    {
      "title": "Testing redirect function",
      "author": "Ibn",
      "body": "Redirect function not working properly",
      "email": "officialibn@gmai.com",
      "priority": "High",
      "id": "W14ZYGP"
    },
    {
      "title": "Redirect Bug",
      "author": "Ibn",
      "body": "Trying to fix the redirect bug by removing the submit type property of the button",
      "email": "officialibn@gmai.com",
      "priority": "High",
      "id": "7KrLB0y"
    },
    {
      "title": "Redirect Bug",
      "author": "Ibn",
      "body": "It seems I failed to add the brackets while trying to call the `e.preventDefault()` function.",
      "email": "officialibn@gmai.com",
      "priority": "High",
      "id": "qS7Rb-6"
    },
    {
      "author": "Ibn",
      "title": "Testing my new build",
      "body": "Lets see how far I have come with next 13.!!",
      "email": "officialibn@gmai;.com",
      "priority": "Medium",
      "id": "YoYqQtX"
    }
]