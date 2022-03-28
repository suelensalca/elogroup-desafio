import { createServer, Model } from "miragejs";

export const api = createServer({
  models: {
    user: Model,
    lead: Model,
  },

  routes() {
    this.get("/api/users", (schema) => {
      return schema.users.all();
    });

    this.post("/api/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.users.create(attrs);
    });

    this.get("/api/leads", () => [
      {
        title: "Cliente em Potencial",
        leads: [
          {
            id: 1,
            name: "Empresa 1",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: true,
            digitalproduct: true,
            analytics: true,
            bpm: true,
            status: 0,
          },
          {
            id: 2,
            name: "Empresa 2",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: false,
            digitalproduct: false,
            analytics: false,
            bpm: false,
            status: 0,
          },
          {
            id: 3,
            name: "Empresa 3",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: false,
            digitalproduct: false,
            analytics: false,
            bpm: false,
            status: 0,
          },
        ],
      },
      {
        title: "Dados Confirmados",
        leads: [
          {
            id: 4,
            name: "Empresa 4",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: true,
            digitalproduct: true,
            analytics: true,
            bpm: true,
            status: 1,
          },
          {
            id: 5,
            name: "Empresa 5",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: false,
            digitalproduct: false,
            analytics: false,
            bpm: false,
            status: 1,
          },
          {
            id: 6,
            name: "Empresa 6",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: false,
            digitalproduct: false,
            analytics: false,
            bpm: false,
            status: 1,
          },
        ],
      },
      {
        title: "Reunião Agendada",
        leads: [
          {
            id: 7,
            name: "Empresa 7",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: true,
            digitalproduct: true,
            analytics: true,
            bpm: true,
            status: 2,
          },
          {
            id: 8,
            name: "Empresa 8",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: false,
            digitalproduct: false,
            analytics: false,
            bpm: false,
            status: 2,
          },
          {
            id: 9,
            name: "Empresa 9",
            telefone: "(00)0000-0000",
            email: "exemplo@email.com",
            rpa: false,
            digitalproduct: false,
            analytics: false,
            bpm: false,
            status: 2,
          },
        ],
      },
    ]);

    this.namespace = "";
    this.passthrough();
  },
});
