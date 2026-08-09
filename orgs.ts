import { Orgs } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgs = new Orgs.OrganizationClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await orgs.create({
    name: "Acme Corp",
    description: "A test organization",
  });

  console.log("\ncreate_response", create_response);

  const get_response = await orgs.get(create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await orgs.list();
  console.log("\nlist_response", list_response);

  const delete_response = await orgs.delete(create_response.id);
  console.log("\ndelete_response", delete_response);
}

main();
