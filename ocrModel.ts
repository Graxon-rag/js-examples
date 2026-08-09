import { OcrModels } from "graxon";

async function main() {
  const baseUrl = "http://localhost:8888";
  const apiKey = "graxon-api-key";
  const timeout = 120000;

  const orgId = "acmecorp";

  const ocrModels = new OcrModels.OCRModelClient({
    baseUrl: baseUrl,
    apiKey: apiKey,
    timeout: timeout,
  });

  const create_response = await ocrModels.create(orgId, {
    org_id: orgId,
    name: "Datalab Test Model",
    provider: OcrModels.OCRModelProvider.DATALAB,
    model_name: "Datalab OCR",
    model_id: "datalab-ocr",
    description: "Datalab OCR Test Model",
  });

  console.log("\ncreate_response", create_response);

  const multiple_create_response = await ocrModels.createMultiple(orgId, [
    {
      org_id: orgId,
      name: "Mistral OCR Test Model",
      provider: OcrModels.OCRModelProvider.MISTRAL,
      model_name: "Mistral OCR",
      model_id: "mistral-ocr-latest",
      description: "Mistral OCR Test Model",
    },
    {
      org_id: orgId,
      name: "LlamaParse Test Model",
      provider: OcrModels.OCRModelProvider.LLAMAPARSE,
      model_name: "LlamaParse",
      model_id: "llamaparse",
      description: "LlamaParse OCR Test Model",
    },
  ]);

  console.log("\nmultiple_create_response", multiple_create_response);

  const get_response = await ocrModels.get(orgId, create_response.id);
  console.log("\nget_response", get_response);

  const list_response = await ocrModels.listByProvider(
    orgId,
    OcrModels.OCRModelProvider.DATALAB,
  );
  console.log("\nlist_response", list_response);

  const delete_response = await ocrModels.delete(orgId, create_response.id);
  console.log("\ndelete_response", delete_response);
}
main();
