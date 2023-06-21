// import { expect, test } from '@jest/globals';
// import '@testing-library/jest-dom/extend-expect'; /
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';

// const request = require('supertest');
// const app = require('./app'); // Assuming this is the file where the routes are defined


// describe('GET /api/books', () => {
//     test('should respond with all books if available', async () => {
//       const response = await request(app).get('/api/books');
//       expect(response.statusCode).toBe(200);
//       expect(response.body.success).toBe(true);
//       // Add more assertions to test the response data
//     });
  
//     test('should respond with "No books found" if no books are available', async () => {
//       // Mock the getBooks function to return an empty result
//       jest.mock('./helper.js', () => ({
//         getBooks: jest.fn().mockResolvedValue({ rows: [] }),
//       }));
  
//       const response = await request(app).get('/api/books');
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toBe('No books found');
//     });
  
//     test('should respond with an error if an exception occurs', async () => {
//       // Mock the getBooks function to throw an error
//       jest.mock('./helper.js', () => ({
//         getBooks: jest.fn().mockRejectedValue(new Error('Test error')),
//       }));
  
//       const response = await request(app).get('/api/books');
//       expect(response.statusCode).toBe(500);
//       expect(response.body.success).toBe(false);
//       expect(response.body.error).toBe('Internal server error');
//     });
//   });
  