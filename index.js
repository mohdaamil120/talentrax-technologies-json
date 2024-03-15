const jsonserver=require("json-server");
const server=jsonserver.create()
const router=jsonserver.router("db.json")
const middlwares=jsonserver.defaults();
server.use(middlwares);
server.use(router)
server.listen(8080)