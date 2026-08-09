import { Webhooks } from "graxon";
async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const webhooks = new Webhooks.WebhookClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const orgId = "acmecorp";
  const project_id = "4e242473-55eb-4882-b9a7-0c1f61b4e216";

  const create_response = await webhooks.create(orgId, project_id, {
    org_id: orgId,
    project_id: project_id,
    name: "test",
    url: "http://localhost:8080/webhooks/graxon",
    token: "xxxxxxxxxxxxxxxxxxx",
  });

  console.log("\ncreate_response", create_response);

  const get_response = await webhooks.get(
    orgId,
    project_id,
    create_response.id,
  );
  console.log("\nget_response", get_response);

  const list_response = await webhooks.list(orgId, project_id);
  console.log("\nlist_response", list_response);

  //   const delete_response = await webhooks.delete(
  //     orgId,
  //     project_id,
  //     create_response.id,
  //   );
  //   console.log("\ndelete_response", delete_response);
}

main();
