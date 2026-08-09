import { VideoModels } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const videoModels = new VideoModels.VideoModelClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await videoModels.create(orgId, {
    org_id: orgId,
    name: "TwelveLabs Test Model",
    provider: VideoModels.VideoModelProvider.TWELVELABS,
    model_name: "TwelveLabs Video Model",
    model_id: "twelvelabs-video",
    description: "TwelveLabs Video Test Model",
  });

  console.log("\ncreate_response", create_response);

  const multiple_create_response = await videoModels.createMultiple(orgId, [
    {
      org_id: orgId,
      name: "Gemini Video Test Model",
      provider: VideoModels.VideoModelProvider.GEMINI,
      model_name: "Gemini Video",
      model_id: "gemini-video",
      description: "Gemini Video Test Model",
    },
    {
      org_id: orgId,
      name: "TwelveLabs Test Model 2",
      provider: VideoModels.VideoModelProvider.TWELVELABS,
      model_name: "TwelveLabs Video Model 2",
      model_id: "twelvelabs-video-2",
      description: "TwelveLabs Video Test Model 2",
    },
  ]);

  console.log("\nmultiple_create_response", multiple_create_response);

  const list_response = await videoModels.listByProvider(
    orgId,
    VideoModels.VideoModelProvider.TWELVELABS,
  );

  console.log("\nlist_response", list_response);

  const get_response = await videoModels.get(orgId, create_response.id);

  console.log("\nget_response", get_response);

  const delete_response = await videoModels.delete(orgId, create_response.id);

  console.log("\ndelete_response", delete_response);
}

main();
