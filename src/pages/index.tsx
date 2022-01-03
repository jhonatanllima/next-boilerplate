import { SEO } from 'components';

import * as S from '~/styles/pages/index.styles';

export default function Home() {
  return (
    <S.Container>
      <SEO
        title="FAÇO FESTA!"
        description="Faço Festa é criado e pensado para democratizar a forma de fazer festa! Feito para estudo e possivelmente pode se tornar uma startup"
      />

      <S.Wrapper>
        <h1>Olá Mundo!</h1>
      </S.Wrapper>
    </S.Container>
  );
}
