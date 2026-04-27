# Portfolio Contact API

This server stores contact form submissions in MongoDB and sends you an email when someone submits the form.

## Setup

1. **Install dependencies**
   ```bash
   cd server && npm install
   ```

2. **Environment variables**  
   Copy `.env.example` to `.env` and fill in:

   - `MONGO_URI` – MongoDB connection string (e.g. `mongodb://localhost:27017/portfolio` or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) URI).
   - `YOUR_EMAIL` – Email where you want to receive messages (e.g. `ompjamun@gmail.com`).
   - `EMAIL_USER` – Gmail address used to send emails.
   - `EMAIL_PASS` – [App password](https://support.google.com/accounts/answer/185833) for that Gmail account (not your normal password).

   If `MONGO_URI` is missing, the server will still run but won’t save to the database. If `EMAIL_USER` / `EMAIL_PASS` are missing, it won’t send email but will still respond with success (and save to DB if MongoDB is set).

3. **Run the server**
   ```bash
   npm start
   ```
   Server runs on `http://localhost:5000`.

## Running with the React app

- Start the server: `cd server && npm start`
- Start the React app from the project root: `npm start`  
The React app is configured to proxy `/api/*` to the server, so the contact form will work in development.

## Production

- Deploy the server (e.g. Render, Railway, Heroku) and set the env vars there.
- Set `REACT_APP_API_URL` in the React app to your deployed API URL (e.g. `https://your-api.onrender.com`) so the contact form points to the live server.
