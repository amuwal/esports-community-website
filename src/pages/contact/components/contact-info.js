export default function ContactInfo() {
  return (
    <>
      <div className="flex flex-col items-start justify-center flex-grow gap-[30px]">
        <div className="flex items-center gap-[25px] text-white">
          <div>
            <img
              className="h-[20px] w-[20px] rounded-full bg-gray-500"
              src="https://assets.website-files.com/61a231a8d3ce910c73d1c543/61acbfb497cd8f66f0a75a43_email.png"
              alt="Email"
            />
          </div>
          <div className="flex flex-col gap-[10px] text-[18px] font-bold">
            <div className="">Phone</div>
            <div className="flex flex-col">
              <p>123456789</p>
              <p>987654321</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[25px] text-white">
          <div>
            <img
              className="h-[20px] w-[20px] rounded-full bg-gray-500"
              src="https://assets.website-files.com/61a231a8d3ce910c73d1c543/61acbfb497cd8f66f0a75a43_email.png"
              alt="Email"
            />
          </div>
          <div className="flex flex-col gap-[10px] text-[18px] font-bold">
            <div className="">Address</div>
            <div className="flex flex-col">
              <p>Address line 1</p>
              <p>Address line 2</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[25px] text-white">
          <div>
            <img
              className="h-[20px] w-[20px] rounded-full bg-gray-500"
              src="https://assets.website-files.com/61a231a8d3ce910c73d1c543/61acbfb497cd8f66f0a75a43_email.png"
              alt="Email"
            />
          </div>
          <div className="flex flex-col gap-[10px] text-[18px] font-bold">
            <div className="">Email</div>
            <div className="flex flex-col">
              <p>emailone@gmail.com</p>
              <p>emailtwo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
