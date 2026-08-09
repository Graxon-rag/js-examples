import { SparseModels } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const sparseModels = new SparseModels.SparseModelClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await sparseModels.create(orgId, {
    org_id: orgId,
    name: "Pinecone Sparse Test Model",
    provider_type: SparseModels.SparseModelProviderType.CLOUD,
    provider: SparseModels.SparseModelProvider.PINECONE,
    model_name: "Pinecone Sparse English",
    model_id: "pinecone-sparse-english-v0",
    description: "Pinecone Sparse Text Test Model",
    size_in_gb: 0.0,
  });

  console.log("\ncreate_response", create_response);

  const multiple_create_response = await sparseModels.createMultiple(orgId, [
    {
      org_id: orgId,
      name: "Qdrant Sparse Test Model",
      provider_type: SparseModels.SparseModelProviderType.CLOUD,
      provider: SparseModels.SparseModelProvider.QDRANT,
      model_name: "Qdrant Sparse",
      model_id: "qdrant-sparse",
      description: "Qdrant Sparse Text Test Model",
      size_in_gb: 0.0,
    },
    {
      org_id: orgId,
      name: "Prithvida Sparse Test Model",
      provider_type: SparseModels.SparseModelProviderType.LOCAL,
      provider: SparseModels.SparseModelProvider.PRITHVIDA,
      model_name: "Prithvida Sparse",
      model_id: "prithvida-sparse",
      description: "Prithvida Local Sparse Text Test Model",
      size_in_gb: 0.5,
    },
  ]);

  console.log("\nmultiple_create_response", multiple_create_response);

  const list_response = await sparseModels.list(orgId);

  console.log("\nlist_response", list_response);

  const get_response = await sparseModels.get(orgId, create_response.id);

  console.log("\nget_response", get_response);

  const delete_response = await sparseModels.delete(orgId, create_response.id);

  console.log("\ndelete_response", delete_response);
}

main();
