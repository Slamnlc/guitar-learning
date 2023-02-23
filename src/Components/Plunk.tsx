import React, {createRef, useRef, useState} from 'react';
import Input from "./Input";
import Button from "./Button";
import {getRandomValueFromArray} from "../Utils/helpers";
import {toast} from "react-toastify";

const Plunk = () => {

  const stringNumber = useRef<HTMLDivElement>(null);
  const intervalInput = createRef<HTMLInputElement>();
  const stringList = useRef<HTMLInputElement>(null);
  const [string, setString] = useState<string>("")
  const [currentInterval, setCurrentInterval] = useState<number | undefined>(undefined);

  const startInterval = (event: React.FormEvent) => {
    event.preventDefault();
    if (currentInterval !== undefined) {
      clearInterval(currentInterval);
    }
    const values = stringList.current!.value.match(/\b[1-6]\b/g);
    if (!values) {
      toast.error("Некоректне значення струн")
      return
    }
    setString(values[0]);
    const intervalTime = +intervalInput.current?.value! * 1000;
    setCurrentInterval(+setInterval(() => {
      updateString(values)
    }, intervalTime));
  }

  const updateString = (values: RegExpMatchArray) => {
    const element = stringNumber.current!;
    element.classList.add("hide");
    setTimeout(() => {
      setString(getRandomValueFromArray(values));
      element.classList.add("no-visible");
      element.classList.remove("hide");
      element.classList.add("show");
      setTimeout(() => {
        element.classList.remove("no-visible");
        element.classList.remove("show");
      }, 300)
    }, 300)
  }

  return (
    <>
      <div ref={stringNumber} className="string-number">{string}</div>
      <form onSubmit={startInterval} action="">
        <div className="wrap-string-setup">
          <Input id="interval" label="Вкажіть інтервал оновлення у секундах"
                 type="number" required step="0.1" min={0.1} placeholder="2.5" defaultValue="2.5"
                 ref={intervalInput}/>
          <Input id="interval" label="Вкажіть струни через кому"
                 type="text" required placeholder="4, 5, 6" defaultValue="4, 5, 6"
                 ref={stringList}/>
        </div>
        <div className="wrap-start-button">
          <Button text="Почати" type="submit"
                  extraClass="btn-primary"/>
        </div>
      </form>

    </>

  );
};

export default Plunk;
