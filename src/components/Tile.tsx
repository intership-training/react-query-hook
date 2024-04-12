import {Card} from "antd";
import {FC} from "react";

type props = {
    title: string;
    value: number | string;
    head?: string;
    tail?: string;
};

export const Tile: FC<props> = ({title, value, head, tail}) => {

    return (
        <Card
            title={title}
            style={{width: 300, margin: 8, fontSize: 32}}
            headStyle={{ backgroundColor: head,}}
            bodyStyle={{ color: tail}}
        >
            {value}
        </Card>
    );
};
