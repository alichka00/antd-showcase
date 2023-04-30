import { Cascader, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import * as S from "./styles";
import { optionsLocation, optionList } from "data/options";

export const _Cascader = () => {
  const [placement, SetPlacement] = useState<
    "bottomLeft" | "bottomRight" | "topLeft" | "topRight"
  >("bottomLeft");

  const placementChange = (e: RadioChangeEvent) => {
    SetPlacement(e.target.value);
  };
  const handleChange = (value: string[]) => {
    console.log(value);
  };

  const onChange = (value: string[][]) => {
    console.log(value);
  };

  return (
    <>
      <Radio.Group
        value={placement}
        onChange={placementChange}
        style={{ paddingBottom: "20px" }}
      >
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <S.Wrapper>
        <Cascader
          options={optionsLocation}
          onChange={handleChange}
          placeholder="Please select"
          expandTrigger="hover"
          placement={placement}
        />
        <Cascader
          options={optionsLocation}
          onChange={handleChange}
          placeholder="Please select"
          defaultValue={["zhejiang", "hangzhou", "xihu"]}
          changeOnSelect
          placement={placement}
        />
        <Cascader
          placeholder="Please select"
          options={optionList}
          onChange={onChange}
          multiple
          maxTagCount="responsive"
          placement={placement}
        />
        <Cascader status="error" placeholder="Error" placement={placement} />
        <Cascader
          status="warning"
          multiple
          placeholder="Warning multiple"
          placement={placement}
        />
      </S.Wrapper>
    </>
  );
};
