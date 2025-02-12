import { VulcanDocument } from "@vulcanjs/schema";
import {
    CreateGraphqlModelOptionsServer,
    createGraphqlModelServer,
    VulcanGraphqlSchemaServer,
  } from "@vulcanjs/graphql/server";

import { createMongooseConnector } from "@vulcanjs/mongo";
import { Value } from "./value.server";


export interface OrgTypeServer extends VulcanDocument {
    name?: string;
    vision?: string;
    values?: string[];
    bonk?: string;
  }

  
  export const schema: VulcanGraphqlSchemaServer = {
    // _id, userId, and createdAT are basic field you may want to use in almost all schemas
    _id: {
      type: String,
      optional: true,
      canRead: ["guests"],
      canCreate: ["members"]
    },
    // userId is the _id of the owner of the document
    // Here, it guarantees that the user belongs to group "owners" for his own data
    userId: {
      type: String,
      optional: true,
      canRead: ["guests"],
      canCreate: ["guests","members"]

    },

    //This name will be the value's graph field in uservotes.
    name: {
        type: String,
        optional: true,
        canRead: ["guests"],
        canCreate: ["guests","members"]
    },


    createdAt: {
      type: Date,
      optional: true,
      canRead: ["admins"],
      onCreate: () => {
        return new Date();
      },
      canCreate: ["members"]

    },

    vision: {
      type: String,
      optional: true,
      canRead: ["guests"],
      canCreate: ["guests","members"]
  
    },

    valuesList: {
      type: Array,
      arrayItem: {
        type: String,
        optional: true,
        canRead: ["guests"],
        canCreate: ["guests","members"],
        canUpdate: ["guests", "members"]
      },
      relation: {
        fieldName: "values",
        kind: "hasMany",
        model: Value,
        typeName: "[Value]",
      },
      optional: true,
      canRead: ["guests"],
      canCreate: ["guests","members"],
      canUpdate: ["guests", "members"]
    },

   
  };

  export const modelDef: CreateGraphqlModelOptionsServer = {
    name: "Org",
    graphql: {
      typeName: "Org",
      multiTypeName: "Orgs",
    },
    schema,
    permissions: {
      canCreate: ["guests","members","owners", "admins"], 
      canUpdate: ["owners", "admins", "guests"],
      canDelete: ["owners", "admins"],
      canRead: ["guests","members", "admins"],
    },
  };

  export const Org = createGraphqlModelServer(modelDef);

  export const OrgConnector = createMongooseConnector<OrgTypeServer>(Org);