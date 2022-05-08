import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Button>按钮</Button>', () => {
  it('render Button with dumi', () => {
    const { container } = render(<Button>按钮</Button>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
  });
});
