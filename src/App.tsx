import React, { useCallback, useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAll, getCurrentTime, postCall } from "./services/api";
import { DisplayBox } from "./components/DisplayBox";
import "antd/dist/antd.css";
import { Button, Switch, Typography } from "antd";
import { CovidByProvince } from "./models/user";
import { CovidPage } from "./components/CovidPage";
import { LoadingOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const App: React.FC = () => {
  const queryClient = useQueryClient();
  //const [result, setResult] = useState<CovidByProvince[]>([]);

  const [timeDisplay, setTimeDisplay] = useState<number>();
  const [timeDisplay2, setTimeDisplay2] = useState<number>();
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  // Queries
  const {
    isLoading: isLoadingData,
    refetch: getData,
    data: result,
  } = useQuery<CovidByProvince[]>("summary", getAll, {
    enabled: isEnabled,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,

    //onSuccess: (res: CovidByProvince[]) => setResult(res),
    //onError: (err: any) => setResult(err),
  });

  useQuery("cTime", getCurrentTime, {
    onSuccess: (res: number) => setTimeDisplay(res),
    refetchIntervalInBackground: true,
    refetchInterval: 1000,
    enabled: isEnabled,
  });

  const timeDisplay3 = useMemo(() => {
    return timeDisplay2;
  }, [timeDisplay2]);

  useEffect(() => {
    if (isLoadingData) {
    } //setResult([]);
  }, [isLoadingData]);

  const getAllData = () => {
    try {
      //setResult([]);
      getData();
    } catch (err: any) {
      //setResult(err);
    }
  };

  useEffect(() => {
    if (isEnabled)
      setTimeout(() => {
        setTimeDisplay2(Date.now());
      }, 1000);
  }, [timeDisplay2, isEnabled]);

  const updateHandler = useCallback(
    (d: string) => {
      console.log(`${d} ${timeDisplay}`);
    },
    [timeDisplay]
  );

  const updateHandlerOriginal = (d: string) => {
    console.log(`${d} ${timeDisplay}`);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={getAllData}>Fetch Data</Button>
        <Text code>{result && result.length > 0 && JSON.stringify(result)}</Text>
        <p>{timeDisplay}</p>
        <p>{timeDisplay2}</p>
        <p>{timeDisplay3}</p>
        <Text code>Toggle Update :{isEnabled ? "True" : "False"}</Text>
        <Switch
          defaultChecked={isEnabled}
          onChange={() => setIsEnabled((v) => !v)}
        />
      </header>
      {[1, 2, 3].map((x) => (
        <DisplayBox data={x} updateHandler={updateHandlerOriginal} />
      ))} */}
      {isLoadingData && <LoadingOutlined />}
      {result && <CovidPage data={result} />}
    </div>
  );
};
