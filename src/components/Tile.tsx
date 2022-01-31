import { Card } from "antd";

type props = {
  title: string;
  value: number;
  tail: string;
};
export const Tile: React.FC<props> = ({ title, value, tail }) => {
  return (
    <Card
      title={title}
      style={{ width: 300, margin: 8 }}
    >{`${value} ${tail}`}</Card>
  );
};
