import { ModelProviders, ModelProvider } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const modelProviders = new ModelProviders.ModelProviderClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const list_response = await modelProviders.allModels();
  console.log("\nlist_response", list_response);

  const audio_response = await modelProviders.audioModels();
  console.log("\audio_response", audio_response);

  const embedding_response = await modelProviders.embeddingModels();
  console.log("\nembedding_response", embedding_response);

  const llm_response = await modelProviders.llmModels();
  console.log("\nllm_response", llm_response);

  const ocr_response = await modelProviders.ocrModels();
  console.log("\nocr_response", ocr_response);

  const reranker_response = await modelProviders.rerankerModels();
  console.log("\nreranker_response", reranker_response);

  const sparse_response = await modelProviders.sparseModels();
  console.log("\nsparse_response", sparse_response);

  const video_response = await modelProviders.videoModels();
  console.log("\nvideo_response", video_response);
}

main();
