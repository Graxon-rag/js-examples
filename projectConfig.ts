import { ProjectConfigs } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";
  const project_id = "4e242473-55eb-4882-b9a7-0c1f61b4e216";
  const config_id = "de49eef3-8fb0-4c21-a3f0-8fd1ed98ac34";

  const projectConfigs = new ProjectConfigs.ProjectConfigClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const get_response = await projectConfigs.get(orgId, project_id, config_id);
  console.log("\nget_response", get_response);

  const updated_llm_model_id = "7ed7a88a-f59c-4f3a-a00e-072b41c62fe4";
  const updated_llm_model_credential_id =
    "58663c55-48e6-4325-8f20-e550e13aa15b";

  const update_response = await projectConfigs.update(
    orgId,
    project_id,
    config_id,
    {
      llm_model_id: updated_llm_model_id,
      llm_model_credential_id: updated_llm_model_credential_id,
      // more .....
    },
  );
  console.log("\nupdate_response", update_response);
}

main();
