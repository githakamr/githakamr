import { ShellStyles } from '@styles/layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Shell({ children }: Props) {
  return <div className={ShellStyles.Shell}>{children}</div>;
}
