const db = require('./db');

async function create(visitorLog) {
  const result = await db.query(
    `INSERT INTO bsik_dev_visitors
    (ip_addr, timestamp, uid, origin) 
    VALUES 
    ("${visitorLog.ip_addr}", "${visitorLog.timestamp}", "${visitorLog.uid}", "${visitorLog.origin}")`
  );

  let message = 'Error in creating visitor log';

  if (result.affectedRows) {
    message = 'Visitor log entry created successfully';
  }

  return { message };
}

module.exports = {
  create,
};
