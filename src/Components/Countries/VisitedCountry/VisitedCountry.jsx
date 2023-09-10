
const VisitedCountry = ({visited}) => {
    // console.log(visited);
    
  return (
    <>
        <h2 className="text-xl font-bold p-3">Visited Country List:</h2>
        <div className="max-w-7xl mx-auto  mb-2">
            <ul className="list-decimal">
                {
                    visited.length === 0? 'click add btn to list your visited country' : visited.map((visit, i)=>{
                        return (
                            <div key={i} className="flex items-center gap-10 rounded-md mb-2">
                            <div className="w-[200px]">
                                <h4>{visit.name}</h4>
                            </div>
                            <div className="w-[50px] h-[20px]">
                                <img src={visit.img} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default VisitedCountry