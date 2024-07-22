import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import db from "./models/index.js";
import jwt from "jsonwebtoken";
import uploadsA from "./config/multerconfig.js";
import path from "path";

const startServer = async () => {
  const app = express();

  const autMidleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      try {
        const user = jwt.verify(token, "asdasdsadaswqqeq21");
        req.user = user;
      } catch (error) {
        console.log("invalid token", error);
      }
    }
    next();
  };

  app.use(autMidleware);
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,  // Habilita el playground de Apollo
    context: ({ req }) => {
      // const token = req.headers.authorization || '';
      // return {token}
      const user = req.user || null;
      return { user, db };
    },
  });
  //endpoint para la subida de imagene

  app.post("/upload", uploadsA.single("imagePrincipal"), (req, res) => {
    console.log(req.file);
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    res.send({ imageUrl: `/${req.file.filename}` });
  });
  app.get("/uploads/:filename", (req, res) => {
    const filename = req.params.filename;
    const imagePaths = path.resolve(__dirname, "../uploads", filename);
    //const imagePath = path.join(__dirname, 'uploads', filename);
    res.sendFile(imagePaths);
  });
  // Ruta raíz opcional para verificar el estado del servidor
  app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
  });

  await server.start();
  server.applyMiddleware({ app });

  app.use(express.json());

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(
      `GraphQL endpoint at http://localhost:${PORT}${server.graphqlPath}`
    );
  });

  try {
    await db.sequelize.authenticate();
    console.log("Database connected...");
    // await db.sequelize.sync(); // Sincroniza los modelos con la base de datos
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
