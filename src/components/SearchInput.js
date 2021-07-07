import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'

 const SearchInput =({click})=> {
  return (
    <div>

      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <ArrowNarrowLeftIcon onClick={click} className=" h-8 w-8 mr-3 pointer-events-auto  z-50 cursor-pointer text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="email"
          id="email"
          className="block  text-xl  h-12 w-full pl-10  ml-2  bg-gray-900 text-gray-700 border-gray-300 rounded-md"
          placeholder="Search"
        />
      </div>
    </div>
  )
}


export default SearchInput