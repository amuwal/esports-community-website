import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";

import Event from "./db/models/Event.js";
import Team from "./db/models/Team.js";
import ContactMessage from "./db/models/ContactMessage.js";

AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  resources: [Event, Team, ContactMessage],
  rootPath: "/admin",
  branding: {
    companyName: "Your Company Name",
    logo: "/dse-logo.png",
  },
});

const router = AdminJSExpress.buildRouter(adminJs);

export default router;
