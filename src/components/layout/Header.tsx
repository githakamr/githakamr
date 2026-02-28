import { HeaderStyles } from '@styles/layout';
import { ReactNode } from 'react';

interface Props {
  type: 'page' | 'dashboard';
  children?: ReactNode;
}

const typeStyles = {
  page: HeaderStyles.Page,
  dashboard: HeaderStyles.Dashboard,
};

export default function Header({ type, children }: Props) {
  return (
    <header className={`${HeaderStyles.Header} ${typeStyles[type]}`}>
      {children}
    </header>
  );
}
