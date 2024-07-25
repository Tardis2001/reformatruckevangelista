export default function Card(props) {
    return(

        <div className="max-w-sm my-10 align-middle lg:max-w-full lg:max-h-full lg:flex ">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:`url('${props.image}')`}} title="Woman holding a mug">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">

            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
            <div className="text-gray-900 text-base mb-2">{props.text}</div>

          </div>
        </div>
      </div>  
    );

}