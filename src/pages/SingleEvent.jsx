
export default function SingleEvent() {
  return (
    <>
      <div className="ctn_single_evenement h-screen bg-yellow-300">
        <div className="ctn_presentation_evenement bg-gray-300">
          <div className="ctn_pict bg-yellow-200  ">Picturee</div>

          <div className="ctn_information_evenement flex">
            <form>
              <div className='flex'>
                  <label htmlFor="" className='text-white text-xl'>Evenement :</label>
                  <input type="text" className='ml-2 outline-none border-b-2 bg-transparent w-52 text-white text-xl mb-2'/>
              </div>
              <div className='mt-2 text-white'>
                  <label htmlFor="" className='text-xl'>Date   :</label>
                  <input type="date" className='ml-16 outline-none border-b-2 bg-transparent w-52 text-white text-xl mb-2'/>
              </div>
              <div className='mt-2 text-white'>
                  <label htmlFor="" className='text-xl'>Lieu    :</label>
                  <input type="text" className='ml-16 outline-none border-b-2 bg-transparent w-52 text-white text-xl mb-2'/>
              </div>
            </form>
            <div className="h-full bg-red-600 w-2/4">
                <h1 className='mt-2 text-white text-xl mb-2'>Détail</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda nulla numquam excepturi commodi a suscipit, praesentium nemo minima? Eaque.</p>
            </div>

          </div>
        </div>
        <div>

      <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2"></th>
          <th className="border px-4 py-2">Simple</th>
          <th className="border px-4 py-2">Silver</th>
          <th className="border px-4 py-2">Gold</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Intro to CSS</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">112</td>
          <td className="border px-4 py-2">112</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Intro to JavaScript</td>
          <td className="border px-4 py-2">Chris</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
        </tr>
      </tbody>
    </table>
    
        </div>
      </div>
    </>
  )
}
