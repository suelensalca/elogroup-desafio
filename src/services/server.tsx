import { createServer } from 'miragejs'

export const api = createServer({
  routes() {
    this.get("/api/test", () => ({
        test: [
          { id: 1, name: "Inception", year: 2010 }
        ],
    }))
  },
})