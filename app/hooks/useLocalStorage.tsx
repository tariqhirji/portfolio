"use client";
import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } else {
        null;
      }
    } catch (e) {
      console.log(e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const updatedValue =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;
      if (typeof window !== undefined) {
        window.localStorage.setItem(key, JSON.stringify(updatedValue));
      } else {
        null;
      }
    } catch (e) {
      console.log(e);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
