import Status from "./StorageStatus";

const getText = (status) => {
    let text = '';
    switch (status) {
        case Status.OUT_OF_STOCK:
          text = 'Out of Stock';
          break;
        case Status.LOW_STOCK:
          text = 'Low Stock';
          break;
        case Status.WELL_STOCK:
          text = 'Well Stock';
          break;
        case Status.FULL_STOCK:
          text = 'Full Stock';
          break;
        default:
          text = 'Unknown';
          break;
      }
      return text;
}

const getColor = (status) => {
    let color = '';
    switch (status) {
        case Status.OUT_OF_STOCK:
          color = 'red-600/75';
          break;
        case Status.LOW_STOCK:
          color = 'orange-500/75';
          break;
        case Status.WELL_STOCK:
          color = 'amber-400';
          break;
        case Status.FULL_STOCK:
          color = 'emerald-600/75';
          break;
        default:
          color = 'gray-300';
          break;
      }
      return color;
}

export { getText, getColor };