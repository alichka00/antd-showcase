import { Button, Radio, Space } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { useState } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";

export const Buttons: React.FC = () => {
  const [size, setSize] = useState<SizeType>("middle");
  return (
    <S.Container>
      <>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </>
      <Space direction="vertical" size={[8, 16]}>
        <Button block size={size}>
          Block
        </Button>
        <S.Buttons>
          <Button disabled size={size}>
            Default (disabled)
          </Button>
          <Button type="dashed" shape="round" size={size}>
            Dashed
          </Button>
          <Button type="ghost" size={size}>
            Ghost
          </Button>
          <Button type="link" danger size={size}>
            Danger Link
          </Button>
          <Button type="primary" loading size={size}>
            Loading
          </Button>
          <Button icon={<SyncOutlined />} shape="circle" size={size}></Button>
        </S.Buttons>
      </Space>
    </S.Container>
  );
};
