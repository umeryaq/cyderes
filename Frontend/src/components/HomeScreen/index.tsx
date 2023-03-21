import { Loader } from "components/Loader";
import { useFetchData } from "hooks";
import { FC, memo, useState, useRef, MouseEvent } from "react";
import "./index.css";

export const HomeScreen: FC = memo(() => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate, data, isLoading, error } = useFetchData();

  if (isLoading) return <Loader />;

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { current: inputElem } = inputRef;
    if (!inputElem || !inputElem.value) return;
    mutate(inputElem.value);
  };

  return (
    <div className="home__container">
      {error ? <div>{(error as Error).message}</div> : null}
      {data ? (
        <div>
          <h2 className="heading">
            Your IP is <b>{data?.ip}</b>
          </h2>
          <h2 className="heading">
            Your domain is <b>{data?.domain}</b>{" "}
          </h2>
        </div>
      ) : null}
      <input type="text" ref={inputRef} placeholder="8.8.8.8" />
      <button type="submit" onClick={handleSubmit}>
        Lookup
      </button>
    </div>
  );
});
