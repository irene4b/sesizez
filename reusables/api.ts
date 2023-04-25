import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface QueueItem {
  resolve: () => void;
}

// Helper function to limit requests
const createRateLimiter = (interval: number): (() => Promise<void>) => {
  let lastRequestTime: number | null = null;
  const queue: QueueItem[] = [];

  const processQueue = () => {
    if (queue.length === 0) return;

    const now = Date.now();
    const timeSinceLastRequest = now - (lastRequestTime || 0);

    if (timeSinceLastRequest >= interval) {
      const { resolve } = queue.shift() as QueueItem;
      lastRequestTime = now;
      resolve();
    }

    setTimeout(processQueue, interval - timeSinceLastRequest);
  };

  return () =>
    new Promise(resolve => {
      queue.push({ resolve });
      processQueue();
    });
};

const requestRateLimiter = createRateLimiter(1000); // Limit requests to 1 per 1000 ms (1 second)

const api: AxiosInstance = axios.create();

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  await requestRateLimiter(); // Wait for the rate limiter before sending the request

  config.headers = {
    ...config.headers,
    Referer: 'https://sesizez.app',
  };

  return config;
});

export default api;
