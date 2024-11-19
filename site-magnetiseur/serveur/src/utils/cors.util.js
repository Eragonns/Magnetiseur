const allowedOrigins = [
  "https://magnetiseur-pniipx0mk-lecomtes-projects.vercel.app",
  "http://localhost:5173"
];

const corsOptionsDelegate = (origin, callback) => {
  if (!origin || allowedOrigins.includes(origin)) {
    callback(null, true);
  } else {
    callback(new Error("Non autorisé par CORS"));
  }
};

export { allowedOrigins, corsOptionsDelegate };
