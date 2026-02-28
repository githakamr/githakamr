'use client';

import { useAsideContext } from '@library/hooks';
import { AsideStyles } from '@styles/layout';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Aside({ children }: Props) {
  const { pullTrigger } = useAsideContext();

  return (
    <div className={AsideStyles.Shell}>
      <aside className={AsideStyles.Aside}>
        <div className={AsideStyles.Header}>
          <div></div>
          <div onClick={pullTrigger}>
            <p>Trigger</p>
          </div>
        </div>
        <div className={AsideStyles.Main}>
          <div className={AsideStyles.AsideContent}>{children}</div>
          <div className={AsideStyles.Footer}></div>
        </div>
      </aside>
      <div
        className={AsideStyles.AsideOverlay}
        onClick={pullTrigger}
      ></div>
    </div>
  );
}
