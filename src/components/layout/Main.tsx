import { MainStyles } from '@styles/layout';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  type: 'page' | 'dashboard';
}

const typeStyles = {
  page: MainStyles.Page,
  dashboard: MainStyles.Dashboard,
};

export default function Main({ children, type }: Props) {
  return (
    <main className={`${MainStyles.Main} ${typeStyles[type]}`}>{children}</main>
  );
}
