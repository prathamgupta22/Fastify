async function userRouter(fastify, opts) {
  fastify.post("/api/users", (request, reply) => {
    return {
      message: "User creates!!",
    };
  });
}

export default userRouter;
