import React, {useEffect, useState} from 'react';
import './App.css';
import {useQuery} from "react-query";
// import {CovidPage} from "./components/CovidPage";
// import {CovidByProvince} from "./models/user";
import {DustboyPage} from "./components/DustboyPage";
import { DustboyStation, StationValue} from "./models/dustboy";
import {getAllStationList, getAllDetailList, getCurrentTime} from "./services/api";
import {LoadingOutlined} from "@ant-design/icons";
import {Button} from "antd";
const App = () => {
    //const [result, setResult] = useState<CovidByProvince[]>([])

    const [timeDisplay, setTimeDisplay] = useState<number>();
    const [timeDisplay2, setTimeDisplay2] = useState<number>();
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [selectedStationId, setSelectedStationId] = useState<string>("");

    // Queries
    const {
        isLoading: isLoadingStationList,
        refetch: getStationList,
        data: stationList,
        isError: stationListError
    } = useQuery<DustboyStation[]>(["station"], getAllStationList, {
        enabled: true,
        refetchIntervalInBackground: false,
    })

    const onSelectStation = (v: string) => {
        setSelectedStationId(v);
      };

    const {
        isLoading: isLoadingStaionDetail,
        refetch: getStationDetail,
        data: stationDetail,
        isError: stationDetailError
    } = useQuery<StationValue>(["stationValue", {selectedStationId}],
        async () => await getAllDetailList(selectedStationId), {
        enabled: true,
        refetchIntervalInBackground: false,
        initialData: undefined,
    })
    
    useQuery(["cTime"], getCurrentTime, {
        onSuccess: (res: number) => setTimeDisplay(res),
        refetchIntervalInBackground: true,
        // refetchInterval: 1000,
        enabled: true,
    });

    useEffect(() => {
        if (isEnabled)
            setTimeout(() => {
                setTimeDisplay2(Date.now());
            }, 1000);
    }, [timeDisplay2, isEnabled]);

    return (
        <div className="App">
            {(isLoadingStationList || isLoadingStaionDetail) && <LoadingOutlined/>}
            {/*<Button onClick={getAllData}>Force Get Data</Button>*/}
            {stationList && <DustboyPage stationList={stationList} stationDetail={stationDetail} onSelectStation={onSelectStation}/>}
        </div>
    );
}

export default App;
