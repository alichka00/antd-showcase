import { Buttons } from "components/Buttons";
import { Grid } from "components/Grid";
import { Icons } from "components/Icons";
import { _Table } from "components/Table";
import * as S from "./styles";
import { _Form } from "components/Form";
import { _Cascader } from "components/Cascader";

export const Home = () => {
  return (
    <S.Container>
      <S.Title>Buttons</S.Title>
      <Buttons />
      <S.Title>Icons</S.Title>
      <Icons />
      <S.Title>Grid</S.Title>
      <Grid />
      <S.Title>Cascader</S.Title>
      <_Cascader />
      <S.Title>Form</S.Title>
      <_Form />
      <S.Title>Table</S.Title>
      <_Table />
    </S.Container>
  );
};
