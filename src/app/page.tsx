import Card from "@/components/custom/card";

export default function Home() {
  return (
    <main className="min-h-[100svh] items-center justify-between bg-black text-white">
      <div className="max-w-screen-xl mx-auto w-screen relative">
        <div className="static  lg:fixed flex flex-col justify-between w-full p-24 h-screen lg:py-24 lg:pl-32 lg:max-w-xl">
          <div>
            <h1 className="font-bold text-6xl">Rizqi</h1>
            <p>
              I am an independent frontend programmer and project builder with a
              passion for startups and new technologies.
            </p>
          </div>
          <div>social</div>
        </div>
        <div className="static lg:absolute p-24 w-full flex flex-col gap-5 md:right-0 md:py-24 lg:pl-0 lg:max-w-xl lg:pr-24">
          <h1 className="lg:hidden">Project</h1>
          <Card
            title="Malang Hacker Link"
            description="IT community that specifically discusses hacking, cyber security, and programming. had been inactive until 2016, when it was reactivated in Malang City."
          />
          <Card
            title="Malang Hacker Link"
            description="IT community that specifically discusses hacking, cyber security, and programming. had been inactive until 2016, when it was reactivated in Malang City."
          />
        </div>
      </div>
    </main>
  );
}
