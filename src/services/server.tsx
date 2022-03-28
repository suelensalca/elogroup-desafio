import { createServer, Model } from "miragejs";

export const api = createServer({
  models: {
    user: Model,
  },

  routes() {
    this.get("/api/users", (schema) => {
      return schema.users.all();
    });

    this.post("/api/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.users.create(attrs);
    });

    this.namespace = "";
    this.passthrough();
  },
});
