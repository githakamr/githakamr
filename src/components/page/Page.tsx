import { Container, Footer, Header, Main } from '@components/layout';
import { PageStyles } from '@styles/page';
import { ReactNode } from 'react';

interface Props {
  views?: ReactNode;
}

export default function Page({ views }: Props) {
  return (
    <div className={PageStyles.Page}>
      <Header type='page' />
      <Main type='page'>
        <Container>{views}</Container>
        <Footer />
      </Main>
    </div>
  );
}
