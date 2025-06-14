import React from 'react'

const UseContextCard = () => {    
    const[isToggle, setIsToggle] = React.useState(false);

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4 text-gray-800">Parent Component</h4>
      <ChildToggle isToggle={isToggle} setIsToggle={setIsToggle} />
      <ChildDisplay isToggle={isToggle} />
    </div>
  )
}

const ChildToggle = ({ isToggle, setIsToggle }: { isToggle: boolean; setIsToggle: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow">
      <h5 className="text-lg font-semibold mb-2">Child Component</h5>
      <button
        onClick={() => setIsToggle(!isToggle)}
        className={`px-4 py-2 rounded-lg ${isToggle ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        {isToggle ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

const ChildDisplay = ({ isToggle }: { isToggle: boolean }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow mt-4">
      {isToggle && <div>
        Child Component is ON<h5 className="text-lg font-semibold mb-2"></h5>
        </div>}
      
      <p className="text-gray-700">
        The toggle is currently: <strong>{isToggle ? 'ON' : 'OFF'}</strong>
      </p>
    </div>
  )
}

export default UseContextCard