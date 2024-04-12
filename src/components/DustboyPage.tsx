import {Button, Col, Row, Select, Space} from "antd";
import React, {FC, useEffect, useMemo, useState} from "react";
// import {CovidByProvince} from "../models/user";
import {DustboyStation, StationValue} from "../models/dustboy";
import {Tile} from "./Tile";
import {useQueryClient} from "react-query";

type props = {
    stationList: DustboyStation[],
    stationDetail: StationValue| undefined,
    onSelectStation: (v: string) => void,
}
export const DustboyPage: FC<props> = ({stationList, stationDetail, onSelectStation}) => {
    // const station = useMemo(() => {
    //     return stationList.reduce((acc: {[key: number]: string}, x) => {
    //         acc[x.dustboy_id] = x.dustboy_name_th;
    //         return acc;
    //     }, {} as {[key: number]: string});
    // }, [stationList]);

    const queryClient = useQueryClient()
    const cTime = queryClient.getQueryData<number>(["cTime"])


   

    return (
        <Row style={{margin: 8}}>
            <Space direction="vertical">
                <Row>
                    {/* <Button onClick={() => setEnabled(!isEnabled)}>Toggle to {isEnabled ? `Disable` : `Enable`}</Button> */}
                </Row>
                <Row>
                    <Col span={24}>
                    <h1>SELECT LOCATION</h1>
                    <p>( Some data may NOT be appear )</p>
                    <Select style={{width: 600}} onSelect={onSelectStation}>
                        {stationList.map((x) => (
                            <option key={x.dustboy_id} value={x.dustboy_id}>
                            {x.dustboy_name_th}
                            </option>
                        ))}
                    </Select>
                      
                    </Col>
                </Row>
                {stationDetail && (
                    <>
                        <Row>
                            <Col span={24}>
                                {/* <h2>{stationDetail.dustboy_name}</h2> */}
                                
                            </Col>
                        </Row>
                        
                        <Row wrap={true} justify="center">
                           
                            <Tile
                                title="PM 10"
                                head={`rgb(${"255, 240, 36"})`}
                                value={stationDetail.pm10_us_aqi !== undefined && stationDetail.pm10_us_aqi !== null? stationDetail.pm10_us_aqi : "No data"}
                                />
                                
                            <Tile
                                title="PM 2.5"
                                head={`rgb(${"247, 180, 79"})`}
                                value={stationDetail.pm25_us_aqi !== undefined && stationDetail.pm25_us_aqi !== null ? stationDetail.pm25_us_aqi : "No data"}
                                />

                            <Tile
                                title="Temperature"
                                head={`rgb(${"36, 204, 255"})`}
                                value={stationDetail.daily_temp !== undefined && stationDetail.daily_temp !== null ? stationDetail.daily_temp : "No data"}
                                />

                            <Tile
                                title="Humidity"
                                head={`rgb(${"36, 124, 255"})`}
                                value={stationDetail.daily_humid !== undefined && stationDetail.daily_humid !== null? stationDetail.daily_humid : "No data"}
                                />

                            <Tile
                                title="Air Quality"
                                value={stationDetail.us_title !== undefined ? stationDetail.us_title_en : "No data"}
                                head={`rgb(${"233, 36, 255"})`}
                                tail={`rgb(${stationDetail.us_color})`}
                                />
                                                
                        </Row>
                        <Row>
                            <Col span={24}>
                                <p style={{fontSize: 18}}>{stationDetail.daily_th_caption_en}</p>
                                <h2>UPDATE TIME: {stationDetail.log_datetime !== undefined ? stationDetail.log_datetime : "No data"}</h2>
                                {/* <h2>INTERVAL TIME: {cTime}</h2> */}
                            </Col>
                        </Row>
                    </>
                )}
            </Space>
        </Row>
    );
};
