import { Space, Card } from "antd";
import { useContext } from "react";
import { Aside } from "./Aside/AsideComponents";
import { Form } from "./Form/FormComponent";
import { ContextApp } from "../Context/ContextApp";
import { ContextTypeApp } from "../@types/@types.stepsForm";

export const MainContent = (): JSX.Element => {
  const {
    dataContext: { formTitle },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <div className="main-content">
      <Card bodyStyle={{ padding: "5px 15px 15px 15px" }}>
        <Space direction="vertical" style={{ width: "50%" }}>
          <Aside />
        </Space>
        <Space>
          <Form title={formTitle} />
        </Space>
      </Card>
    </div>
  );
};
