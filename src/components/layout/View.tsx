import { ViewStyles } from '@styles/layout';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  id?: string;
}

export default function View({ children, id = 'view' }: Props) {
  return (
    <section
      id={id}
      className={ViewStyles.View}
    >
      {children}
    </section>
  );
}
