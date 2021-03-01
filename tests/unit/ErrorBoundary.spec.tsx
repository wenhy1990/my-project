import { render } from '@testing-library/react';
import React from 'react';
import ErrorBoundary from '../../src/web/components/ErrorBoundary';
describe('全局公用库组件', () => {
  it('ErrorBoundary组件 子组件发生错误返回fallback', () => {
    const InvalidComponent = () => {
      throw new Error('错啦');
    };
    const PageErrorFallback = () => <h1>test error</h1>;
    const screen = render(
      <ErrorBoundary fallbackRender={PageErrorFallback}>
        <InvalidComponent />
      </ErrorBoundary>
    );
    expect(screen.getByText('test error')).toBeDefined();
  });
});
