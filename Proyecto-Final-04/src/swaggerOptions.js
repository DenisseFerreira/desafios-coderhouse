export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proyecto Final",
      version: "1.0.0",
      description: "A simple express library API",
    },
    servers: [
      {
        url: "http://localhost:8080"
      }
    ],
  },
  apis: ["./src/routes/docs.yaml"],
};
