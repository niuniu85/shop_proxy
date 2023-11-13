import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom'; // 导入 jest-dom 类型定义
import React from 'react';

test('renders welcome message', () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to My Next.js App!/i);
  expect(welcomeElement).toBeInTheDocument();
});
