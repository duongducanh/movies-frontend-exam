// Generic error data format
interface GenericErrorData {
  status_message?: string;
  message?: string;
  [key: string]: unknown;
}

// Axios error type
interface AxiosError {
  response?: {
    data?: GenericErrorData;
  };
  message?: string;
}

// Function to extract error message from API response
export const getErrorMessage = (error: unknown): string => {
  // Check if it's an Axios error with response
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as AxiosError;

    // Check if the response has the expected error format
    if (axiosError.response?.data) {
      const errorData = axiosError.response.data as GenericErrorData;

      // If it has the expected format, return the status_message
      if (errorData.status_message) {
        return errorData.status_message;
      }

      // Fallback to any error message in the response
      if (typeof errorData === 'string') {
        return errorData;
      }

      if (errorData.message) {
        return errorData.message;
      }
    }

    // If it's a network error or other axios error
    if (axiosError.message) {
      return axiosError.message;
    }
  }

  // Fallback for any other error types
  if (error instanceof Error) {
    return error.message;
  }

  // Final fallback
  return 'An unexpected error occurred. Please try again.';
};
