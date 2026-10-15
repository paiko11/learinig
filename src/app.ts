import { FastAPI } from 'fastapi';

const app = new FastAPI();

/**
 * @openapi
 * /items:
 * get:
 * summary: Retrieve a list of items
 * description: Fetches a list of available items from the database.
 * responses:
 * 200:
 * description: Successful response with item list.
 */
app.get('/items', () => {
  return { items: ['item1', 'item2'] };
});

export { app };