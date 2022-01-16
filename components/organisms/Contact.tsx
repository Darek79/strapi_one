import { FormEvent, useState } from 'react';
import { TextElement, Button } from 'components';
interface ContactI {}

interface Properties extends HTMLFormControlsCollection {
  name?: HTMLInputElement;
  email?: HTMLInputElement;
}

interface Data extends HTMLFormElement {
  readonly elements: Properties;
}

export default function Contact(): JSX.Element {
  function mySubmit(e: FormEvent<Data>) {
    e.preventDefault();
    console.log(e.currentTarget.elements.name?.value);
    console.log(e.currentTarget.elements.email?.value);
  }

  return (
    <section className="h-screen bg-pageWhite">
      <div className="w-full flex justify-center items-center h-3/4 lg:h-4/6">
        <TextElement
          className="text-9xl lg:text-[12rem] font-bold"
          htmlTag="h1"
        >
          CON
          <span className="sm:hidden">
            -<br />
          </span>
          TACT
        </TextElement>
      </div>
      <div className="flex w-full justify-center lg:justify-end lg:w-5/6 relative">
        <form
          method="post"
          className="w-[300px] flex flex-col gap-2"
          onSubmit={mySubmit}
        >
          <div className="flex">
            <label
              className="bg-pageYellow w-full py-2 text-center"
              htmlFor="name"
            >
              NAME
            </label>
            <input className="px-2" type="text" name="name" required />
          </div>
          <div className="flex">
            <label
              className="bg-pageYellow w-full py-2 text-center"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input className="px-2" type="text" name="email" required />
          </div>
          <Button
            className="bg-pageYellow w-20 py-2 mt-6 text-center ml-auto"
            type="submit"
          >
            SEND
          </Button>
        </form>
        <div className="text-center absolute left-0 -top-10">
          <TextElement htmlTag="p">ERROR</TextElement>
        </div>
      </div>
    </section>
  );
}
