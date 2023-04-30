import { Col, Row, Divider } from "antd";
import * as S from "./styles";

export const Grid = () => {
  const style = {
    background: "#0092ff",
  };

  return (
    <>
      <S.SubTitle>Basic Grid</S.SubTitle>
      <S.Wrapper>
        <Row gutter={[, 8]}>
          <Col span={24}>
            <S.Col style={style}>Col</S.Col>
          </Col>
          <Col span={12}>
            <S.Col style={{ background: "#0070ff" }}>Col-12</S.Col>
          </Col>
          <Col span={12}>
            <S.Col style={style}>Col-12</S.Col>
          </Col>
          <Col span={8}>
            <S.Col style={style}>Col-8</S.Col>
          </Col>
          <Col span={8}>
            <S.Col style={{ background: "#0070ff" }}>Col-8</S.Col>
          </Col>
          <Col span={8}>
            <S.Col style={style}>Col-8</S.Col>
          </Col>
          <Col span={6}>
            <S.Col style={{ background: "#0070ff" }}>Col-6</S.Col>
          </Col>
          <Col span={6}>
            <S.Col style={style}>Col-6</S.Col>
          </Col>
          <Col span={6}>
            <S.Col style={{ background: "#0070ff" }}>Col-6</S.Col>
          </Col>
          <Col span={6}>
            <S.Col style={style}>Col-6</S.Col>
          </Col>
        </Row>
      </S.Wrapper>
      <S.SubTitle>Grid Gutter - is the space between rows</S.SubTitle>
      <S.Wrapper>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <S.Col style={style}>Col-12</S.Col>
          </Col>
          <Col span={12}>
            <S.Col style={style}>Col-12</S.Col>
          </Col>
          <Col span={8}>
            <S.Col style={style}>Col-8</S.Col>
          </Col>
          <Col span={8}>
            <S.Col style={style}>Col-8</S.Col>
          </Col>
          <Col span={8}>
            <S.Col style={style}>Col-8</S.Col>
          </Col>
        </Row>
      </S.Wrapper>
      <S.SubTitle>Column offset</S.SubTitle>
      <S.Wrapper>
        <Row>
          <Col span={6} offset={6}>
            <S.Col style={style}>Col-6 col-offset-6</S.Col>
          </Col>
          <Col span={6} offset={6}>
            <S.Col style={style}>Col-6 col-offset-6</S.Col>
          </Col>
        </Row>
      </S.Wrapper>
      <S.SubTitle>Grid sort</S.SubTitle>
      <S.Wrapper>
        <Row gutter={8}>
          <Col span={16} push={8}>
            <S.Col style={style}>Col-16 col-push-8</S.Col>
          </Col>
          <Col span={8} pull={16}>
            <S.Col style={style}>Col-8 col-pull-16</S.Col>
          </Col>
        </Row>
      </S.Wrapper>
      <S.SubTitle>Order</S.SubTitle>
      <S.Wrapper>
        <Row gutter={8}>
          <Col span={6} order={4}>
            <S.Col style={style}>4 col-order-4</S.Col>
          </Col>
          <Col span={6} order={3}>
            <S.Col style={style}>3 col-order-3</S.Col>
          </Col>
          <Col span={6} order={2}>
            <S.Col style={style}>2 col-order-2</S.Col>
          </Col>
          <Col span={6} order={1}>
            <S.Col style={style}>1 col-order-1</S.Col>
          </Col>
        </Row>
      </S.Wrapper>
      <S.SubTitle>Flex</S.SubTitle>
      <S.Wrapper>
        <Divider orientation="left">Fill rest</Divider>
        <Row>
          <Col flex="300px" style={style}>
            <S.Col>300px</S.Col>
          </Col>
          <Col flex="auto" style={{ background: "#0070ff" }}>
            <S.Col>Fill Rest</S.Col>
          </Col>
        </Row>
        <Divider orientation="left">Percentage columns</Divider>
        <Row>
          <Col flex={2} style={style}>
            <S.Col> 2 / 5</S.Col>
          </Col>
          <Col flex={3} style={{ background: "#0070ff" }}>
            <S.Col> 3 / 5</S.Col>
          </Col>
        </Row>
        <Divider orientation="left">Raw flex style</Divider>
        <Row>
          <Col flex="1 1 200px" style={{ background: "#0070ff" }}>
            <S.Col>1 1 200px</S.Col>
          </Col>
          <Col flex="0 1 300px" style={style}>
            <S.Col>0 1 300px</S.Col>
          </Col>
        </Row>
      </S.Wrapper>
    </>
  );
};
