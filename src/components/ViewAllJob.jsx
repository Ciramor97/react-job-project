import NavbarItem from './Navbar/NavbarItem.jsx';

export default function ViewAllJob() {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <NavbarItem
        item="View All Jobs"
        url="/jobs"
        bgColor="black"
        hoverBgColor="indigo-600"
        display="block"
        customPadding="py-4 px-6"
      />
    </section>
  );
}
