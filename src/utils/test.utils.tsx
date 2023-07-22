import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store';

const store = setupStore();

export function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}
