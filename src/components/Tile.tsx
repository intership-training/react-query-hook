import {Card} from "antd";
import {FC} from "react";

type props = {
    title: string;
    value: number;
    tail?: string;
};

export const Tile: FC<props> = ({title, value, tail}) => {

    return (
        <Card
            title={title}
            style={{width: 300, margin: 8, fontSize: 32}}
        >
            {value}
        </Card>
    );
};
