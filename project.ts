import { Projects, ProjectConfigs } from "graxon";
async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const projects = new Projects.ProjectClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const llm_model_id = "88443744-69ec-4edc-b871-bd1ff2660727";
  const llm_model_credential_id = "ce7287fe-259a-4d60-8285-570cbdb23bf1";

  const embedding_model_id = "deb8c174-d69a-48dc-9bb3-f47b9158cb5b";
  const embedding_model_credential_id = "58663c55-48e6-4325-8f20-e550e13aa15b";

  const sparse_model_id = "793bd3e9-bbd9-44ee-b32c-b978197a46d6";
  const sparse_model_credential_id = null; // not needed for local model

  const reranker_model_id = "9457b729-8ca1-4846-9f67-3c38cd3f9fa4";
  const reranker_model_credential_id = "48442ab7-8dbf-4566-9671-36ecb5132433";

  const ocr_model_id = "b8cd56e6-64fe-4ebb-a213-3757b6bab4df";
  const ocr_model_credential_id = "83e6e278-d481-488a-a617-487b35129dd8";

  const audio_model_id = "255feead-f73e-4e98-aba6-55771c76ca48";
  const audio_model_credential_id = "1d43a606-5757-4427-97d6-30e7ab171293";

  const video_model_id = "198cf249-d517-4ebb-adbf-8095eeb1b736";
  const video_model_credential_id = "37110741-a709-4790-996e-c83d58c4936a";

  const config: ProjectConfigs.ProjectConfigCreateParams = {
    graph_db_enable: true,
    sparse_embedding_enable: true,
    reranker_enable: true,
    llm_tag_extraction_enable: true,

    //models
    llm_model_id: llm_model_id,
    llm_model_credential_id: llm_model_credential_id,
    embedding_model_id: embedding_model_id,
    embedding_model_credential_id: embedding_model_credential_id,
    sparse_text_model_id: sparse_model_id,
    reranker_model_id: reranker_model_id,
    reranker_model_credential_id: reranker_model_credential_id,
    ocr_model_id: ocr_model_id,
    ocr_model_credential_id: ocr_model_credential_id,
    audio_model_id: audio_model_id,
    audio_model_credential_id: audio_model_credential_id,
    video_model_id: video_model_id,
    video_model_credential_id: video_model_credential_id,
  };

  const request: Projects.ProjectCreateParams = {
    org_id: orgId,
    name: "My Project",
    description: "My Project",
    config: config,
  };

  const create_response = await projects.create(orgId, request);

  console.log("\ncreate_response", create_response);

  const get_response = await projects.get(orgId, create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await projects.list(orgId);
  console.log("\nlist_response", list_response);

  //   const delete_response = await projects.delete(orgId, create_response.id);
  //   console.log("\ndelete_response", delete_response);
}

main();
