import { Button } from 'components';
interface FrontPageI {}

export default function FrontPage(): JSX.Element {
  return (
    <section className="h-[100vh]">
      <header className="h-[50%] flex flex-col justify-center items-center">
        <p className="text-6xl font-bold">MARKETING</p>
        <p className="text-6xl font-bold leading-snug">DESIGN</p>
      </header>
      <div className="flex flex-col justify-center items-center gap-6 mt-12">
        <Button className="bg-blue-200 px-20 py-4" type="button" tabIndex={0}>
          test
        </Button>
        <Button className="bg-blue-200 px-20 py-4" type="button" tabIndex={0}>
          test
        </Button>
      </div>
    </section>
  );
}
