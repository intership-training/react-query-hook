type props = {
  data: any;
  updateHandler: Function;
};
export const DisplayBox: React.FC<props> = ({ data, updateHandler }) => {
  return (
    <>
      MY DISPLAY <button onClick={() => updateHandler("x")}>Click me!</button>
    </>
  );
};
