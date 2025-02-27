Pet Insurance App 🐾

This project is built using React, Next.js, and Material-UI to create a responsive and modern web application. It includes various features to enhance user experience and streamline functionality.

Setup Instructions 🚀

Follow these steps to get the project up and running:

Clone the repository

git clone  (https://github.com/suharehmaan/Pet-insurance.git) 

Navigate to the project directory
cd pet-insurance  

Install dependencies
npm install  

Start the development server

npm start 
 
Features

1. Header (Sticky for Accessibility)

Logo (Positioned on the left, customizable).

Search Bar (Optional, for quick policy lookup).

User Profile Dropdown (Top-right corner, includes Profile, Logout, and Settings options).

2. Left-Side Navigation Panel (Persistent)

Dashboard (Home view of the application).

Policies (View and manage policies).

Claims (File and track insurance claims).

Profile (Manage user details and preferences).

Settings (Application and user settings).

Support (Live Chat, FAQs, and Contact Us).

3. Main Dashboard Panel (Central Content)

A. Policy Summary (Top Section)

Displays active policy details with a color-coded status (Active, Expired, Pending Renewal).

Key pet details: Name, Type, Breed, Age, and Image (optional).

Coverage information: Plan Type, Coverage Limit, and Deductibles.

B. Quick Actions (Button Group)

"Intimate a Claim" (Primary call-to-action for initiating a claim).

"Change Policy" (Redirects to policy settings for modifications).

"Reimbursement Status" (Quick access to claim tracking).

C. Claims Overview (Below Quick Actions)

A table-style widget displaying recent claims:

Claim ID | Date | Status | Amount

Status color codes: Pending (Yellow), Approved (Green), Rejected (Red).

"View Full History" link for accessing complete claim records.

D. Personalized Insights (Sidebar or Section)

Dynamic cards displaying:

Pet care tips (Customized based on pet type).

Exclusive discounts on veterinary services.

Cost-saving recommendations for pet insurance.

E. Support Section (Bottom or Sidebar)

Live Chat Button (Floating in the bottom right for real-time assistance).

Quick access to FAQs & Customer Support contact information.

4. Footer (Optional)

Links to Privacy Policy, Terms & Conditions, and Contact Us.

Technology Stack

Frontend: React.js

UI Framework: Material-UI / Bootstrap / Tailwind CSS

API Handling: Axios / Fetch API

State Management: Context API / Redux (if needed)

Deployment: Vercel / Netlify

Assumptions Made During Development 🤔
Users will sign up and log in before accessing policy details.
API responses are structured in a predictable format for seamless integration.
The platform will primarily be used on modern browsers and mobile devices.
