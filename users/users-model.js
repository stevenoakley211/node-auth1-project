const db = require('../data/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db("users").select("id", "username");
  }
  
  function findBy(filter) {
    return db("users").where(filter);
  }
  
   function add(user) {
    return db("users").insert(user)
        .then(()=>{
            user
        })
  
    
  }
  
  function findById(id) {
    return db("users")
      .where({ id })
      .first();
  }