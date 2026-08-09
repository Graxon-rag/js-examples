import { EmbeddingModels } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const embeddingModels = new EmbeddingModels.EmbeddingModelClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await embeddingModels.create(orgId, {
    org_id: orgId,
    name: "OpenAI Test Model",
    model_name: "text-embedding-ada-002",
    model_id: "text-embedding-ada-002",
    provider: EmbeddingModels.EmbeddingModelProvider.OPENAI,
    dimension: 1536,
    description: "OpenAI Test Model",
  });

  console.log("\ncreate_response", create_response);

  const multiple_create_response = await embeddingModels.createMultiple(orgId, [
    {
      org_id: orgId,
      name: "GEMINI Test Model",
      model_name: "text-embedding-001 Model",
      model_id: "text-embedding-001",
      provider: EmbeddingModels.EmbeddingModelProvider.GEMINI,
      dimension: 1536,
      description: "GEMINI Test Model",
    },
    {
      org_id: orgId,
      name: "VOYAGE Test Model",
      model_name: "embedding VOYAGE",
      model_id: "voyage-4-large",
      provider: EmbeddingModels.EmbeddingModelProvider.VOYAGE,
      dimension: 1536,
      description: "VOYAGE Test Model",
    },
  ]);

  console.log("\nmultiple_create_response", multiple_create_response);

  const get_response = await embeddingModels.get(orgId, create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await embeddingModels.listByProvider(
    orgId,
    EmbeddingModels.EmbeddingModelProvider.GEMINI,
  );
  console.log("\nlist_response", list_response);

  const delete_response = await embeddingModels.delete(
    orgId,
    create_response.id,
  );
  console.log("\ndelete_response", delete_response);
}
main();
