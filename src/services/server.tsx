import { createServer, Model, Registry, Server } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import BoardModel from "../models/board.model";
import UserModel from "../models/user.model";
import LeadModel from "../models/lead.model";

const UserModel: ModelDefinition<UserModel> = Model.extend({});
const LeadModel: ModelDefinition<LeadModel> = Model.extend({});
const BoardModel: ModelDefinition<BoardModel> = Model.extend({});

type AppRegistry = Registry<
  {
    user: typeof UserModel;
    lead: typeof LeadModel;
    board: typeof BoardModel;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

export const api = createServer({
  models: {
    user: UserModel,
    lead: LeadModel,
    board: BoardModel,
  },

  routes() {
    this.get("/api/users", (schema: AppSchema) => {
      return schema.all("user");
    });

    this.post("/api/users", (schema: AppSchema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.create("user", attrs);
    });

    this.get("/api/boards", (schema: AppSchema) => {
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

    this.get("/api/leads/", (schema: AppSchema) => {
      return schema.all("lead");
    });

    this.get("/api/leads/:status", (schema: AppSchema, request) => {
      let status = Number(request.params.status);

      return schema.where("lead", { status: status });
    });

    this.patch("/api/leads/:id", (schema: AppSchema, request) => {
      let attrs = JSON.parse(request.requestBody);
      let id = request.params.id;

      let lead = schema.find("lead", id);
      lead?.update("status", attrs.status);

      return lead;
    });

    this.post("/api/leads", (schema: AppSchema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.status = 0;
      return schema.create("lead", attrs);
    });

    this.namespace = "";
    this.passthrough();
  },

  seeds(server: Server<AppRegistry>) {
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
