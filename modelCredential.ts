import { ModelCredentials, ModelProvider } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const modelCredentials = new ModelCredentials.ModelCredentialClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await modelCredentials.create(orgId, {
    org_id: orgId,
    name: "Deepseek Api Key",
    description: "Deepseek Api Key",
    provider: ModelProvider.DEEPSEEK,
    api_key: "deepseek_api_key",
  });

  console.log("\ncreate_response", create_response);

  const get_response = await modelCredentials.get(orgId, create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await modelCredentials.listByProvider(
    orgId,
    ModelProvider.DEEPSEEK,
  );
  console.log("\nlist_response", list_response);

  const delete_response = await modelCredentials.delete(
    orgId,
    create_response.id,
  );
  console.log("\ndelete_response", delete_response);
}

main();
