export default function Users(){
    return (
        <div className="flex flex-col md:grid grid-cols-2 gap-4">
            <div className="border border-gray-200 flex flex-col p-4 gap-4 w-full">
                <div className="text-xl font-bold text-gray-700 body-font font-poppins">Niyomugabo Bernard</div>
                <span className="font-medium text-gray-700">0786082841</span>
                <div className="text-blue-600 font-bold text-lg hover:text-white cursor-pointer hover:bg-blue-600 p-1 border-2 rounded text-center border-blue-600">Activate</div>
            </div>
        </div>
    )
}