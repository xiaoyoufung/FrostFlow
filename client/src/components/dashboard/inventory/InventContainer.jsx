import Status from '../../../model/StorageStatus'
import InventBox from './InventBox'

const InventContainer = () => {
      const none = Status.NONE;
      const full = Status.FULL_STOCK;
      const low = Status.LOW_STOCK;
      const out = Status.OUT_OF_STOCK;
      const well = Status.WELL_STOCK;
      const clear = Status.TRANSPARENT;
    
      const Invents = [
        [none, full, full, low, well, well, low, out, out, out, full, full, low, none],
        [full, full],
        [full, full],
        [low, clear, full, low, full, out, well, well, low, out, full, full, clear, clear],
        [full, clear, full, low, full, out, well, well, low, out, full, full, clear, full],
        [full, low],
        [well, low],
        [none, well, out, full, low, well, well, full, low, out, full, full, low, none],
    ];
    
  return (
    <div className='bg-white w-[500px] p-6'>
      {Invents.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between">
          {row.map((element) => {
            return InventBox({ status: element });
          })}
        </div>
      ))}
    </div>
  )
}

export default InventContainer