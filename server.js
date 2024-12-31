import Fastify from "fastify";
import userRouter from "./user.js";

const fastify = new Fastify({
  logger: true,
});

//get request
fastify.get("/", (request, reply) => {
  return {
    message: "Welcome to auth service",
  };
});

// Register user router
fastify.register(userRouter);

const start = async () => {
  const PORT = process.env.PORT || 4000;
  try {
    await fastify.listen({ port: PORT });
    console.log(`Server listening on port ${PORT} `);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
