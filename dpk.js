import crypto from 'crypto'

/**
 * 
 * @param {*} event 
 * @returns {String} candidate
 */
const deterministicPartitionKey = (event) => {
  let candidate = "0";

  if (event) {
    if (event.partitionKey) {
      candidate = JSON.stringify(event.partitionKey);
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  return candidate;
};

export default deterministicPartitionKey