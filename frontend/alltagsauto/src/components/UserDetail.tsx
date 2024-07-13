import usersExample from "@/helpers/usersExample";
export default function UserDetail() {
  return (
    <>
      <div className=" flex flex-col gap-4">
        <h2 className="text-lg text-end  font-medium text-gray-700 border-b-2">
          Profile
          
        </h2>
        <div className=" w-96 h-auto border-black/5 border-2 rounded-lg shadow-md flex-col justify-stretch items-center flex">
          <div className=" px-6 py-5 justify-center items-center gap-11 inline-flex">
            <img
              className=" rounded-md   shadow"
              src={usersExample[0].photo}
              alt={usersExample[0].name}
            />
          </div>

          <div className="self-stretch h-px bg-gray-200" />
          <div className="  px-6 py-5   items-start  w-full border-b ">
            <div className="flex flex-row gap-24   ">
              <div className=" w-24  text-gray-500 text-sm font-medium  leading-tight ">
                Nombre
              </div>
              <div className=" text-gray-900 text-sm font-normal  leading-tight">
                {usersExample[0].name}
              </div>
            </div>
          </div>
          {/* <div className="self-stretch h-px bg-gray-200" /> */}
          <div className="  px-6 py-5   items-start  w-full border-b ">
            <div className="flex flex-row gap-24   ">
              <div className=" w-24  text-gray-500 text-sm font-medium  leading-tight">
                Apellido
              </div>
              <div className=" text-gray-900 text-sm font-normal  leading-tight">
                {usersExample[0].name}
              </div>
            </div>
          </div>
          {/* <div className="self-stretch h-px bg-gray-200" /> */}
          <div className="  px-6 py-5   items-start  w-full ">
            <div className="flex flex-row gap-24   ">
              <div className=" w-24  text-gray-500 text-sm font-medium  leading-tight">
                Email
              </div>
              <div className=" text-gray-900 text-sm font-normal  leading-tight">
                {usersExample[0].email}
              </div>
            </div>
          </div>
        </div>
        <button className="block underline shadow-sm bg-yellow-100/25 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-yellow-400/75 transition-colors  hover:text-yellow-50">
          Modify account
        </button>
      </div>
    </>
  );
}
