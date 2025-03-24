# Educair-Education Management Platform


Welcome to **Educair**, a dynamic and user-friendly education management platform designed to connect students, teachers, and administrators seamlessly. Whether you're a student enrolling in top-tier classes, a teacher sharing your expertise, or an admin managing the ecosystem, Educair offers a robust and engaging experience.

🌐 **Live Demo**: [Educair Education Management](https://educair-education-management.firebaseapp.com/)

---

## 🚀 Features 

### General Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **User Roles**: Supports Students, Teachers, and Admins with role-based dashboards.
- **Authentication**: Secure login and registration with JWT, including Google Sign-In.
- **Animations**: Smooth scroll-based animations powered by AOS (Animate on Scroll).

### Navbar
- Logo and website name ("Educair").
- Links: **Home**, **All Classes**, **Teach on Educair**, and **Sign In** (when logged out).
- Logged-in users see their profile picture with a dropdown:
  - User Name (non-clickable).
  - Dashboard link.
  - Logout button.

### Homepage
- **Banner Carousel**: Engaging slideshow with education-themed images.
- **Partners Section**: Highlights collaborators with logos and descriptions.
- **Popular Classes Slider**: Showcases 3-6 top classes based on enrollment, presented in a sleek slider.
- **Feedback Carousel**: Displays teacher feedback from the database with:
  - Feedback text.
  - Name and image of the reviewer.
  - Class title.
- **Stats Section**: 
  - Left: Cards showing total users, total classes, and total enrollments.
  - Right: A relevant educational image.
- **Become an Instructor**: Inspiring section encouraging teachers to join, with a custom design.
- **Extra Sections**: 
  - "Why Choose Educair": Highlights unique benefits of the platform.
  - "Learning Community": Showcases community engagement and support.

### All Classes
- Displays approved classes in card format with:
  - Title, teacher name, image, price, short description, total enrollment, and an **Enroll** button.

### Class Details (Private Route)
- Detailed class info (teacher, price, etc.) with a **Pay** button.
- Redirects to payment page, then to `/dashboard/my-enroll-classes` upon successful payment.

### Teach on Educair (Private Route)
- Form for teacher applications:
  - Name, image, email (read-only), experience (Beginner, Mid-level, Experienced), title, category (e.g., Web Development, Digital Marketing).
  - **Submit for Review** button stores data with "pending" status.
- Admin approval/rejection updates user role and status.

### Student Dashboard (Private Route)
- Routes: **My Enroll Classes**, **Profile**.
- **My Enroll Classes**: Cards with title, teacher name, image, and **Continue** button.
- **Enroll Class Details**: Tabular assignments with title, description, deadline, submission box, and feedback modal (Teaching Evaluation Report).

### Admin Dashboard (Private Route)
- Routes: **Teacher Requests**, **Users**, **All Classes**, **Profile**.
- **Teacher Requests**: Table with approval/rejection buttons.
- **Users**: Table with "Make Admin" functionality and server-side search.
- **All Classes**: Table with approval/rejection and progress tracking.

### Teacher Dashboard (Private Route)
- Routes: **Add Class**, **My Classes**, **Profile**.
- **Add Class**: Form with title, price, description, etc., stored as "pending".
- **My Classes**: Cards with update, delete, and see details options; assignment creation included.

### Additional Features
- **Pagination**: Applied to tables and card lists (10 items per page).
- **Tanstack Mutation**: Used for all POST requests.
- **React Hook Form**: Implemented across all forms for efficient validation.
- **JWT Authentication**: Tokens stored in local storage for secure access.

---

## 🛠️ Technologies Used

- **Frontend**: 
  - React.js
  - React Router DOM
  - Tailwind CSS (with custom styling)
  - AOS (Animate on Scroll) for animations
  - React Hook Form
  - Tanstack Query (Mutation)
- **Backend**: 
  - Firebase (Hosting, Authentication)
  - MongoDB (Database)
  - Node.js/Express.js (assumed for API)
- **Icons**: React Icons (e.g., MdStar for ratings)
- **Deployment**: Firebase Hosting


## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for hosting and authentication)
- MongoDB (local or Atlas)
