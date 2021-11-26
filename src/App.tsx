import React, { useCallback, useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAll, getCurrentTime, postCall } from "./services/api";
import { DisplayBox } from "./components/DisplayBox";

function App() {
  const queryClient = useQueryClient();
  const [result, setResult] = useState<string>("");
  const [timeDisplay, setTimeDisplay] = useState<number>();
  const [timeDisplay2, setTimeDisplay2] = useState<number>();
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  // Queries
  const { isLoading: isLoadingData, refetch: getData } = useQuery(
    "summary",
    getAll,
    {
      enabled: isEnabled,
      onSuccess: (res) => setResult(res),
      onError: (err: any) => setResult(err),
    }
  );

  useQuery("cTime", getCurrentTime, {
    onSuccess: (res: number) => setTimeDisplay(res),
    refetchIntervalInBackground: true,
    refetchInterval: 1000,
    enabled: isEnabled,
  });

  // Mutations
  const mutation = useMutation(postCall, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("summary");
    },
  });

  const timeDisplay3 = useMemo(() => {
    return timeDisplay2;
  }, [timeDisplay2]);

  useEffect(() => {
    if (isLoadingData) setResult("searching...");
  }, [isLoadingData]);

  const getAllData = () => {
    try {
      setResult("");
      getData();
    } catch (err: any) {
      setResult(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeDisplay2(Date.now());
    }, 1000);
  }, [timeDisplay2]);

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getAllData}>Fetch Data</button>
        <p>{JSON.stringify(result)}</p>
        <p>{timeDisplay}</p>
        <p>{timeDisplay2}</p>
        <p>{timeDisplay3}</p>
        <button onClick={() => setIsEnabled((v) => !v)}>
          Toggle Update :{isEnabled ? "True" : "False"}
        </button>
      </header>
      <DisplayBox data={[]} updateHandler={updateHandlerOriginal} />
    </div>
  );
}

export default App;
