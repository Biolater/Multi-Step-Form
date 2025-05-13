const Step1 = () => {
  return (
    <div className="flex-1 relative">
      <div className="shadow-lg md:shadow-none -mt-18 md:m-0 p-5 bg-white rounded-lg flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-primary-marine-blue">
            Personal info
          </h3>
          <p className="text-neutral-cool-gray text-sm">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <form action="">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm text-primary-marine-blue"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border border-neutral-light-gray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-purplish-blue transition-all duration-300"
                name="name"
                type="text"
                placeholder="e.g. Stephen King"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm text-primary-marine-blue"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="border border-neutral-light-gray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-purplish-blue transition-all duration-300"
                name="email"
                type="text"
                placeholder="e.g. stephenking@lorem.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm text-primary-marine-blue"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="border border-neutral-light-gray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-purplish-blue transition-all duration-300"
                name="phone"
                type="text"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
