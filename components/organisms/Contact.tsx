import { FormEvent, useState, useEffect, useRef } from 'react';
import classname from 'classnames';
import { TextElement, Button, Header, Input } from 'components';
import isEmail from 'validator/lib/isEmail';
interface ContactI {}

interface Properties extends HTMLFormControlsCollection {
  name?: HTMLInputElement;
  email?: HTMLInputElement;
}

interface Data extends HTMLFormElement {
  readonly elements: Properties;
}

interface StatusMsg {
  ok: string;
  error: string;
}

export default function Contact(): JSX.Element {
  const [status, setStatus] = useState<string>('');
  const [errorName, setStatusName] = useState<string>('');
  const [errorEmail, setStatusEmail] = useState<string>('');

  const mainErrorClasses = classname({
    'bg-error-green w-[300px] p-2': status.startsWith('We'),
    'bg-error-red w-[300px] p-2': status,
    'w-[300px] p-2': !status
  });

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {}, []);

  function mySubmit(e: FormEvent<Data>) {
    e.preventDefault();
    if (!e.currentTarget.elements.name?.value) {
      setStatus('PLEASE CHECK THE FIELDS');
      setStatusName('Please provide your name');
    }
    if (!e.currentTarget.elements.email?.value) {
      setStatus('PLEASE CHECK THE FIELDS');
      setStatusEmail('Please provide a email adress');
      return;
    }

    if (
      e.currentTarget.elements.name?.value &&
      e.currentTarget.elements.email?.value
    ) {
      if (!isEmail(e.currentTarget.elements.email?.value)) {
        e.currentTarget.elements.email.value = '';
        setStatusEmail('Please provide a valid email adress');
        return;
      }

      //call API PATH
      setStatus('We will contact you soon');
      setStatusName('');
      setStatusEmail('');
      formRef.current!.reset();
    }
  }

  return (
    <section className="h-screen bg-pageWhite">
      <div className="w-full flex justify-center items-center h-1/2 lg:h-4/6">
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
      <div className="flex flex-col w-full justify-center items-center md:items-end lg:justify-end md:w-5/6 relative">
        <div className={mainErrorClasses}>
          <TextElement className="text-center text-pageWhite" htmlTag="p">
            {status}
          </TextElement>
        </div>
        <form
          method="post"
          className="w-[300px] flex flex-col"
          onSubmit={mySubmit}
          ref={formRef}
          aria-label="Contact form"
        >
          <Input name="name" label="NAME" errorMessage={errorName} />
          <Input name="email" label="EMAIL" errorMessage={errorEmail} />
          <Button
            className="bg-pageYellow w-20 py-2 mt-6 text-center ml-auto"
            type="submit"
            tabIndex={0}
          >
            SEND
          </Button>
        </form>
      </div>
    </section>
  );
}
