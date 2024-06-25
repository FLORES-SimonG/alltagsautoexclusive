import InProgress from "./../../../components/InProgress";

interface CarDetailsProps {
  id: number;
}


export default function carDetails({ id }: CarDetailsProps) {
    // let id = CarDetailsProps.id;
    // console.log(id);
  if (id) {
    return (
        <div>
            {/* <h2>Sie haben die ID {id} gewählt</h2> */}

      <div className="h-screen w-full flex flex-col justify-center items-center ">
        <InProgress />
        </div>
      </div>
    );
  } else {
    return (
        <div>
        {/* <h2>Sie haben die ID --{id} gewählt</h2> */}

  <div className="h-screen w-full flex flex-col justify-center items-center ">
    <InProgress />
    </div>
  </div>
    );
  }
}
