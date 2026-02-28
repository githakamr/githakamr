'use client';

import {
  Aside,
  Container,
  Footer,
  Header,
  Main,
  Shell,
} from '@components/layout';
import { useAsideContext } from '@library/hooks';
import { DashboardStyles } from '@styles/page';
import { ReactNode } from 'react';

interface Props {
  views?: ReactNode;
}

export default function Dashboard({ views }: Props) {
  const { trigger: asideTrigger, pullTrigger: pullAsideTrigger } =
    useAsideContext();

  return (
    <div className={DashboardStyles.Dashboard}>
      {!asideTrigger && <Aside />}
      <Shell>
        <Header type={asideTrigger ? 'page' : 'dashboard'}>
          {asideTrigger && (
            <div onClick={pullAsideTrigger}>
              <p>Trigger</p>
            </div>
          )}
        </Header>
        <Main type={asideTrigger ? 'page' : 'dashboard'}>
          <Container>{views}</Container>
          <Footer />
        </Main>
      </Shell>
    </div>
  );
}
