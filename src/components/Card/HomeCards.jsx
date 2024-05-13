import CardItem from './CardItem.jsx';
import NavbarItem from '../Navbar/NavbarItem.jsx';

export default function HomeCards() {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <CardItem>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            {/* <a
      href="/add-job.html"
      className="text-white bg-black hover:bg-gray-700 text-center hover:text-white rounded-md px-3 py-2"
    >
     Add Job
    </a> */}
            <NavbarItem item="Browse Jobs" url="/jobs" bgColor="black" />
          </CardItem>
          <CardItem bgColor="indigo-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            {/* <a
      href="/add-job.html"
      className="text-white bg-indigo-500 hover:bg-indigo-600 text-center hover:text-white rounded-md px-3 py-2"
    >
     Add Job
    </a> */}
            <NavbarItem
              item="Add Job"
              url="/add-job"
              bgColor="indigo-500"
              hoverBgColor="indigo-600"
            />
          </CardItem>
        </div>
      </div>
    </section>
  );
}
