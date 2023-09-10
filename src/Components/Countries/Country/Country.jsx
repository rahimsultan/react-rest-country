import { useState } from "react";

const Country = ({country, handleListed}) => {
    const {name, population, flags, region, capital, languages} = country;
    const [isVisit, setVisit] = useState(false)
    const visit = ()=>{
        setVisit(!isVisit)
    }

  return (
    <div className=" rounded-md border">
    <img
      src={flags.png}
      alt={flags.alt}
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        {name.common}<span className='ml-2 text-2xl'>→</span>
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        Language: {languages ? Object.values(languages).join().slice(0, 20) + '...' : 'No data found'}
      </p>
      <div className="mt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-900">
          Region: {region}
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-900">
        Citizen: {population}
        </span>
        <span className="mb-2 mr-2 font-bold inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-900">
        Capital: {capital? capital : 'not found'}
        </span>
      </div>
      <button onClick={()=> handleListed(name.common, flags.png)} className="bg-slate-700 px-4 py-2 rounded-md text-white">Add</button>
      <button
      onClick={visit}
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {isVisit? 'Visited' : 'Visit Country'}
      </button>
    </div>
  </div>
  )
}

export default Country