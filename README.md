# Video Session Management System

This project is a backend system for managing non-linear video sessions. It allows users to create, read, update, and delete videos and sessions, and to manage the flow of video sessions based on user choices.

## Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
  - [Video Endpoints](#video-endpoints)
  - [Session Endpoints](#session-endpoints)
- [Running the Application](#running-the-application)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/video-session-management.git
    cd video-session-management
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the root of the project and add your MongoDB connection string:
    ```plaintext
    MONGODB_URI=mongodb+srv://username:password@cluster0.wsrscyb.mongodb.net/video-session?retryWrites=true&w=majority
    ```

## Endpoints

### Video Endpoints

#### Create a Video
- **Method:** POST
- **URL:** `/videos`
- **Body (JSON):**
  ```json
  {
  "title": "Drops Of Liquid On A Tray To Be Use As Samples",
  "url": "https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/"
  }
- Response (JSON):
  ```json
  {
    "title": "Drops Of Liquid On A Tray To Be Use As Samples",
    "url": "https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/",
    "_id": "6649ae85458a5c9a99f82cae",
    "__v": 0
  }
  ```
![Create a Video](./images/image.png)
  
#### Get All Videos
- **Method:** GET
- **URL:** `/videos`
- **Body (JSON):**
- Response (JSON):
  ```json
  [
    {
        "_id": "6649af925c50f1c692e3d978",
        "title": "Drops Of Liquid On A Tray To Be Use As Samples",
        "url": "https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/",
        "__v": 0
    }
  ]
  ```

#### Get a Video by ID
- **Method:** GET
- **URL:** `/videos/:id`
- **Body (JSON):**
- Response (JSON):
  ```json
    {
    "_id": "6649af925c50f1c692e3d978",
    "title": "Drops Of Liquid On A Tray To Be Use As Samples",
    "url": "https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/",
    "__v": 0
    }
    ```

#### Update a Video
- **Method:** PUT
- **URL:** `/videos/:id`
- **Body (JSON):**
  ```json
  {
  "title": "Liquid Droplet used as sample",
  "url": "https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/"
  }
- Response (JSON):
  {
    "_id": "6649af925c50f1c692e3d978",
    "title": "Liquid Droplet used as sample",
    "url": "https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/",
    "__v": 0
  }
  ```
![Update a Video](./images/image-1.png)
#### Delete a Video
- **Method:** DELETE
- **URL:** `/videos/:id`
- **Body (JSON):**
- Response (JSON):
  ```json
  {
    "message": "Video id: 6649af925c50f1c692e3d978 is deleted."
  }
  ```
![Delete a Video](./images/image-2.png)

### Session Endpoints
#### Create a Session
- **Method:** POST
- **URL:** `/sessions`
- **Body (JSON):**
  ```json
  {
  "videoId": "6649b0665c50f1c692e3d97e",
  "userId": "Yash@Dev",
  "timestamp": "2024-05-19T12:00:00Z"
  }
- Response (JSON):
  {
    "videoId": "6649b0665c50f1c692e3d97e",
    "userId": "Yash@Dev",
    "timestamp": "2024-05-19T12:00:00.000Z",
    "_id": "6649b0735c50f1c692e3d980",
    "__v": 0
  }
  ```
![Create a Session](./images/image-3.png)

#### Get All Sessions
- **Method:** GET
- **URL:** `/sessions`
- **Body (JSON):**
- Response (JSON):
  ```json
  [
    {
        "_id": "6649b0735c50f1c692e3d980",
        "videoId": "6649b0665c50f1c692e3d97e",
        "userId": "Yash@Dev",
        "timestamp": "2024-05-19T12:00:00.000Z",
        "__v": 0
    }
  ]
  ```

#### Get a Session by ID
- **Method:** GET
- **URL:** `/sessions/:id`
- **Body (JSON):**
- Response (JSON):
  ```json
  {
    "_id": "6649b0735c50f1c692e3d980",
    "videoId": "6649b0665c50f1c692e3d97e",
    "userId": "Yash@Dev",
    "timestamp": "2024-05-19T12:00:00.000Z",
    "__v": 0
  }
  ```

#### Update a Session
- **Method:** PUT
- **URL:** `/sessions/:id`
- **Body (JSON):**
  ```json
  {
  "videoId": "6649b1755c50f1c692e3d986",
  "userId": "Yash@Dev321",
  "timestamp": "2024-05-19T15:00:00Z"
  }
- Response (JSON):
  {
    "_id": "6649b1755c50f1c692e3d986",
    "videoId": "6649b1755c50f1c692e3d986",
    "userId": "Yash@Dev321",
    "timestamp": "2024-05-19T15:00:00.000Z",
    "__v": 0
  }
  ```
![Update a Session](./images/image-5.png)

#### Delete a Session
- **Method:** DELETE
- **URL:** `/sessions/:id`
- **Body (JSON):**
- Response (JSON):
  ```json
  {
    "message": "Session id: 6649b0735c50f1c692e3d980 is deleted."
  }
  ```
![Delete a Session](./images/image-4.png)

## Running the Application

Follow these steps to run the application:

- Install dependencies:
```bash
npm install
```
- Set up environment variables:
Create a .env file in the root directory and specify the following variables:
```
PORT=3000
MONGODB_URI=<mongodb_uri>
```

- Start the server:
```bash
npm start
```
The server will start running on the specified port (default: 3000) and connect to the MongoDB database.

