import * as S from "./header.styles";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function HeaderUI() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div>한국어</div>
      </Menu.Item>
      <Menu.Item key="1">
        <div>English</div>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );

  return (
    <S.Wrapper>
      <img src="/netflix.png" />
      <S.Language>
        <S.WorldImage src="/world.png/" />
        <S.Breadcrumb overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            English <DownOutlined />
          </a>
        </S.Breadcrumb>
      </S.Language>
      <button>Sign In</button>
    </S.Wrapper>
  );
}
