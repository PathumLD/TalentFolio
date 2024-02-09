import React from 'react'


const CandidateAppliedVacancies = () => {
  return (
    <>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-4 lg:-mx-4">
        <div className="inline-block min-w-full py-2 sm:px-4 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-sm text-center font-regular">
              <thead className="font-medium text-blue-text">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Company</th>
                  <th scope="col" className="px-6 py-4">Job Title</th>
                  <th scope="col" className="px-6 py-4">CV</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="transition duration-300 ease-in-out text-primary-text">
                  <td className="px-6 py-4 font-medium whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">Boffo Labs</td>
                  <td className="px-6 py-4 whitespace-nowrap">Software Engineer</td>
                  <td className="px-6 py-4 whitespace-nowrap">PLD_SE</td>
                  <td className="px-6 py-4 whitespace-nowrap">Downloaded</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-4 py-1 font-medium border rounded-xl hover:border-red-500">Cancel Application</button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CandidateAppliedVacancies
