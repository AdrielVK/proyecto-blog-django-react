import cases from "assets/img/cases.png"

export default function HeaderCasos(){
    return (
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-16 pb-32 sm:pt-48 sm:pb-40">
            <div>
              
              <div>
                <h1 className="text-4xl text-indigo-900 font-bold tracking-tight  sm:text-6xl">
                  Casos de estudio
            
                </h1>
                <p className="mt-6 text-lg max-w-2xl sm:max-w-86 md:max-w-xl leading-8 text-gray-600 pt-10 ">
                   Lorep ipsum Lorep ipsum Lorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep 
                   Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum
                </p>
              </div>
              
              <div className=" flow-root absolute max-w-7xl inset-x-0 top-[calc(100%-22rem)] md:top-[calc(100%-22rem)] -z-10 transform-gpu overflow-hidden bg-white  lg:top-[calc(100%-25rem)] sm:top-[calc(100%-22rem)]">
                <img src={cases} className="float-right w-24 sm:w-32 lg:w-86 md:w-60 object-cover "/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}