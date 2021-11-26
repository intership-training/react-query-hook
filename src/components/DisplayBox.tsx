import { Button } from "antd";

type props = {
  data: any;
  updateHandler: Function;
};
export const DisplayBox: React.FC<props> = ({ data, updateHandler }) => {
  return (
    <div>
      <h1>{data}</h1>
      <Button onClick={() => updateHandler("x")}>Click me!</Button>
    </div>
  );
};
