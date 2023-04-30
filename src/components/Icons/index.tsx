import Icon, { SyncOutlined, SmileTwoTone } from "@ant-design/icons";
import * as S from "./styles";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { createFromIconfontCN } from "@ant-design/icons";

export const Icons = () => {
  const LockSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24" />
        <path
          d="M8,16 C8,13.790861 9.790861,12 12,12 C14.209139,12 16,13.790861 16,16 C16,16 8,16 8,16 Z M4,18 L20,18 C20.5522847,18 21,18.4477153 21,19 C21,19.5522847 20.5522847,20 20,20 L4,20 C3.44771525,20 3,19.5522847 3,19 C3,18.4477153 3.44771525,18 4,18 Z"
          fill="#000000"
          fill-rule="nonzero"
        />
        <path
          d="M19.5,13 L21,13 C21.8284271,13 22.5,13.6715729 22.5,14.5 C22.5,15.3284271 21.8284271,16 21,16 L19.5,16 C18.6715729,16 18,15.3284271 18,14.5 C18,13.6715729 18.6715729,13 19.5,13 Z M16.0606602,8.87132034 L17.1213203,7.81066017 C17.7071068,7.22487373 18.6568542,7.22487373 19.2426407,7.81066017 C19.8284271,8.39644661 19.8284271,9.34619408 19.2426407,9.93198052 L18.1819805,10.9926407 C17.5961941,11.5784271 16.6464466,11.5784271 16.0606602,10.9926407 C15.4748737,10.4068542 15.4748737,9.45710678 16.0606602,8.87132034 Z M3,13 L4.5,13 C5.32842712,13 6,13.6715729 6,14.5 C6,15.3284271 5.32842712,16 4.5,16 L3,16 C2.17157288,16 1.5,15.3284271 1.5,14.5 C1.5,13.6715729 2.17157288,13 3,13 Z M12,4.5 C12.8284271,4.5 13.5,5.17157288 13.5,6 L13.5,7.5 C13.5,8.32842712 12.8284271,9 12,9 C11.1715729,9 10.5,8.32842712 10.5,7.5 L10.5,6 C10.5,5.17157288 11.1715729,4.5 12,4.5 Z M4.81066017,7.81066017 C5.39644661,7.22487373 6.34619408,7.22487373 6.93198052,7.81066017 L7.99264069,8.87132034 C8.57842712,9.45710678 8.57842712,10.4068542 7.99264069,10.9926407 C7.40685425,11.5784271 6.45710678,11.5784271 5.87132034,10.9926407 L4.81066017,9.93198052 C4.22487373,9.34619408 4.22487373,8.39644661 4.81066017,7.81066017 Z"
          fill="#000000"
          fill-rule="nonzero"
          opacity="0.3"
        />
      </g>
    </svg>
  );

  const LockIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LockSvg} {...props} />
  );

  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js",
      "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js",
    ],
  });

  return (
    <S.Container>
      <S.Wrapper>
        <SyncOutlined spin style={{ fontSize: "34px" }} />
        <hr />
        <p>Rotate icon with animation</p>
      </S.Wrapper>
      <S.Wrapper>
        <SmileTwoTone
          rotate={180}
          twoToneColor="#ebd22f"
          style={{ fontSize: "34px" }}
        />
        <hr />
        <p>Rotate the two-color icon 180 degrees</p>
      </S.Wrapper>
      <S.Wrapper>
        <LockIcon style={{ fontSize: "34px" }} />
        <hr />
        <p>SVG Icon</p>
      </S.Wrapper>
      <S.Wrapper>
        <S.WrapperIcons>
          <IconFont type="icon-javascript" style={{ fontSize: "24px" }} />
          <IconFont type="icon-java" style={{ fontSize: "24px" }} />
          <IconFont type="icon-python" style={{ fontSize: "24px" }} />
        </S.WrapperIcons>
        <hr />
        <p>Multiple resources from iconfont.cn</p>
      </S.Wrapper>
    </S.Container>
  );
};