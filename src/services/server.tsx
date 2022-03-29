import { createServer, Model } from "miragejs";

export const api = createServer({
  models: {
    user: Model,
    lead: Model,
    board: Model,
  },

  routes() {
    this.get("/api/users", (schema) => {
      return schema.users.all();
    });

    this.post("/api/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.users.create(attrs);
    });

    this.get("/api/boards", (schema) => {
      return [
        {
          title: "Cliente em Potencial",
          status: 0,
        },
        {
          title: "Dados Confirmados",
          status: 1,
        },
        {
          title: "Reunião Agendada",
          status: 2,
        },
      ];
    });

    this.get("/api/leads/", (schema) => {
      return schema.leads.all();
    });

    this.get("/api/leads/:status", (schema, request) => {
      let status = request.params.status;

      return schema.leads.where({ status: status });
    });

    this.patch("/api/leads/:id", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      let id = request.params.id;

      let lead = schema.leads.find(id);
      lead.update("status", attrs.status);

      return lead;
    });

    this.post("/api/leads", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.status = 0;
      return schema.leads.create(attrs);
    });

    this.namespace = "";
    this.passthrough();
  },

  seeds(server) {
    server.create("lead", {
      status: 1,
      name: "Org. Internacionais",
      phone: "(00)0000-0000",
      email: "exemplo@email.com",
      rpa: false,
      digitalproduct: false,
      analytics: false,
      bpm: false,
    });
    server.create("lead", {
      status: 1,
      name: "Ind. Farm. LTDA",
      phone: "(00)0000-0000",
      email: "exemplo@email.com",
      rpa: false,
      digitalproduct: false,
      analytics: false,
      bpm: false,
    });
    server.create("lead", {
      status: 2,
      name: "Sound Live Company",
      phone: "(00)0000-0000",
      email: "exemplo@email.com",
      rpa: false,
      digitalproduct: false,
      analytics: false,
      bpm: false,
    });
  },
});
