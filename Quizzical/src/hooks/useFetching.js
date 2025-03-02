import { useState } from "react";

export const useFetching = callback => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(
        "** Not found. Please try to change settings or comeback later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error, setError];
};
