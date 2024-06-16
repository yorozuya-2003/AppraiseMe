# AppraiseMe - Reviews Elicitation Platform
## Overview
A web-based social platform for reviewing users based on their soft skills.
Users can create an account, add their information 


## User Interface Preview
![landing](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/7fe9ce6e-aa1a-4854-9a23-c8ea2340bda5)
![authentication](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/0446f5eb-84cf-40e3-a0de-0cd6a29903f1)
![details](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/692c3d19-2f64-4ebb-a48b-9f2f5e3fa62d)
![home](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/0cd85548-3404-411a-a740-3bf722bd2174)
![review-dropdown](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/3ae34696-9200-4e58-a216-ed14fab796b5)
![review-sliders](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/e0142eda-f37e-4b81-91bf-a5e948411c99)
![review-description](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/6edef73d-f36a-4828-81a6-705c58e4df7f)
![review](https://github.com/yorozuya-2003/AppraiseMe/assets/101598170/4ad8c187-ed77-4c17-978f-aba817566d0c)

## Setup
Clone the repository:
```{bash}
git clone https://github.com/yorozuya-2003/AppraiseMe.git
```

### Frontend
1. Ensure that Node.js and npm are installed on the system.
2. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
3. Install dependencies using npm:
    ```sh
    npm install
    ```
### Backend
1. Ensure that Python and pip are installed on the system.
2. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
3. Install dependencies from `requirements.txt`:
    ```sh
    pip install -r requirements.txt
    ```

## Environment Variables
Create a `.env` file in the `backend` directory and add the following variables:
```
EMAIL_HOST_USER=your_email_host_user
EMAIL_HOST_PASSWORD=your_email_host_password
```

For deploying the project, also add:
```
DATABASE_URL=your_database_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Running the app
### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Run the frontend server:
    ```sh
    npm start
    ```

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Run the backend server:
    ```sh
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```

## Authors
- [Vinay Vaishnav](mailto:vaishnav.3@iitj.ac.in) (B.Tech. Electrical Engineering)  
- [Tanish Pagaria](mailto:pagaria.2@iitj.ac.in) (B.Tech. Artificial Intelligence & Data Science)

(IIT Jodhpur Undergraduates)
