import { Col, Row, Select, Space } from "antd";
import { useMemo, useState } from "react";
import { CovidByProvince } from "../models/user";
import { Tile } from "./Tile";

type props = {
  data: CovidByProvince[];
};
export const CovidPage: React.FC<props> = ({ data }) => {
  const provinces = useMemo(() => {
    return data.map((x) => x.province);
  }, [data]);

  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  
  const dataDisplay = useMemo<CovidByProvince | null>(() => {
    return data?.find((x) => x.province === selectedProvince) ?? null;
  }, [selectedProvince, data]);

  const onSelect = (v: string) => {
    setSelectedProvince(v);
  };

  return (
    <Row style={{margin: 8}}>
      <Space direction="vertical">
        <Row>
          <Col span={24}>
            <Select style={{ width: 300 }} onSelect={onSelect}>
              {provinces.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </Select>
          </Col>
        </Row>
        {dataDisplay && (
          <>
            <Row>
              <Col span={24}>
                <h1>{dataDisplay.txn_date}</h1>
              </Col>
            </Row>
            <Row wrap={true} justify="center">
              <Tile title="NEW CASE" value={dataDisplay.new_case} tail="Case" />
              <Tile
                title="NEW CASE (exc. abroad)"
                value={dataDisplay.new_case_excludeabroad}
                tail="Case"
              />
              <Tile
                title="NEW DEATH"
                value={dataDisplay.new_death}
                tail="Case"
              />
              <Tile title="TOTAL" value={dataDisplay.total_case} tail="Case" />
              <Tile
                title="TOTAL (exc. abroad)"
                value={dataDisplay.total_case_excludeabroad}
                tail="Case"
              />
              <Tile
                title="TOTAL DEATH"
                value={dataDisplay.total_death}
                tail="Case"
              />
            </Row>
            <Row>
              <Col span={24}>
                <h1>UPDATE TIME: {dataDisplay.update_date}</h1>
              </Col>
            </Row>
          </>
        )}
      </Space>
    </Row>
  );
};
