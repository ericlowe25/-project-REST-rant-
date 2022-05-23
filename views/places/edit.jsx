const React = require('react')
const Def = require('../default.jsx')

function edit_form (data){
   return (
       <Def>
           <main>
               <h1>Edit Place</h1>
               <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id="name" name="name" Value={data.place.name} required></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' id="pic" name="pic" Value={data.place.pic}></input>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id="city" name="city" Value={data.place.city}></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id="state" name="state" Value={data.place.state}></input>
                        </div>
                         
                    </div>

                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input className='form-control' id="cuisines" name="cuisines" Value={data.place.cuisines} required></input>
                    </div>
                  
                </form>
           </main>
       </Def>
    )
   }    

   module.exports = edit_form

