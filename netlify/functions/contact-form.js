exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, restaurantName, serviceInterest } = data;

    // Basic validation
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing fields" })
      };
    }

    // Do something with the form data, e.g. store in DB, send email, etc.
    // For demonstration, we just return a success response:
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Form submitted successfully",
        submittedData: data
      })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server Error" })
    };
  }
};
