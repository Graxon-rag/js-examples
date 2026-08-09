import { Documents } from "graxon";
async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";
  const projectId = "4e242473-55eb-4882-b9a7-0c1f61b4e216";

  const documents = new Documents.DocumentClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  //   const file_path = "./test_data/Test file 3.pdf";
  // const file_path = "./test_data/large.pdf";
  const file_path = "./test_data/youtube_podcast_video.mp4";

  const upload_response = await documents.upload(orgId, projectId, file_path);

  console.log("\nupload_response", upload_response);

  console.log("\n********************************\n");

  const get_response = await documents.get(
    orgId,
    projectId,
    upload_response.document_id,
  );
  console.log("\nget_response", get_response);

  console.log("\n********************************\n");

  const list_response = await documents.list(orgId, projectId);
  console.log("\nlist_response", list_response);

  console.log("\n********************************\n");

  //   const process_response = await documents.process(
  //     orgId,
  //     projectId,
  //     upload_response.document_id,
  //   );

  //   console.log("\nprocess_response", process_response);

  //   console.log("\n********************************\n");

  const signedUrl = await documents.getSignedUrl(
    orgId,
    projectId,
    get_response.bucket,
    get_response.key,
  );

  console.log("\nsignedUrl", signedUrl);

  console.log("\n********************************\n");

  const delete_response = await documents.delete(
    orgId,
    projectId,
    upload_response.document_id,
  );
  console.log("\ndelete_response", delete_response);
}

main();
