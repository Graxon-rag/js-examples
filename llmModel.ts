import { LlmModels } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const llmModels = new LlmModels.LLMModelClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await llmModels.create(orgId, {
    org_id: orgId,
    name: "OpenAI Test Model",
    model_name: "text-davinci-003",
    model_id: "text-davinci-003",
    provider: LlmModels.LLMModelProvider.OPENAI,
    description: "OpenAI Test Model",
  });

  console.log("\ncreate_response", create_response);

  const multiple_create_response = await llmModels.createMultiple(orgId, [
    {
      org_id: orgId,
      name: "DEEPSEEKTest Model",
      model_name: "DEEPSEEK Chat",
      model_id: "deepseek-chat",
      provider: LlmModels.LLMModelProvider.DEEPSEEK,
      description: "DEEPSEEK Test Model",
    },
    {
      org_id: orgId,
      name: "GEMINI Test Model",
      model_name: "gemini 2.5 pro",
      model_id: "gemini-2.5-pro",
      provider: LlmModels.LLMModelProvider.GEMINI,
      description: "GEMINI Test Model",
    },
  ]);

  console.log("\nmultiple_create_response", multiple_create_response);

  const get_response = await llmModels.get(orgId, create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await llmModels.listByProvider(
    orgId,
    LlmModels.LLMModelProvider.OPENAI,
  );
  console.log("\nlist_response", list_response);

  const delete_response = await llmModels.delete(orgId, create_response.id);
  console.log("\ndelete_response", delete_response);
}

main();
