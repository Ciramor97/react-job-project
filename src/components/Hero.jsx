export default function Hero({ title, subtitle }) {
  return (
    <section className="bg-indigo-700 md:py-20 sm:py-10 py-5 md:mb-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="my-4 text-xl text-white">{subtitle}</p>
      </div>
    </section>
  );
}
