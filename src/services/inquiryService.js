// Inquiry submission boundary.
//
// No backend or email service is connected yet, so this never reports success.
// To go live, replace the body of `submitInquiry` with a real request
// (e.g. POST multipart/form-data to your API or a form service) and return
// { ok: true } only when the server confirms receipt.

export const INQUIRY_ENDPOINT = null;

/**
 * @param {FormData} formData  includes text fields and the optional `attachment` file
 * @returns {Promise<{ ok: boolean, reason?: 'NOT_CONNECTED' | 'NETWORK_ERROR' }>}
 */
export async function submitInquiry(formData) {
  if (!INQUIRY_ENDPOINT) {
    return { ok: false, reason: 'NOT_CONNECTED' };
  }

  try {
    const res = await fetch(INQUIRY_ENDPOINT, { method: 'POST', body: formData });
    return res.ok ? { ok: true } : { ok: false, reason: 'NETWORK_ERROR' };
  } catch {
    return { ok: false, reason: 'NETWORK_ERROR' };
  }
}
