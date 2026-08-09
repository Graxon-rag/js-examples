import { RerankerModels } from "graxon";
async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const rerankerModels = new RerankerModels.RerankerModelClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await rerankerModels.create(orgId, {
    org_id: orgId,
    name: "Jina Reranker Test Model",
    provider_type: RerankerModels.RerankerModelProviderType.CLOUD,
    provider: RerankerModels.RerankerModelProvider.JINA,
    model_name: "Jina Reranker v2",
    model_id: "jina-reranker-v2",
    description: "Jina Reranker Test Model",
    size_in_gb: 0.0,
  });

  console.log("\ncreate_response", create_response);

  const multiple_create_response = await rerankerModels.createMultiple(orgId, [
    {
      org_id: orgId,
      name: "Cohere Reranker Test Model",
      provider_type: RerankerModels.RerankerModelProviderType.CLOUD,
      provider: RerankerModels.RerankerModelProvider.COHERE,
      model_name: "Cohere Rerank",
      model_id: "rerank-v3.5",
      description: "Cohere Reranker Test Model",
      size_in_gb: 0.0,
    },
    {
      org_id: orgId,
      name: "Xenova Reranker Test Model",
      provider_type: RerankerModels.RerankerModelProviderType.LOCAL,
      provider: RerankerModels.RerankerModelProvider.XENOVA,
      model_name: "Xenova Reranker",
      model_id: "Xenova/ms-marco-MiniLM-L-6-v2",
      description: "Xenova Local Reranker Test Model",
      size_in_gb: 0.1,
    },
  ]);

  console.log("\nmultiple_create_response", multiple_create_response);

  const get_response = await rerankerModels.get(orgId, create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await rerankerModels.list(orgId);
  console.log("\nlist_response", list_response);

  const delete_response = await rerankerModels.delete(
    orgId,
    create_response.id,
  );
  console.log("\ndelete_response", delete_response);
}

main();
