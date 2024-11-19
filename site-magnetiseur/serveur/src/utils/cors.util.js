const allowedOrigins = [
  "https://magnetiseur-9h887359n-lecomtes-projects.vercel.app",
  "*"
];

const corsOptionsDelegate = (origin, callback) => {
  if (!origin || allowedOrigins.includes(origin)) {
    callback(null, true);
  } else {
    callback(new Error("Non autorisé par CORS"));
  }
};

export { allowedOrigins, corsOptionsDelegate };
