import { put } from "@vercel/blob";

export interface UploadFileResult {
  url: string;
  pathname: string;
  contentType: string;
}

/**
 * Uploads an admission file or institutional document to Vercel Blob storage.
 * Gracefully handles missing BLOB_READ_WRITE_TOKEN during offline/mock development.
 */
export async function uploadDocumentToBlob(
  file: File | Blob,
  pathname: string,
): Promise<UploadFileResult> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    // Development fallback mock when token is not yet provisioned in dashboard
    return {
      url: `/mock-storage/${pathname}`,
      pathname,
      contentType: file.type || "application/octet-stream",
    };
  }

  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return {
    url: blob.url,
    pathname: blob.pathname,
    contentType: blob.contentType,
  };
}
