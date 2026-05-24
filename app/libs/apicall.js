const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function handleError(method, url, status, message) {
  return {
    success: false,
    message: `${method.toUpperCase()} ${url} failed - ${status}: ${message}`,
  };
}

async function apiPost(url, data = {}) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ missing headers
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });

    const resData = await response.json();

    if (!response.ok) {
      return handleError("POST", url, response.status, resData.message || "Unknown error");
    }

    return { success: true, data: resData };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export { apiPost };
