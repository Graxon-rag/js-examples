import { AudioModels } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const audioModel = new AudioModels.AudioModelClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await audioModel.create(orgId, {
    org_id: orgId,
    name: "Deepgram Test Model",
    model_name: "en-US_BroadbandModel Test Model",
    model_id: "en-US_BroadbandModel",
    provider: AudioModels.AudioModelProvider.DEEPGRAM,
    description: "Deepgram Test Model",
  });

  console.log("\ncreate_response", create_response);

  const multiple_create_response = await audioModel.createMultiple(orgId, [
    {
      org_id: orgId,
      name: "ELEVENLABS Test Model",
      model_name: "en-ELEVENLABS Test Model",
      model_id: "en-ELEVENLABS",
      provider: AudioModels.AudioModelProvider.ELEVENLABS,
      description: "ELEVENLABS Test Model",
    },
    {
      org_id: orgId,
      name: "ASSEMBLYAI Test Model",
      model_name: "en-ASSEMBLYAI Test Model",
      model_id: "en-ASSEMBLYAI",
      provider: AudioModels.AudioModelProvider.ASSEMBLYAI,
      description: "ASSEMBLYAI Test Model",
    },
  ]);

  console.log("\nmultiple_create_response", multiple_create_response);

  const get_response = await audioModel.get(orgId, create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await audioModel.listByProvider(
    orgId,
    AudioModels.AudioModelProvider.DEEPGRAM,
  );
  console.log("\nlist_response", list_response);

  const delete_response = await audioModel.delete(orgId, create_response.id);
  console.log("\ndelete_response", delete_response);
}

main();
