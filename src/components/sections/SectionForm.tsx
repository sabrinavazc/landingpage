import { Form } from "../Form";


export function SectionForm() {
  return (
    <section className="flex items-center justify-center w-full h-auto lg:h-[687px] mx-0 bg-image-form bg-no-repeat bg-center bg-cover lg:px-[220px] p-10 lg:p-0">
      <div className="flex flex-col px-1 lg:flex-row items-center justify-center w-full">
        <div className="lg:w-1/2 max-w-[90%] lg:max-w-[50%] mx-4 lg:mx-0 my-4 lg:my-0">
          <h1 className="text-jogga-white text-4xl lg:text-6xl font-bold leading-tight max-w-[90%] lg:max-w-none">
            Get More Done with Whitepace
          </h1>
          <p className="text-jogga-white text-lg lg:text-xl max-w-[90%] mt-6">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
        </div>
        <div className="lg:w-1/2 max-w-[90%] lg:max-w-[50%] mx-4 lg:mx-0 my-4 lg:my-0">
          <Form />
        </div>
      </div>
    </section>
  );
}
